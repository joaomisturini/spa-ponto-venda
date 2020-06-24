import React from 'react'
import { Link } from 'react-router-dom'
import ProviderService from '../../services/ProviderService'
import IndexTable from '../../components/Provider/IndexTable'

class ScreensProviderIndex extends React.Component {
    handleLoad = async () => {
        return await ProviderService.list()
    }

    handleDestroy = async id => {
        return await ProviderService.destroy(id)
    }

    render = () => (
        <>
            <div className="row">
                <div className="col-sm">
                    <h3>Fornecedores</h3>
                </div>
                <div className="col-sm text-right">
                    <Link to="/fornecedores/criar" className="btn btn-outline-primary">Novo fornecedor</Link>
                </div>
            </div>
            <div className="table-responsive mt-3">
                <IndexTable onLoad={ this.handleLoad } onDestroy={ this.handleDestroy } />
            </div>
        </>
    )
}

export default ScreensProviderIndex
