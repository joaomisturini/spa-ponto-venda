import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    state = {
        profileOpen: false,
        menuOpen: false,
    }

    handleMenuClick = event => {
        event.preventDefault()

        this.setState(({ menuOpen }) => ({
            menuOpen: ! menuOpen,
        }))
    }

    handleProfileClick = event => {
        event.preventDefault()

        this.setState(({ profileOpen }) => ({
            profileOpen: ! profileOpen,
        }))
    }

    handleLogoutClick = event => {
        event.preventDefault()

        this.props.onLogout()
    }

    render = () => (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link to="/" className="navbar-brand">Ponto de venda</Link>

            <button type="button" className="navbar-toggler" onClick={ this.handleMenuClick }>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={ `collapse navbar-collapse ${ this.state.menuOpen ? 'show' : '' }` }>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/fornecedores" className="nav-link">Fornecedores</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/produtos" className="nav-link">Produtos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/compras" className="nav-link">Compras</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/caixas" className="nav-link">Caixas</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/consultar-saldo" className="nav-link">Consultar saldo</Link>
                    </li>
                </ul>

                <ul className="navbar-nav">
                    <li className="nav-item dropdown active">
                        <a href="#perfil" className="nav-link dropdown-toggle" onClick={ this.handleProfileClick }>
                            Meu perfil
                        </a>
                        <div className={ `dropdown-menu dropdown-menu-right ${ this.state.profileOpen ? 'show' : '' }` }>
                            <Link to="/perfil" className="dropdown-item">Editar</Link>
                            <a href="#logout" className="dropdown-item text-danger" onClick={ this.handleLogoutClick }>
                                Fazer logout
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
