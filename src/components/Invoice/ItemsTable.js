import React from 'react'
import ItemsLine from './ItemsLine'

class ItemsTable extends React.Component {
    render = () => (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>SKU</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Valor total</th>
                    <th className="text-right">Ações</th>
                </tr>
            </thead>
            <tbody>{ this._renderLines() }</tbody>
        </table>
    )

    _renderLines = () => this.props.items.map(item => (
        <ItemsLine key={ item.id } item={ item } onDestroy={ this.props.onDestroy } />
    ))
}

export default ItemsTable
