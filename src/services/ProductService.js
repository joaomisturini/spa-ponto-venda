import Http from '../helpers/HttpHelper'
import { float, handleError } from '../helpers/MethodsHelper'

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
            origin: product.Origem,
            unit: product.Unidade,
            price: product.Preco,
            name: product.Nome,
            ncm: product.NCM,
            sku: product.SKU,
            id: product.Id,
        }))
    }, [])

    const create = async body => await handleError(async () => {
        await Http.post(_uris.create, {
            Saldo: float(body.balance),
            Preco: float(body.price),
            Origem: body.origin,
            Unidade: body.unit,
            Nome: body.name,
            NCM: body.ncm,
            SKU: body.sku,
        })

        return true
    }, false)

    const show = async id => await handleError(async () => {
        const product = JSON.parse(
            await Http.get(_uris.show + id)
        )

        return {
            balance: product.Saldo,
            origin: product.Origem,
            unit: product.Unidade,
            price: product.Preco,
            name: product.Nome,
            ncm: product.NCM,
            sku: product.SKU,
            id: product.Id,
        }
    }, {})

    const update = async (id, body) => await handleError(async () => {
        await Http.put(_uris.update + id, {
            Saldo: float(body.balance),
            Preco: float(body.price),
            Origem: body.origin,
            Unidade: body.unit,
            Nome: body.name,
            NCM: body.ncm,
            SKU: body.sku,
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
