import Http from '../helpers/HttpHelper'
import Storage from '../helpers/StorageHelper'
import { handleError } from '../helpers/MethodsHelper'

const AuthService = (() => {
    const _uris = { login: '/Usuarios/Login' }

    const login = async body => await handleError(async () => {
        const data = await Http.post(_uris.login, {
            Senha: body.password,
            Email: body.email,
        })

        Storage.add('token', data)

        return true
    }, false)

    const logout = async () => {
        Storage.remove('token')

        return true
    }

    return { login, logout }
})()

export default AuthService
