import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import InvoiceService from '../../services/InvoiceService'
import ProductService from '../../services/ProductService'
import CreateItemForm from '../../components/Invoice/CreateItemForm'

class ScreensInvoiceCreateItem extends React.Component {
    state = {
        pending: false,
        products: [],
        invoice: {},
        item: {},
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params
        const invoice = await InvoiceService.show(id)

        const products = await ProductService.list()
        const price = products.length ? products[0].price : 0
        const productId = products.length ? products[0].id : 0

        this.setState(({ item }) => ({
            item: Object.assign({}, item, { price, productId }),
            invoice, products,
        }))
    }

    handleChange = (field, value) => {
        this.setState(({ item }) => ({
            item: Object.assign({}, item, { [field]: value }),
        }))

        if (field === 'productId') {
            this.setState(({ item, products }) => {
                const { price } = products.find(({ id }) => id === parseInt(value))
                return { item: Object.assign({}, item, { price }) }
            })
        }
    }

    handleSave = async () => {
        this.setState({ pending: true })

        const { id } = await InvoiceService.createItem(
            this.props.match.params.id,
            this.state.item
        )

        this.setState(({ item }) => ({
            item: Object.assign({}, item, { id }),
            pending: false,
        }))
    }

    render = () => {
        const { id } = this.props.match.params
        const { number, series } = this.state.invoice

        if (this.state.item.id) {
            return <Redirect to={ `/compras/itens/${ id }` } />
        }

        return (
            <>
                <div className="row">
                    <div className="col-sm"><h3>Itens da compra - { number } / { series } - criar</h3></div>
                    <div className="col-sm text-right">
                        <Link to={ `/compras/itens/${ id }` } className="btn btn-outline-secondary">Voltar</Link>
                    </div>
                </div>
                <CreateItemForm pending={ this.state.pending }
                    products={ this.state.products }
                    onChange={ this.handleChange }
                    onSubmit={ this.handleSave }
                    { ...this.state.item }
                />
            </>
        )
    }
}

export default ScreensInvoiceCreateItem
