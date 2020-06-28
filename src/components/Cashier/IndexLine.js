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

        await this.props.onClose(id)
        this.setState({ pending: false })
    }

    render = () => {
        const { id, open, ...cashier } = this.props.cashier

        return (
            <tr>
                <td>{ cashier.name }</td>
                <td>R$ { cashier.balance }</td>
                <td>{ this._renderBadge(open) }</td>
                <td className="text-right">{ this._renderButtons(id, open) }</td>
            </tr>
        )
    }

    _renderBadge = open => {
        const badgeClass = open ? 'success' : 'danger'
        const badgeText = open ? 'Aberto' : 'Fechado'

        return <span className={ `badge badge-${ badgeClass }` }>{ badgeText }</span>
    }

    _renderButtons = (id, open) => {
        const editUri = `/caixas/editar/${ id }`
        const openUri = `/caixas/abrir/${ id }`

        const openCloseButton = ! open
            ? <Link to={ openUri } className="btn btn-sm btn-outline-primary">Abrir caixa</Link>
            : <IndexDropdown id={ id } pending={ this.state.pending } onClose={ () => this.handleClose(id) } />

        const editButton = this.props.profile === 0 && (
            <Link to={ editUri } className="btn btn-sm btn-outline-secondary ml-2 mr-2">Editar</Link>
        )

        const destroyButton = this.props.profile === 0 && (
            <DestroyButton pending={ this.state.pending } onClick={ () => this.handleDestroy(id) }>
                Excluir
            </DestroyButton>
        )

        return <>{ openCloseButton }{ editButton }{ destroyButton }</>
    }
}

export default IndexLine
