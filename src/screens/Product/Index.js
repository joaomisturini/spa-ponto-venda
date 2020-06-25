import React from 'react'
import { Link } from 'react-router-dom'
import ProductService from '../../services/ProductService'
import IndexTable from '../../components/Product/IndexTable'

class ScreensProductIndex extends React.Component {
    handleLoad = async () => {
        return await ProductService.list()
    }

    handleDestroy = async id => {
        return await ProductService.destroy(id)
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
                <IndexTable onLoad={ this.handleLoad } onDestroy={ this.handleDestroy } />
            </div>
        </>
    )
}

export default ScreensProductIndex
