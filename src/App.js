import './App.css'
import React from 'react'
import ScreensAuthLogin from './screens/Auth/Login'
import { BrowserRouter, Switch } from 'react-router-dom'
import ScreensAuthRegister from './screens/Auth/Register'
import { WithAuth, WithGuest } from './layouts/Resolvers'
import { AuthRoute, GuestRoute } from './components/Routes'
import ScreensDashboard from './screens/Dashboard/Dashboard'

const App = () => (
    <BrowserRouter>
        <Switch>
            <GuestRoute path="/login" render={ props => WithGuest(ScreensAuthLogin, props) } />
            <GuestRoute path="/cadastrar" render={ props => WithGuest(ScreensAuthRegister, props) } />

            <AuthRoute path="/fornecedores" render={ props => WithAuth(ScreensDashboard, props) } />
            <AuthRoute path="/compras" render={ props => WithAuth(ScreensDashboard, props) } />
            <AuthRoute path="/abrir-caixa" render={ props => WithAuth(ScreensDashboard, props) } />
            <AuthRoute path="/consultar-saldo" render={ props => WithAuth(ScreensDashboard, props) } />
            <AuthRoute path="/" render={ props => WithAuth(ScreensDashboard, props) } />
        </Switch>
    </BrowserRouter>
)

export default App
