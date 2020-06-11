// import Http from '../helpers/HttpHelper'
import Storage from '../helpers/StorageHelper'

const AuthService = (() => {
    // const _uris = {
    //     register: '/Usuarios/Registrar',
    //     login: '/Usuarios/Login',
    // }

    const login = body => new Promise(resolve => {
        Storage.add('token', 'teste')
        resolve(true)
    })

    const logout = () => new Promise(resolve => {
        Storage.remove('token')
        resolve(true)
    })

    const register = body => new Promise(resolve => {
        resolve(true)
    })

    return { login, logout, register }
})()

export default AuthService
