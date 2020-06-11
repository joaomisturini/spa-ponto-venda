import Bus from './BusHelper'
import Storage from './StorageHelper'

const HttpHelper = (() => {
    const _url = 'https://apipontovenda.azurewebsites.net/api'

    const get = uri => _fetch('GET', uri)
        // .then(response => response.json())

    const post = (uri, body) => _fetch('POST', uri, body)

    const _fetch = (method, uri, body = null) => {
        const jsonBody = body !== null ? JSON.stringify(body) : null

        return fetch(_url + uri, _makeConfig(method, jsonBody)).then(
            response => _handleError(response)
        )
    }

    const _makeConfig = (method, body) => {
        const headers = {
            'Authorization': `Bearer ${ Storage.fetch('token') }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }

        return { headers, method, body }
    }

    const _handleError = response => {
        if (! response.ok) {
            Bus.publish('notification', {
                message: response.statusText,
                title: 'Atenção!',
                type: 'error',
            })
        }

        return response
    }

    return { get, post }
})()

export default HttpHelper
