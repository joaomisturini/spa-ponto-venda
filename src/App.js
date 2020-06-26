import './App.css'
import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { WithAuth, WithGuest } from './layouts/Resolvers'
import { AuthRoute, GuestRoute } from './components/Routes'

import ScreensAuthLogin from './screens/Auth/Login'
import ScreensCashierEdit from './screens/Cashier/Edit'
import ScreensCashierOpen from './screens/Cashier/Open'
import ScreensProductEdit from './screens/Product/Edit'
import ScreensAuthRegister from './screens/Auth/Register'
import ScreensCashierIndex from './screens/Cashier/Index'
import ScreensProductIndex from './screens/Product/Index'
import ScreensProviderEdit from './screens/Provider/Edit'
import ScreensProviderIndex from './screens/Provider/Index'
import ScreensDashboard from './screens/Dashboard/Dashboard'


const App = () => (
    <BrowserRouter>
        <Switch>
            <GuestRoute path="/login" render={ props => WithGuest(ScreensAuthLogin, props) } />
            <GuestRoute path="/cadastrar" render={ props => WithGuest(ScreensAuthRegister, props) } />

            <AuthRoute path="/fornecedores/editar/:id" render={ props => WithAuth(ScreensProviderEdit, props) } />
            <AuthRoute path="/fornecedores/criar" render={ props => WithAuth(ScreensProviderEdit, props) } />
            <AuthRoute path="/fornecedores" render={ props => WithAuth(ScreensProviderIndex, props) } />
            <AuthRoute path="/produtos/editar/:id" render={ props => WithAuth(ScreensProductEdit, props) } />
            <AuthRoute path="/produtos/criar" render={ props => WithAuth(ScreensProductEdit, props) } />
            <AuthRoute path="/produtos" render={ props => WithAuth(ScreensProductIndex, props) } />
            <AuthRoute path="/compras" render={ props => WithAuth(ScreensDashboard, props) } />
            <AuthRoute path="/caixas/editar/:id" render={ props => WithAuth(ScreensCashierEdit, props) } />
            <AuthRoute path="/caixas/abrir/:id" render={ props => WithAuth(ScreensCashierOpen, props) } />
            <AuthRoute path="/caixas/criar" render={ props => WithAuth(ScreensCashierEdit, props) } />
            <AuthRoute path="/caixas" render={ props => WithAuth(ScreensCashierIndex, props) } />
            <AuthRoute path="/consultar-saldo" render={ props => WithAuth(ScreensDashboard, props) } />
            <AuthRoute path="/" render={ props => WithAuth(ScreensDashboard, props) } />
        </Switch>
    </BrowserRouter>
)

export default App
