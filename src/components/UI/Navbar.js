import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    state = { menuOpen: false }

    handleClick = () => {
        this.setState(({ menuOpen }) => ({
            menuOpen: ! menuOpen,
        }))
    }

    render = () => (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link to="/" className="navbar-brand">Ponto de venda</Link>

            <button type="button" className="navbar-toggler" onClick={ this.handleClick }>
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

                <button type="button" onClick={ this.props.onLogout }
                    className="btn btn-outline-danger my-2 my-md-0"
                >
                    Sair
                </button>
            </div>
        </nav>
    )
}

export default Navbar
