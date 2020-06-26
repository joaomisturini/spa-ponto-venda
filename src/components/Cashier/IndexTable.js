import React from 'react'
import IndexLine from './IndexLine'

class IndexTable extends React.Component {
    state = { cashiers: [] }

    componentDidMount = async () => {
        const cashiers = await this.props.onLoad()
        this.setState({ cashiers })
    }

    handleDestroy = async id => {
        const destroyed = await this.props.onDestroy(id)

        if (destroyed) {
            this.setState(({ cashiers }) => ({
                cashiers: cashiers.filter(cashier => cashier.id !== id),
            }))
        }

        return destroyed
    }

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

    _renderLines = () => this.state.cashiers.map(cashier => (
        <IndexLine key={ cashier.id } cashier={ cashier } onDestroy={ this.handleDestroy } />
    ))
}

export default IndexTable
