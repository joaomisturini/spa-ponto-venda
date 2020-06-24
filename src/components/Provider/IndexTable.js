import React from 'react'
import IndexLine from './IndexLine'

class IndexTable extends React.Component {
    state = { providers: [] }

    componentDidMount = async () => {
        const providers = await this.props.onLoad()
        this.setState({ providers })
    }

    handleDestroy = async id => {
        const destroyed = await this.props.onDestroy(id)

        if (destroyed) {
            this.setState(({ providers }) => ({
                providers: providers.filter(provider => provider.id !== id),
            }))
        }

        return destroyed
    }

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

    _renderLines = () => this.state.providers.map(provider => (
        <IndexLine key={ provider.id } provider={ provider } onDestroy={ this.handleDestroy } />
    ))
}

export default IndexTable
