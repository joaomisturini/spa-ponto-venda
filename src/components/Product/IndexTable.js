import React from 'react'
import IndexLine from './IndexLine'

class IndexTable extends React.Component {
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
        )
    }

    _renderLines = () => this.props.products.map(product => (
        <IndexLine key={ product.id }
            onDestroy={ this.props.onDestroy }
            profile={ this.props.profile }
            product={ product }
        />
    ))
}

export default IndexTable
