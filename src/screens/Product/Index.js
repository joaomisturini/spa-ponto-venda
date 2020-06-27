import React from 'react'
import { Link } from 'react-router-dom'
import ProductService from '../../services/ProductService'
import IndexTable from '../../components/Product/IndexTable'

class ScreensProductIndex extends React.Component {
    state = { products: [] }

    componentDidMount = async () => {
        const products = await ProductService.list()
        this.setState({ products })
    }

    handleDestroy = async id => {
        const destroyed = await ProductService.destroy(id)

        if (destroyed) {
            this.setState(({ products }) => ({
                products: products.filter(product => product.id !== id),
            }))
        }

        return destroyed
    }

    render = () => (
        <>
            <div className="row">
                <div className="col-sm">
                    <h3>Produtos</h3>
                </div>
                <div className="col-sm text-right">
                    <Link to="/produtos/criar" className="btn btn-outline-primary">Novo produto</Link>
                </div>
            </div>
            <div className="table-responsive mt-3">
                <IndexTable onDestroy={ this.handleDestroy } { ...this.state } />
            </div>
        </>
    )
}

export default ScreensProductIndex
