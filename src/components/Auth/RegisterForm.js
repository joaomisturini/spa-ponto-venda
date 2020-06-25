import React from 'react'
import Input from '../UI/Input'
import SubmitButton from '../UI/SubmitButton'

class RegisterForm extends React.Component {
    state = {
        password: '',
        email: '',
        name: '',
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
            <Input type="text"
                onChange={ event => this.handleChange('name', event) }
                value={ this.state.name }
                maxLength="255"
                label="Nome"
                autoFocus
                required
            />
            <Input type="email"
                onChange={ event => this.handleChange('email', event) }
                value={ this.state.email }
                maxLength="255"
                label="E-mail"
                required
            />
            <Input type="password"
                onChange={ event => this.handleChange('password', event) }
                value={ this.state.password }
                maxLength="255"
                label="Senha"
                required
            />
            <SubmitButton pending={ this.props.pending }>Fazer cadastro</SubmitButton>
        </form>
    )
}

export default RegisterForm
