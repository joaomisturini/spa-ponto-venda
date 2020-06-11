const BusHelper = (() => {
    const _topics = {}

    const subscribe = (topic, listener) => {
        if (! _topics[topic]) {
            _topics[topic] = []
        }

        _topics[topic].push(listener)

        return `${ topic }.${ _topics[topic].length - 1 }`
    }

    const unsubscribe = token => {
        const [ topic, index ] = token.split('.')

        _topics[topic] = _topics[topic].filter(
            (callback, i) => i !== parseInt(index, 10)
        )
    }

    const publish = (topic, event) => {
        if (! _topics[topic] || _topics[topic].length < 1) {
            return
        }

        _topics[topic].forEach(listener => listener(event))
    }

    return { subscribe, unsubscribe, publish }
})()

export default BusHelper
