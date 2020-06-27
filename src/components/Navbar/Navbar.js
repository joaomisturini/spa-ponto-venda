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
                <ul className="navbar-nav mr-auto">
                    { this.props.profile < 2 && <NavItem to="/fornecedores">Fornecedores</NavItem>  }
                    <NavItem to="/produtos">Produtos</NavItem>
                    { this.props.profile < 2 && <NavItem to="/compras">Compras</NavItem> }
                    <NavItem to="/caixas">Caixas</NavItem>
                </ul>
                <ul className="navbar-nav">
                    <Dropdown onLogout={ this.props.onLogout } />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
