import Bus from './BusHelper'

export const cnpj = string => string.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    '$1.$2.$3/$4-$5'
)

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

export const phone = string => string.replace(
    /^(\d{2})(\d{4})(\d{4})/,
    '($1) $2-$3'
)

export const serialize = object => new URLSearchParams(object).toString()
