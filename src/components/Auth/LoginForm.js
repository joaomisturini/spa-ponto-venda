import React from 'react'
import Input from '../UI/Input'
import SubmitButton from '../UI/SubmitButton'

class LoginForm extends React.Component {
    handleChange = (field, { target }) => {
        this.props.onChange(field, target.value)
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.onSubmit()
    }

    render = () => (
        <form onSubmit={ this.handleSubmit }>
            <Input type="email"
                onChange={ event => this.handleChange('email', event) }
                value={ this.props.email || '' }
                placeholder="E-mail"
                maxLength="120"
                autoFocus
                required
            />
            <Input type="password"
                onChange={ event => this.handleChange('password', event) }
                value={ this.props.password || '' }
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
