import Http from '../helpers/HttpHelper'
import { handleError } from '../helpers/MethodsHelper'

const ProviderService = (() => {
    const _uris = {
        list: '/Fornecedores/Listar',
        destroy: '/Fornecedores/',
        update: '/Fornecedores/',
        create: '/Fornecedores',
        show: '/Fornecedores/',
    }

    const list = async () => await handleError(async () => {
        const data = await Http.get(_uris.list)

        return JSON.parse(data).map(provider => ({
            name: provider.RazaoSocial,
            phone: provider.Telefone,
            email: provider.Email,
            cnpj: provider.CNPJ,
            id: provider.Id,
        }))
    }, [])

    const create = async body => await handleError(async () => {
        await Http.post(_uris.create, {
            RazaoSocial: body.name,
            Telefone: body.phone,
            Email: body.email,
            CNPJ: body.cnpj,
        })

        return true
    }, false)

    const show = async id => await handleError(async () => {
        const data = await Http.get(_uris.show + id)
        const provider = JSON.parse(data)

        return {
            name: provider.RazaoSocial,
            phone: provider.Telefone,
            email: provider.Email,
            cnpj: provider.CNPJ,
            id: provider.Id,
        }
    }, {})

    const update = async (id, body) => await handleError(async () => {
        await Http.put(_uris.update + id, {
            RazaoSocial: body.name,
            Telefone: body.phone,
            Email: body.email,
            CNPJ: body.cnpj,
        })

        return true
    }, false)

    const destroy = async id => await handleError(async () => {
        await Http.del(_uris.destroy + id)

        return true
    }, false)

    return { list, create, show, update, destroy }
})()

export default ProviderService
