import React from 'react'
import IndexLine from './IndexLine'

class IndexTable extends React.Component {
    state = { products: [] }

    componentDidMount = async () => {
        const products = await this.props.onLoad()
        this.setState({ products })
    }

    handleDestroy = async id => {
        const destroyed = await this.props.onDestroy(id)

        if (destroyed) {
            this.setState(({ products }) => ({
                products: products.filter(product => product.id !== id),
            }))
        }

        return destroyed
    }

    render = () => (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>EAN</th>
                    <th>Preço</th>
                    <th>IPI</th>
                    <th>ICMS</th>
                    <th>Saldo</th>
                    <th className="text-right">Ações</th>
                </tr>
            </thead>
            <tbody>{ this._renderLines() }</tbody>
        </table>
    )

    _renderLines = () => this.state.products.map(product => (
        <IndexLine key={ product.id } product={ product } onDestroy={ this.handleDestroy } />
    ))
}

export default IndexTable
