import React from 'react'
import MoneyTd from '../UI/MoneyTd'
import DestroyButton from '../UI/DestroyButton'

class ItemsLine extends React.Component {
    state = { pending: false }

    handleDestroy = async id => {
        this.setState({ pending: true })
        const destroyed = await this.props.onDestroy(id)

        if (! destroyed) {
            this.setState({ pending: false })
        }
    }

    render = () => {
        const { id, product, ...item } = this.props.item

        return (
            <tr>
                <td>{ product.name }</td>
                <td>{ product.sku }</td>
                <MoneyTd prefix="R$ ">{ item.price }</MoneyTd>
                <MoneyTd>{ item.quantity }</MoneyTd>
                <MoneyTd prefix="R$ ">{ item.totalPrice }</MoneyTd>
                <td className="text-right">
                    <DestroyButton pending={ this.state.pending } onClick={ () => this.handleDestroy(id) }>
                        Excluir
                    </DestroyButton>
                </td>
            </tr>
        )
    }
}


export default ItemsLine
