import Http from '../helpers/HttpHelper'
import Storage from '../helpers/StorageHelper'
import { handleError } from '../helpers/MethodsHelper'

const AuthService = (() => {
    const _uris = {
        register: '/Usuarios/Registrar',
        login: '/Usuarios/Login',
    }

    const login = async body => await handleError(async () => {
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

    const register = async body => await handleError(async () => {
        await Http.post(_uris.register, {
            Senha: body.password,
            Email: body.email,
            Nome: body.name,
        })

        return true
    })

    return { login, logout, register }
})()

export default AuthService
