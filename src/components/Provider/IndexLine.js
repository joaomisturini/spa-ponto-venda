import React from 'react'
import { Link } from 'react-router-dom'
import DestroyButton from '../UI/DestroyButton'

class IndexLine extends React.Component {
    constructor(props) {
        super(props)

        this.state = { pending: false }
    }

    handleDestroy = async id => {
        this.setState({ pending: true })
        const destroyed = await this.props.onDestroy(id)

        if (! destroyed) {
            this.setState({ pending: false })
        }
    }

    render = () => {
        const { id, name, cnpj, phone, email } = this.props.provider
        const editUri = `/fornecedores/editar/${ id }`

        return (
            <tr>
                <td>{ name }</td>
                <td>{ cnpj }</td>
                <td>{ phone }</td>
                <td>{ email }</td>
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
