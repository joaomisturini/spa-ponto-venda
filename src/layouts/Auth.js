import React from 'react'
import { Redirect } from 'react-router-dom'
import Navbar from '../components/UI/Navbar'
import AuthService from '../services/AuthService'
import NotificationWrapper from '../components/Notification/Wrapper'

class LayoutsAuth extends React.Component {
    constructor(props) {
        super(props)

        this.state = { logged: true }
    }

    handleLogout = async () => {
        const isOut = await AuthService.logout()
        this.setState({ logged: ! isOut })
    }

    render = () => {
        if (! this.state.logged) {
            return <Redirect to="/login" />
        }

        return (
            <>
                <header><Navbar onLogout={ this.handleLogout } /></header>
                <div className="container-fluid pt-4">{ this.props.children }</div>
                <NotificationWrapper />
            </>
        )
    }
}

export default LayoutsAuth
