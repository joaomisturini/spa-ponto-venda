import React from 'react'
import Input from '../UI/Input'
import Select from '../UI/Select'
import SubmitButton from '../UI/SubmitButton'

class RegisterForm extends React.Component {
    state = {
        password_confirmation: '',
        password: '',
        profile: 0,
        email: '',
        name: '',
    }

    options = [ {
        text: 'Gerente',
        value: 0,
    }, {
        text: 'Usuário de back-office',
        value: 1,
    }, {
        text: 'Operador de caixa',
        value: 2,
    } ]

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
                maxLength="60"
                label="Nome"
                autoFocus
                required
            />
            <Input type="email"
                onChange={ event => this.handleChange('email', event) }
                value={ this.state.email }
                maxLength="120"
                label="E-mail"
                required
            />
            <Input type="password"
                onChange={ event => this.handleChange('password', event) }
                value={ this.state.password }
                maxLength="120"
                minLength="6"
                label="Senha"
                required
            />
            <Input type="password"
                onChange={ event => this.handleChange('password_confirmation', event) }
                value={ this.state.password_confirmation }
                label="Confirme a senha"
                maxLength="120"
                minLength="6"
                required
            />
            <Select options={ this.options }
                onChange={ event => this.handleChange('profile', event) }
                value={ this.state.profile }
                label="Pefil"
                required
            />
            <SubmitButton pending={ this.props.pending }>Fazer cadastro</SubmitButton>
        </form>
    )
}

export default RegisterForm
