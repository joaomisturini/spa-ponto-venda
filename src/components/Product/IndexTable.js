import React from 'react'
import IndexLine from './IndexLine'
import IndexFilter from './IndexFilter'

class IndexTable extends React.Component {
    state = { filter: {} }

    handleChange = (field, value) => {
        this.setState(({ filter }) => ({
            filter: Object.assign({}, filter, { [field]: value }),
        }))
    }

    render = () => {
        const taxColumns = this.props.profile < 2 && (
            <>
                <th>EAN</th>
                <th>IPI</th>
                <th>ICMS</th>
                <th className="text-right">Ações</th>
            </>
        )

        return (
            <>
                <IndexFilter onChange={ this.handleChange } { ...this.state.filter } />
                <hr />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Saldo</th>
                            { taxColumns }
                        </tr>
                    </thead>
                    <tbody>{ this._renderLines() }</tbody>
                </table>
            </>
        )
    }

    _renderLines = () => this.props.products.filter(this._applyFilter).map(product => (
        <IndexLine key={ product.id }
            onDestroy={ this.props.onDestroy }
            profile={ this.props.profile }
            product={ product }
        />
    ))

    _applyFilter = product => {
        const { name, balanceOption, balance, priceOption, price } = this.state.filter

        const matchName = name ? product.name.includes(name) : true
        const matchPrice = price
            ? this._filterValue(product.price, price, priceOption) : true
        const matchBalance = balance
            ? this._filterValue(product.balance, balance, balanceOption) : true

        return matchName && matchPrice && matchBalance
    }

    _filterValue = (modelValue, filterValue, option) => parseInt(option) === 1
        ? modelValue >= filterValue : modelValue <= filterValue
}

export default IndexTable
