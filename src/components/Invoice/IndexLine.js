import React from 'react'
import DateTd from '../UI/DateTd'
import MoneyTd from '../UI/MoneyTd'
import { Link } from 'react-router-dom'
import DestroyButton from '../UI/DestroyButton'
import PrimaryButton from '../UI/PrimaryButton'

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
        const { id, open, ...invoice } = this.props.invoice

        return (
            <tr>
                <td>{ invoice.number } / { invoice.series }</td>
                <DateTd>{ invoice.issueDate }</DateTd>
                <td>{ invoice.provider.name }</td>
                <MoneyTd prefix="R$ ">{ invoice.totalPrice }</MoneyTd>
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
        const itemsUri = `/compras/itens/${ id }`
        const pricesUri = `/compras/precos/${ id }`

        const editButtons = open && (
            <>
                <PrimaryButton pending={ this.state.pending } onClick={ () => this.handleClose(id) }>
                    Lançar compra
                </PrimaryButton>
                <Link to={ itemsUri } className="btn btn-sm btn-outline-secondary ml-2 mr-2">Ver itens</Link>
                <Link to={ pricesUri } className="btn btn-sm btn-outline-secondary mr-2">Editar valores</Link>
            </>
        )

        return (
            <>{ editButtons }
                <DestroyButton pending={ this.state.pending } onClick={ () => this.handleDestroy(id) }>
                    Excluir
                </DestroyButton>
            </>
        )
    }
}

export default IndexLine
