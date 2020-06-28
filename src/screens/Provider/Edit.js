import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import EditForm from '../../components/Provider/EditForm'
import ProviderService from '../../services/ProviderService'

class ScreensProviderEdit extends React.Component {
    state = {
        pending: false,
        provider: {},
        saved: false,
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params

        const provider = id !== undefined ? await ProviderService.show(id) : {}
        this.setState({ provider })
    }

    handleChange = (field, value) => {
        this.setState(({ provider }) => ({
            provider: Object.assign({}, provider, { [field]: value }),
        }))
    }

    handleSave = async () => {
        this.setState({ pending: true })

        const { id } = this.props.match.params

        const saved = id === undefined
            ? await ProviderService.create(this.state.provider)
            : await ProviderService.update(id, this.state.provider)

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
                    <div className="col-sm"><h3>Fornecedores - { action }</h3></div>
                    <div className="col-sm text-right">
                        <Link to="/fornecedores" className="btn btn-outline-secondary">Voltar</Link>
                    </div>
                </div>
                <EditForm pending={ this.state.pending }
                    onChange={ this.handleChange }
                    onSubmit={ this.handleSave }
                    { ...this.state.provider }
                />
            </>
        )
    }
}

export default ScreensProviderEdit
