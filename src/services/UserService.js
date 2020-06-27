import Bus from '../helpers/BusHelper'
import Http from '../helpers/HttpHelper'
import Storage from '../helpers/StorageHelper'
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
                Perfil: body.profile,
                Senha: body.password,
                Email: body.email,
                Nome: body.name,
            })

            return true
        }, false)
    }

    const fetch = async () => await handleError(async () => {
        let user = JSON.parse(
            await Http.get(_uris.show)
        )

        Storage.add('user', JSON.stringify({
            profile: user.Perfil,
            email: user.Email,
            name: user.Nome,
        }))
    })

    const show = async () => await handleError(async () => {
        if (! Storage.has('user')) {
            await fetch()
        }

        const user = Storage.fetch('user')

        return JSON.parse(user)
    }, {})

    const update = async body => await handleError(async () => {
        await Http.put(_uris.update, {
            Perfil: body.profile,
            Nome: body.name,
        })

        await fetch()

        return true
    }, false)

    const destroy = async () => {
        Storage.remove('user')

        return true
    }

    return { create, fetch, show, update, destroy }
})()

export default UserService
