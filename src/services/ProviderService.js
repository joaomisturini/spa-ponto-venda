import Http from '../helpers/HttpHelper'
import { handleError } from '../helpers/MethodsHelper'

const ProviderService = (() => {
    const _uris = {
        list: '/Fornecedores/Listar',
        create: '/Fornecedores',
        show: '/Fornecedores/',
        update: '/Fornecedores/',
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
    })

    const create = async body => await handleError(async () => {
        await Http.post(_uris.create, {
            RazaoSocial: body.name,
            CNPJ: body.cnpj,
            Telefone: body.phone,
            Email: body.email,
        })

        return true
    })

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
    })

    const update = async (id, body) => await handleError(async () => {
        await Http.put(_uris.update + id, {
            RazaoSocial: body.name,
            CNPJ: body.cnpj,
            Telefone: body.phone,
            Email: body.email,
        })

        return true
    })

    return { list, create, show, update }
})()

export default ProviderService
