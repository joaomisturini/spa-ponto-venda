import React from 'react'
import { Link } from 'react-router-dom'
import InvoiceService from '../../services/InvoiceService'
import ItemsTable from '../../components/Invoice/ItemsTable'

class ScreensInvoiceItems extends React.Component {
    state = {
        invoice: {},
        items: [],
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params

        const { items, ...invoice } = await InvoiceService.show(id)
        this.setState({ invoice, items })
    }

    handleDestroy = async itemId => {
        const { id } = await InvoiceService.destroyItem(
            this.props.match.params.id,
            itemId
        )

        if (id !== undefined) {
            this.setState(({ items }) => ({
                items: items.filter(item => item.id !== itemId),
            }))
        }

        return true
    }

    render = () => {
        const { id } = this.props.match.params
        const { number, series } = this.state.invoice

        return  (
            <>
                <div className="row mb-2">
                    <div className="col-sm"><h3>Itens da compra - { number } / { series }</h3></div>
                    <div className="col-sm text-right">
                        <Link to={ `/compras` } className="btn btn-outline-secondary mr-2">Voltar</Link>
                        <Link to={ `/compras/itens/${ id }/criar` } className="btn btn-outline-primary">Novo item</Link>
                    </div>
                </div>
                <ItemsTable onDestroy={ this.handleDestroy } items={ this.state.items } />
            </>
        )
    }
}

export default ScreensInvoiceItems
