import Http from '../helpers/HttpHelper'
import { handleError } from '../helpers/MethodsHelper'

const ProductService = (() => {
    const _uris = {
        list: '/Produtos/Listar',
        destroy: '/Produtos/',
        update: '/Produtos/',
        create: '/Produtos',
        show: '/Produtos/',
    }

    const list = async () => await handleError(async () => {
        const data = await Http.get(_uris.list)

        return JSON.parse(data).map(product => ({
            balance: product.Saldo,
            price: product.Preco,
            icms: product.ICMS,
            name: product.Nome,
            ean: product.EAN,
            ipi: product.IPI,
            id: product.Id,
        }))
    }, [])

    const create = async body => await handleError(async () => {
        await Http.post(_uris.create, {
            Saldo: body.balance,
            Preco: body.price,
            ICMS: body.icms,
            Nome: body.name,
            EAN: body.ean,
            IPI: body.ipi,
        })

        return true
    }, false)

    const show = async id => await handleError(async () => {
        const data = await Http.get(_uris.show + id)
        const product = JSON.parse(data)

        return {
            balance: product.Saldo,
            price: product.Preco,
            icms: product.ICMS,
            name: product.Nome,
            ean: product.EAN,
            ipi: product.IPI,
            id: product.Id,
        }
    }, {})

    const update = async (id, body) => await handleError(async () => {
        await Http.put(_uris.update + id, {
            Saldo: body.balance,
            Preco: body.price,
            ICMS: body.icms,
            Nome: body.name,
            EAN: body.ean,
            IPI: body.ipi,
        })

        return true
    }, false)

    const destroy = async id => await handleError(async () => {
        await Http.del(_uris.destroy + id)

        return true
    }, false)

    return { list, create, show, update, destroy }
})()

export default ProductService