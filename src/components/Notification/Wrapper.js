import React from 'react'
import NotificationItem from './Item'
import Bus from '../../helpers/BusHelper'

class NotificationWrapper extends React.Component {
    constructor(props) {
        super(props)

        this.state = { notifications: [] }

        this.busToken = null
    }

    componentDidMount = () => {
        this.busToken = Bus.subscribe('notification', event => this.setState(({ notifications }) => ({
            notifications: notifications.concat({ key: Date.now(), ...event }),
        })))
    }

    componentWillUnmount = () => {
        Bus.unsubscribe(this.busToken)
    }

    handleClick = key => this.setState(({ notifications }) => ({
        notifications: notifications.filter(notification => notification.key !== key),
    }))

    render = () => (
        <>{ this.state.notifications.map(({ key, ...notification }) => (
            <NotificationItem key={ key } { ...notification } onClick={ () => this.handleClick(key) } />
        )) }</>
    )
}

export default NotificationWrapper
