import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import InvoiceService from '../../services/InvoiceService'
import CreateForm from '../../components/Invoice/CreateForm'
import ProviderService from '../../services/ProviderService'

class ScreensInvoiceCreate extends React.Component {
    state = {
        pending: false,
        providers: [],
        invoice: {},
    }

    componentDidMount = async () => {
        const providers = await ProviderService.list()
        const providerId = providers.length ? providers[0].id : 0

        this.setState(({ invoice }) => ({
            invoice: Object.assign({}, invoice, { providerId }),
            providers,
        }))
    }

    handleChange = (field, value) => {
        this.setState(({ invoice }) => ({
            invoice: Object.assign({}, invoice, { [field]: value }),
        }))
    }

    handleSave = async () => {
        this.setState({ pending: true })

        const { id } = await InvoiceService.create(this.state.invoice)
        this.setState(({ invoice }) => ({
            invoice: Object.assign({}, invoice, { id }),
            pending: false,
        }))
    }

    render = () => {
        if (this.state.invoice.id) {
            return <Redirect to={ `/compras/itens/${ this.state.invoice.id }/criar` } />
        }

        return (
            <>
                <div className="row">
                    <div className="col-sm"><h3>Compras - criar</h3></div>
                    <div className="col-sm text-right">
                        <Link to="/compras" className="btn btn-outline-secondary">Voltar</Link>
                    </div>
                </div>
                <CreateForm pending={ this.state.pending }
                    providers={ this.state.providers }
                    onChange={ this.handleChange }
                    onSubmit={ this.handleSave }
                    { ...this.state.invoice }
                />
            </>
        )
    }
}

export default ScreensInvoiceCreate
