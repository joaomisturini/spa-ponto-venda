import React from 'react'
import { Link } from 'react-router-dom'
import UserService from '../../services/UserService'
import ProductService from '../../services/ProductService'
import IndexTable from '../../components/Product/IndexTable'

class ScreensProductIndex extends React.Component {
    state = {
        products: [],
        profile: 0,
        filter: {},
    }

    componentDidMount = async () => {
        const { profile } = await UserService.show()
        this.setState({ profile })

        const products = await ProductService.list()
        this.setState({ products })
    }

    handleChange = (field, value) => {
        this.setState(({ filter }) => ({
            filter: Object.assign({}, filter, { [field]: value }),
        }))
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
            <div className="row mb-2">
                <div className="col-sm"><h3>Produtos</h3></div>
                { this.state.profile < 2 && (
                    <div className="col-sm text-right">
                        <Link to="/produtos/criar" className="btn btn-outline-primary">Novo produto</Link>
                    </div>
                ) }
            </div>

            <IndexTable onDestroy={ this.handleDestroy } { ...this.state } />
        </>
    )
}

export default ScreensProductIndex
