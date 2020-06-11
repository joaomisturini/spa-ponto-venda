const StorageHelper = (() => {
    const fetch = key => localStorage.getItem(key)

    const add = (key, data) => localStorage.setItem(key, data)

    const remove = key => localStorage.removeItem(key)

    return { fetch, add, remove }
})()

export default StorageHelper
