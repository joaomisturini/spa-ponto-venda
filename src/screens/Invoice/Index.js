import React from 'react'
import { Link } from 'react-router-dom'
import InvoiceService from '../../services/InvoiceService'
import IndexTable from '../../components/Invoice/IndexTable'

class ScreensInvoiceIndex extends React.Component {
    state = { invoices: [] }

    componentDidMount = async () => {
        const invoices = await InvoiceService.list()
        this.setState({ invoices })
    }

    handleDestroy = async id => {
        const destroyed = await InvoiceService.destroy(id)

        if (destroyed) {
            this.setState(({ invoices }) => ({
                invoices: invoices.filter(invoice => invoice.id !== id),
            }))
        }

        return destroyed
    }

    render = () => (
        <>
            <div className="row mb-2">
                <div className="col-sm"><h3>Compras</h3></div>
                <div className="col-sm text-right">
                    <Link to="/compras/criar" className="btn btn-outline-primary">Nova compra</Link>
                </div>
            </div>
            <IndexTable onDestroy={ this.handleDestroy } { ...this.state } />
        </>
    )
}

export default ScreensInvoiceIndex
