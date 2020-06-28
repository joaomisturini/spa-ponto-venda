import React from 'react'
import { Link } from 'react-router-dom'
import ProviderService from '../../services/ProviderService'
import IndexTable from '../../components/Provider/IndexTable'

class ScreensProviderIndex extends React.Component {
    state = { providers: [] }

    componentDidMount = async () => {
        const providers = await ProviderService.list()
        this.setState({ providers })
    }

    handleDestroy = async id => {
        const destroyed = await ProviderService.destroy(id)

        if (destroyed) {
            this.setState(({ providers }) => ({
                providers: providers.filter(provider => provider.id !== id),
            }))
        }

        return destroyed
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
            <IndexTable onDestroy={ this.handleDestroy } { ...this.state } />
        </>
    )
}

export default ScreensProviderIndex
