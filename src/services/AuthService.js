import Bus from '../helpers/BusHelper'
import Http from '../helpers/HttpHelper'
import Storage from '../helpers/StorageHelper'

const AuthService = (() => {
    const _uris = {
        register: '/Usuarios/Registrar',
        login: '/Usuarios/Login',
    }

    const login = async body => await _handleError(async () => {
        const data = await Http.post(_uris.login, {
            Senha: body.password,
            Email: body.email,
        })

        Storage.add('token', data)

        return true
    })

    const logout = async () => {
        Storage.remove('token')
        return true
    }

    const register = async body => await _handleError(async () => {
        await Http.post(_uris.register, {
            Senha: body.password,
            Email: body.email,
            Nome: body.name,
        })

        return true
    })

    const _handleError = async callback => {
        try {
            return await callback()
        } catch (error) {
            Bus.publish(`notification`, {
                message: error.message,
                title: `Atenção!`,
                type: `danger`,
            });

            return false
        }
    }

    return { login, logout, register }
})()

export default AuthService
