import Http from '../helpers/HttpHelper'
import { date, float, handleError, serialize } from '../helpers/MethodsHelper'

const InvoiceService = (() => {
    const _uris = {
        destroyItem: '/NotasFiscais/_id_/RemoverItem/',
        createItem: '/NotasFiscais/_id_/IncluirItem',
        prices: '/NotasFiscais/_id_/DefinirValores',
        close: '/NotasFiscais/_id_/LancarNota',
        create: '/NotasFiscais/NovaNota',
        list: '/NotasFiscais/Listar',
        destroy: '/NotasFiscais/',
        show: '/NotasFiscais/',
    }

    const list = async () => await handleError(async () => {
        const data = await Http.get(_uris.list)

        return JSON.parse(data).map(_mapInvoice)
    }, [])

    const create = async body => await handleError(async () => {
        const invoice = await Http.post(_uris.create, {
            ValorSeguro: float(body.insurancePrice),
            ValorFrete: float(body.freightPrice),
            Fornecedor: { Id: body.providerId },
            DataEmissao: date(body.issueDate),
            Numero: body.number,
            Serie: body.series,
        })

        return _mapInvoice(JSON.parse(invoice))
    }, {})

    const show = async id => await handleError(async () => {
        const invoice = JSON.parse(
            await Http.get(_uris.show + id)
        )

        return _mapInvoice(invoice)
    }, {})

    const prices = async (id, body) => await handleError(async () => {
        const uri = _uris.prices.replace('_id_', id)
        const invoice = await Http.post(uri + '?' + serialize({
            ValorSeguro: float(body.insurancePrice),
            ValorFrete: float(body.freightPrice),
        }))

        return _mapInvoice(JSON.parse(invoice))
    }, {})

    const close = async id => await handleError(async () => {
        const invoice = await Http.post(_uris.close.replace('_id_', id))

        return _mapInvoice(JSON.parse(invoice))
    })

    const destroy = async id => await handleError(async () => {
        await Http.del(_uris.destroy + id)

        return true
    }, false)

    const createItem = async (id, body) => await handleError(async () => {
        const invoice = await Http.post(_uris.createItem.replace('_id_', id), {
            ValorImpostos: float(body.taxPrice),
            Quantidade: float(body.quantity),
            Produto: { Id: body.productId },
            Preco: float(body.price),
        })

        return _mapInvoice(JSON.parse(invoice))
    }, {})

    const destroyItem = async (id, itemId) => await handleError(async () => {
        const uri = _uris.destroyItem.replace('_id_', id)
        const invoice = await Http.post(uri + itemId)

        return _mapInvoice(JSON.parse(invoice))
    }, {})

    const _mapInvoice = ({
        Fornecedor: provider,
        Itens: items,
        ...invoice
    }) => ({
        items: items.map(_mapInvoiceItem),
        insurancePrice: invoice.ValorSeguro,
        freightPrice: invoice.ValorFrete,
        taxPrice: invoice.ValorImpostos,
        totalPrice: invoice.ValorTotal,
        issueDate: invoice.DataEmissao,
        number: invoice.Numero,
        open: invoice.EmEdicao,
        series: invoice.Serie,
        id: invoice.Id,
        provider: {
            name: provider.RazaoSocial,
            phone: provider.Telefone,
            email: provider.Email,
            cnpj: provider.CNPJ,
            id: provider.Id,
        },
    })

    const _mapInvoiceItem = ({ Produto: product, ...item }) => ({
        taxPrice: item.ValorImpostos,
        quantity: item.Quantidade,
        totalPrice: item.Total,
        price: item.Preco,
        id: item.Id,
        product: {
            balance: product.Saldo,
            origin: product.Origem,
            unit: product.Unidade,
            price: product.Preco,
            name: product.Nome,
            ncm: product.NCM,
            sku: product.SKU,
            id: product.Id,
        },
    })

    return {
        list, create, show, prices, close, destroy, createItem, destroyItem
    }
})()

export default InvoiceService
