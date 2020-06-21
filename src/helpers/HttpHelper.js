import Storage from './StorageHelper'

const HttpHelper = (() => {
    const _url = 'https://apipontovenda.azurewebsites.net/api'

    const get = async uri => await _fetch('GET', uri)

    const post = async (uri, body) => await _fetch('POST', uri, body)

    const _fetch = async (method, uri, body = null) => {
        const jsonBody = body !== null ? JSON.stringify(body) : null

        const response = await fetch(_url + uri, _makeConfig(method, jsonBody))

        return await _handleError(response)
    }

    const _makeConfig = (method, body) => {
        const headers = {
            'Authorization': `Bearer ${ Storage.fetch('token') }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }

        return { headers, method, body }
    }

    const _handleError = async response => {
        if (! response.ok) {
            throw Error(response.statusText)
        }

        return await response.text()
    }

    return { get, post }
})()

export default HttpHelper
