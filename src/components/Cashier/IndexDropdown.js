import React from 'react'
import { Link } from 'react-router-dom'

class IndexDropdown extends React.Component {
    state = { open: false }

    handleClick = event => {
        event.preventDefault()
        this.setState(({ open }) => ({ open: ! open }))
    }

    handleClose = event => {
        event.preventDefault()
        this.props.onClose()
    }

    render = () => {
        const depositUri = `/caixas/depositar/${ this.props.id }`
        const withdrawUri = `/caixas/sacar/${ this.props.id }`

        return (
            <div className="btn-group">
                <button type="button" onClick={ this.handleClick }
                    className="btn btn-sm btn-outline-primary dropdown-toggle"
                >
                    { this.props.pending ? 'Aguarde...' : 'Operar caixa' }
                </button>
                <div className={ `dropdown-menu ${ this.state.open ? 'show' : '' }` }>
                    <Link to={ depositUri } className="dropdown-item">Depositar valor</Link>
                    <Link to={ withdrawUri } className="dropdown-item">Sacar valor</Link>
                    <a href="#fechar" className="dropdown-item text-danger" onClick={ this.handleClose }>Fechar</a>
                </div>
            </div>
        )
    }
}

export default IndexDropdown
