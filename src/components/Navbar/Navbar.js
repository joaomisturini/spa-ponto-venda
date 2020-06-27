import React from 'react'
import NavItem from './NavItem'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    state = { open: false }

    handleClick = event => {
        event.preventDefault()

        this.setState(({ open }) => ({ open: ! open }))
    }

    render = () => (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link to="/" className="navbar-brand">Ponto de venda</Link>

            <button type="button" className="navbar-toggler" onClick={ this.handleClick }>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={ `collapse navbar-collapse ${ this.state.open ? 'show' : '' }` }>
                { this._renderLinks() }
                <ul className="navbar-nav">
                    <Dropdown onLogout={ this.props.onLogout } />
                </ul>
            </div>
        </nav>
    )

    _renderLinks = () => {
        const providerLink = this.props.profile < 2
            ? <NavItem to="/fornecedores">Fornecedores</NavItem>
            : ''

        const productLink = this.props.profile < 2
            ? <NavItem to="/produtos">Produtos</NavItem>
            : ''

        const purchaseLink = this.props.profile < 2
            ? <NavItem to="/compras">Compras</NavItem>
            : ''

        return (
            <ul className="navbar-nav mr-auto">
                { providerLink }
                { productLink }
                { purchaseLink }
                <NavItem to="/caixas">Caixas</NavItem>
                <NavItem to="/consultar-saldo">Consultar saldo</NavItem>
            </ul>
        )
    }
}

export default Navbar
