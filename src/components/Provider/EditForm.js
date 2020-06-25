import React from 'react'
import Input from '../UI/Input'
import SubmitButton from '../UI/SubmitButton'

class EditForm extends React.Component {
    state = {
        phone: '',
        email: '',
        name: '',
        cnpj: '',
    }

    componentDidMount = async () => {
        const provider = await this.props.onLoad()

        this.setState({
            phone: provider.phone || '',
            email: provider.email || '',
            name: provider.name || '',
            cnpj: provider.cnpj || '',
        })
    }

    handleChange = (field, event) => {
        this.setState({ [field]: event.target.value })
    }

    handleSubmit = event => {
        this.props.onSubmit(this.state)
        event.preventDefault()
    }

    render = () => (
        <form onSubmit={ this.handleSubmit }>
            <div className="form-row">
                <div className="col-sm">
                    <Input type="text"
                        onChange={ event => this.handleChange('name', event) }
                        value={ this.state.name }
                        label="Razão social"
                        maxLength="255"
                        autoFocus
                        required
                    />
                </div>
                <div className="col-sm">
                    <Input type="text"
                        onChange={ event => this.handleChange('cnpj', event) }
                        value={ this.state.cnpj }
                        maxLength="18"
                        label="CNPJ"
                        required
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="col-sm">
                    <Input type="text"
                        onChange={ event => this.handleChange('phone', event) }
                        value={ this.state.phone }
                        label="Telefone"
                        maxLength="15"
                        required
                    />
                </div>
                <div className="col-sm">
                    <Input type="email"
                        onChange={ event => this.handleChange('email', event) }
                        value={ this.state.email }
                        maxLength="255"
                        label="E-mail"
                        required
                    />
                </div>
            </div>
            <SubmitButton pending={ this.props.pending }>Salvar fornecedor</SubmitButton>
        </form>
    )
}

export default EditForm
