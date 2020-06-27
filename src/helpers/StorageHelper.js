const StorageHelper = (() => {
    const fetch = key => localStorage.getItem(key)

    const add = (key, data) => localStorage.setItem(key, data)

    const remove = key => localStorage.removeItem(key)

    const has = key => fetch(key) !== null

    return { fetch, add, remove, has }
})()

export default StorageHelper
