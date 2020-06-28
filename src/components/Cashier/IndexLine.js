import React from 'react'
import { Link } from 'react-router-dom'
import IndexDropdown from './IndexDropdown'
import DestroyButton from '../UI/DestroyButton'

class IndexLine extends React.Component {
    state = { pending: false }

    handleDestroy = async id => {
        this.setState({ pending: true })
        const destroyed = await this.props.onDestroy(id)

        if (! destroyed) {
            this.setState({ pending: false })
        }
    }

    handleClose = async id => {
        this.setState({ pending: true })
        const closed = await this.props.onClose(id)

        if (! closed) {
            this.setState({ pending: false })
        }
    }

    render = () => {
        const { id, isOpen, ...cashier } = this.props.cashier

        return (
            <tr>
                <td>{ cashier.name }</td>
                <td>R$ { cashier.balance }</td>
                <td>{ this._renderBadge(isOpen) }</td>
                <td className="text-right">{ this._renderButtons(id, isOpen) }</td>
            </tr>
        )
    }

    _renderBadge = isOpen => {
        const badgeClass = isOpen ? 'success' : 'danger'
        const badgeText = isOpen ? 'Aberto' : 'Fechado'

        return <span className={ `badge badge-${ badgeClass }` }>{ badgeText }</span>
    }

    _renderButtons = (id, isOpen) => {
        const editUri = `/caixas/editar/${ id }`
        const openUri = `/caixas/abrir/${ id }`

        const openCloseButton = ! isOpen
            ? <Link to={ openUri } className="btn btn-sm btn-outline-primary">Abrir caixa</Link>
            : <IndexDropdown pending={ this.state.pending } onClose={ () => this.handleClose(id) } />

        return (
            <>
                { openCloseButton }
                <Link to={ editUri } className="btn btn-sm btn-outline-secondary ml-2 mr-2">Editar</Link>
                <DestroyButton pending={ this.state.pending } onClick={ () => this.handleDestroy(id) }>
                    Excluir
                </DestroyButton>
            </>
        )
    }
}

export default IndexLine
