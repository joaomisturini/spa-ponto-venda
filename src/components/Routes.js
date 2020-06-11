import React from 'react'
import Storage from '../helpers/StorageHelper'
import { Route, Redirect } from 'react-router-dom'

const isLogged = () => Storage.fetch('token') ? true : false

export const AuthRoute = ({ render: Component, ...rest }) => {
    const component = props => isLogged()
        ? <Component { ...props } /> : <Redirect to="/login" />

    return <Route render={ component } {...rest} />
}

export const GuestRoute = ({ render: Component, ...rest }) => {
    const component = props => ! isLogged()
        ? <Component {...props} /> : <Redirect to="/" />

    return <Route render={ component } {...rest} />
}
