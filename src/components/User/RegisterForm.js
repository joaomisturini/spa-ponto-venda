import React from 'react'
import Input from '../UI/Input'
import Select from '../UI/Select'
import SubmitButton from '../UI/SubmitButton'

class RegisterForm extends React.Component {
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

    handleChange = (field, { target }) => {
        this.props.onChange(field, target.value)
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.onSubmit()
    }

    render = () => (
        <form onSubmit={ this.handleSubmit }>
            <Input type="text"
                onChange={ event => this.handleChange('name', event) }
                value={ this.props.name || '' }
                maxLength="60"
                label="Nome"
                autoFocus
                required
            />
            <Input type="email"
                onChange={ event => this.handleChange('email', event) }
                value={ this.props.email || '' }
                maxLength="120"
                label="E-mail"
                required
            />
            <Input type="password"
                onChange={ event => this.handleChange('password', event) }
                value={ this.props.password || '' }
                maxLength="120"
                minLength="6"
                label="Senha"
                required
            />
            <Input type="password"
                onChange={ event => this.handleChange('password_confirmation', event) }
                value={ this.props.password_confirmation || '' }
                label="Confirme a senha"
                maxLength="120"
                minLength="6"
                required
            />
            <Select options={ this.options }
                onChange={ event => this.handleChange('profile', event) }
                value={ this.props.profile || 0 }
                label="Pefil"
                required
            />
            <SubmitButton pending={ this.props.pending }>Fazer cadastro</SubmitButton>
        </form>
    )
}

export default RegisterForm
