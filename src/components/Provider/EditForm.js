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
        const { name, cnpj, phone, email } = await this.props.onLoad()

        this.setState({
            phone: phone || '',
            email: email || '',
            name: name || '',
            cnpj: cnpj || '',
        })
    }

    handleName = event => {
        this.setState({ name: event.target.value })
    }

    handleCnpj = event => {
        this.setState({ cnpj: event.target.value })
    }

    handlePhone = event => {
        this.setState({ phone: event.target.value })
    }

    handleEmail = event => {
        this.setState({ email: event.target.value })
    }

    handleSubmit = event => {
        this.props.onSubmit(this.state)
        event.preventDefault()
    }

    render = () => (
        <form onSubmit={ this.handleSubmit }>
            <div className="form-row">
                <div className="col-sm">
                    <Input type="text" value={ this.state.name } onChange={ this.handleName } maxLength="255" required label="Razão social" autoFocus />
                </div>
                <div className="col-sm">
                    <Input type="text" value={ this.state.cnpj } onChange={ this.handleCnpj } maxLength="18" required label="CNPJ" />
                </div>
            </div>
            <div className="form-row">
                <div className="col-sm">
                    <Input type="text" value={ this.state.phone } onChange={ this.handlePhone } maxLength="15" required label="Telefone" />
                </div>
                <div className="col-sm">
                    <Input type="email" value={ this.state.email } onChange={ this.handleEmail } maxLength="255" required label="E-mail" />
                </div>
            </div>
            <SubmitButton pending={ this.props.pending }>Fazer cadastro</SubmitButton>
        </form>
    )
}

export default EditForm
