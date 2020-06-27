import React from 'react'
import { Link } from 'react-router-dom'

class Dropdown extends React.Component {
    state = { open: false }

    handleClick = event => {
        event.preventDefault()

        this.setState(({ open }) => ({ open: ! open }))
    }

    handleLogout = event => {
        event.preventDefault()

        this.props.onLogout()
    }

    render = () => (
        <li className="nav-item dropdown active">
            <a href="#perfil" className="nav-link dropdown-toggle" onClick={ this.handleClick }>Meu perfil</a>
            <div className={ `dropdown-menu dropdown-menu-right ${ this.state.open ? 'show' : '' }` }>
                <Link to="/perfil" className="dropdown-item">Editar</Link>
                <a href="#logout" className="dropdown-item text-danger" onClick={ this.handleLogout }>Fazer logout</a>
            </div>
        </li>
    )
}

export default Dropdown
