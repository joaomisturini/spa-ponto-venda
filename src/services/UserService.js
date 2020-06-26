import Bus from '../helpers/BusHelper'
import Http from '../helpers/HttpHelper'
import { handleError } from '../helpers/MethodsHelper'

const UserService = (() => {
    const _uris = {
        create: '/Usuarios/Registrar',
        update: '/Usuarios',
        show: '/Usuarios',
    }

    const create = async body => {
        if (body.password !== body.password_confirmation) {
            Bus.publish(`notification`, {
                message: 'As senhas não conferem.',
                title: `Atenção!`,
                type: `danger`,
            })

            return false
        }

        return await handleError(async () => {
            await Http.post(_uris.create, {
                Senha: body.password,
                Email: body.email,
                Nome: body.name,
                Perfil: 0,
            })

            return true
        }, false)
    }

    const show = async () => await handleError(async () => {
        const user = JSON.parse(
            await Http.get(_uris.show)
        )

        return {
            profile: user.Perfil,
            email: user.Email,
            name: user.Nome,
        }
    })

    const update = async body => await handleError(async () => {
        await Http.post(_uris.update, {
            Nome: body.name,
            Perfil: 0,
        })
    })

    return { create, show, update }
})()

export default UserService
