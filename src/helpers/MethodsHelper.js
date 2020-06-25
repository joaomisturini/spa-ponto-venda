import Bus from './BusHelper'

export const handleError = async (callback, errorData) => {
    try {
        return await callback()
    } catch (error) {
        Bus.publish(`notification`, {
            message: error.message,
            title: `Atenção!`,
            type: `danger`,
        })

        return errorData
    }
}
