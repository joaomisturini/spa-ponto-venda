import React from 'react'
import Input from '../UI/Input'
import SubmitButton from '../UI/SubmitButton'

class LoginForm extends React.Component {
    state = {
        password: '',
        email: '',
    }

    handleEmail = event => {
        this.setState({ email: event.target.value })
    }

    handlePassword = event => {
        this.setState({ password: event.target.value })
    }

    handleSubmit = event => {
        this.props.onSubmit(this.state)
        event.preventDefault()
    }

    render = () => (
        <form onSubmit={ this.handleSubmit }>
            <Input type="email" value={ this.state.email } onChange={ this.handleEmail } maxLength="255" required placeholder="E-mail" autoFocus />
            <Input type="password" value={ this.state.password } onChange={ this.handlePassword } maxLength="255" required placeholder="Senha" />
            <SubmitButton pending={ this.props.pending }>Fazer login</SubmitButton>
        </form>
    )
}

export default LoginForm
