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
        <IndexLine key={ cashier.id }
            onDestroy={ this.props.onDestroy }
            onClose={ this.props.onClose }
            cashier={ cashier }
        />
    ))
}

export default IndexTable
