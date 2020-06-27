import React from 'react'
import { Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import AuthService from '../services/AuthService'
import UserService from '../services/UserService'
import NotificationWrapper from '../components/Notification/Wrapper'

class LayoutsAuth extends React.Component {
    state = {
        logged: true,
        profile: 0,
    }

    componentDidMount = async () => {
        const { profile } = await UserService.show()

        this.setState({ profile })
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
                <header>
                    <Navbar profile={ this.state.profile } onLogout={ this.handleLogout } />
                </header>
                <div className="container-fluid pt-4">{ this.props.children }</div>
                <NotificationWrapper />
            </>
        )
    }
}

export default LayoutsAuth
