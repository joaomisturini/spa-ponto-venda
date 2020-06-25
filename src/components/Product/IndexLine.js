import React from 'react'
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
        const editUri = `/produtos/editar/${ id }`

        return (
            <tr>
                <td>{ product.name }</td>
                <td>{ product.ean }</td>
                <td>R$ { product.price }</td>
                <td>R$ { product.ipi }</td>
                <td>R$ { product.icms }</td>
                <td>{ product.balance }</td>
                <td className="text-right">
                    <Link to={ editUri } className="btn btn-sm btn-outline-secondary mr-2">Editar</Link>
                    <DestroyButton pending={ this.state.pending } onClick={ () => this.handleDestroy(id) }>
                        Excluir
                    </DestroyButton>
                </td>
            </tr>
        )
    }
}

export default IndexLine
