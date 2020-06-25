import React from 'react'
import Input from '../UI/Input'
import SubmitButton from '../UI/SubmitButton'

class LoginForm extends React.Component {
    state = {
        password: '',
        email: '',
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
            <Input type="email"
                onChange={ event => this.handleChange('email', event) }
                value={ this.state.email }
                placeholder="E-mail"
                maxLength="120"
                autoFocus
                required
            />
            <Input type="password"
                onChange={ event => this.handleChange('password', event) }
                value={ this.state.password }
                placeholder="Senha"
                maxLength="120"
                minLength="6"
                required
            />
            <SubmitButton pending={ this.props.pending }>Fazer login</SubmitButton>
        </form>
    )
}

export default LoginForm
