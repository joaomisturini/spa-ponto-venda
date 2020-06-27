import React from 'react'
import IndexLine from './IndexLine'

class IndexTable extends React.Component {
    render = () => (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Razão social</th>
                    <th>CNPJ</th>
                    <th>Telefone</th>
                    <th>E-mail</th>
                    <th className="text-right">Ações</th>
                </tr>
            </thead>
            <tbody>{ this._renderLines() }</tbody>
        </table>
    )

    _renderLines = () => this.props.providers.map(provider => (
        <IndexLine key={ provider.id } provider={ provider } onDestroy={ this.props.onDestroy } />
    ))
}

export default IndexTable
