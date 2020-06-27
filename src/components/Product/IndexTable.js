import React from 'react'
import IndexLine from './IndexLine'

class IndexTable extends React.Component {
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

    _renderLines = () => this.props.products.map(product => (
        <IndexLine key={ product.id } product={ product } onDestroy={ this.props.onDestroy } />
    ))
}

export default IndexTable
