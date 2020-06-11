import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Ponto de venda</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/fornecedores" className="nav-link">Fornecedores</Link>
                </li>
                <li className="nav-item">
                    <Link to="/compras" className="nav-link">Compras</Link>
                </li>
                <li className="nav-item">
                    <Link to="/abrir-caixa" className="nav-link">Abrir caixa</Link>
                </li>
                <li className="nav-item">
                    <Link to="/consultar-saldo" className="nav-link">Consultar saldo</Link>
                </li>
            </ul>

            <button type="button" onClick={ props.onLogout } className="btn btn-outline-danger">Sair</button>
        </div>
    </nav>
)

export default Navbar
