import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import EditForm from '../../components/Provider/EditForm'
import ProviderService from '../../services/ProviderService'

class ScreensProviderEdit extends React.Component {
    state = {
        pending: false,
        saved: false,
    }

    handleLoad = async () => {
        const { id } = this.props.match.params

        return id !== undefined ? await ProviderService.show(id) : {}
    }

    handleSave = async body => {
        this.setState({ pending: true })

        const { id } = this.props.match.params

        const saved = id === undefined
            ? await ProviderService.create(body)
            : await ProviderService.update(id, body)

        this.setState({ saved, pending: false })
    }

    render = () => {
        if (this.state.saved) {
            return <Redirect to="/fornecedores" />
        }

        const { id } = this.props.match.params
        const action = id === undefined ? 'criar' : 'editar'

        return (
            <>
                <div className="row">
                    <div className="col-sm">
                        <h3>Fornecedores - { action }</h3>
                    </div>
                    <div className="col-sm text-right">
                        <Link to="/fornecedores" className="btn btn-outline-secondary">Voltar</Link>
                    </div>
                </div>
                <EditForm pending={ this.state.pending } onSubmit={ this.handleSave } onLoad={ this.handleLoad } />
            </>
        )
    }
}

export default ScreensProviderEdit
