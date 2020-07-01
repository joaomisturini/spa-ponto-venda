import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import InvoiceService from '../../services/InvoiceService'
import PricesForm from '../../components/Invoice/PricesForm'

class ScreensInvoicePrices extends React.Component {
    state = {
        pending: false,
        saved: false,
        invoice: {},
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params

        const invoice = await InvoiceService.show(id)
        this.setState({ invoice })
    }

    handleChange = (field, value) => {
        this.setState(({ invoice }) => ({
            invoice: Object.assign({}, invoice, { [field]: value }),
        }))
    }

    handleSave = async () => {
        this.setState({ pending: true })

        const { id } = this.props.match.params
        const { freightPrice, insurancePrice } = this.state.invoice

        const saved = await InvoiceService.prices(id, {
            freightPrice, insurancePrice,
        })

        this.setState({ saved, pending: false })
    }

    render = () => {
        const { number, series } = this.state.invoice

        if (this.state.saved) {
            return <Redirect to="/compras" />
        }

        return (
            <>
                <div className="row">
                    <div className="col-sm"><h3>Editar valores da compra - { number } / { series }</h3></div>
                    <div className="col-sm text-right">
                        <Link to="/compras" className="btn btn-outline-secondary">Voltar</Link>
                    </div>
                </div>
                <PricesForm pending={ this.state.pending }
                    onChange={ this.handleChange }
                    onSubmit={ this.handleSave }
                    { ...this.state.invoice }
                />
            </>
        )
    }
}

export default ScreensInvoicePrices
