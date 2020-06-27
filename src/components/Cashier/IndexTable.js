import React from 'react'
import IndexLine from './IndexLine'

class IndexTable extends React.Component {
    render = () => (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Saldo</th>
                    <th>Status</th>
                    <th className="text-right">Ações</th>
                </tr>
            </thead>
            <tbody>{ this._renderLines() }</tbody>
        </table>
    )

    _renderLines = () => this.props.cashiers.map(cashier => (
        <IndexLine key={ cashier.id } cashier={ cashier } onDestroy={ this.props.onDestroy } />
    ))
}

export default IndexTable
