import React from 'react'

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

    render = () => (
        <div className="btn-group">
            <button type="button" onClick={ this.handleClick }
                className="btn btn-sm btn-outline-primary dropdown-toggle"
            >
                { this.props.pending ? 'Aguarde...' : 'Operar caixa' }
            </button>
            <div className={ `dropdown-menu ${ this.state.open ? 'show' : '' }` }>
                <a href="#depositar" className="dropdown-item">Depositar valor</a>
                <a href="#sacar" className="dropdown-item">Sacar valor</a>
                <a href="#fechar" className="dropdown-item text-danger" onClick={ this.handleClose }>Fechar</a>
            </div>
        </div>
    )
}

export default IndexDropdown
