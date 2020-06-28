import React from 'react'
import MoneyTd from '../UI/MoneyTd'
import { Link } from 'react-router-dom'
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

    render = () => {
        const { id, ...product } = this.props.product

        const taxColumns = this.props.profile < 2 && (
            <>
                <td>{ product.ean }</td>
                <MoneyTd prefix="R$ ">{ product.ipi }</MoneyTd>
                <MoneyTd prefix="R$ ">{ product.icms }</MoneyTd>
                <td className="text-right">{ this._renderButtons(id) }</td>
            </>
        )

        return (
            <tr>
                <td>{ product.name }</td>
                <MoneyTd prefix="R$ ">{ product.price }</MoneyTd>
                <MoneyTd>{ product.balance }</MoneyTd>
                { taxColumns }
            </tr>
        )
    }

    _renderButtons = id => (
        <>
            <Link to={ `/produtos/editar/${ id }` } className="btn btn-sm btn-outline-secondary mr-2">
                Editar
            </Link>
            <DestroyButton pending={ this.state.pending } onClick={ () => this.handleDestroy(id) }>
                Excluir
            </DestroyButton>
        </>
    )
}

export default IndexLine
