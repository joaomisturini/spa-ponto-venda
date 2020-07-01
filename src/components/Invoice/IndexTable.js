import React from 'react'
import IndexLine from './IndexLine'

class IndexTable extends React.Component {
    render = () => (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Número / série</th>
                    <th>Data de emissão</th>
                    <th>Fornecedor</th>
                    <th>Valor total</th>
                    <th>Status</th>
                    <th className="text-right">Ações</th>
                </tr>
            </thead>
            <tbody>{ this._renderLines() }</tbody>
        </table>
    )

    _renderLines = () => this.props.invoices.map(invoice => (
        <IndexLine key={ invoice.id }
            onDestroy={ this.props.onDestroy }
            onClose={ this.props.onClose }
            invoice={ invoice }
        />
    ))
}

export default IndexTable
