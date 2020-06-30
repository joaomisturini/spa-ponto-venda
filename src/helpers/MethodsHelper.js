import moment from 'moment'
import Bus from './BusHelper'

export const date = string => moment.utc(string, 'DD/MM/YYYY - HH:mm:ss').format()

export const float = string => string.toString()
    .replace(/[,]/g, '.').replace(/[.](?=.*[.])/g, '')

export const handleError = async (callback, errorData) => {
    const decode = string => decodeURIComponent(escape(string))

    try {
        return await callback()
    } catch (error) {
        Bus.publish(`notification`, {
            message: decode(error.message),
            title: `Atenção!`,
            type: `danger`,
        })

        return errorData
    }
}

export const serialize = object => new URLSearchParams(object).toString()
