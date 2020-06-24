import React from 'react'
import Input from '../UI/Input'
import SubmitButton from '../UI/SubmitButton'

class RegisterForm extends React.Component {
    state = {
        password: '',
        email: '',
        name: '',
    }

    handleName = event => {
        this.setState({ name: event.target.value })
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
            <Input type="text" value={ this.state.name } onChange={ this.handleName } maxLength="255" required label="Nome" autoFocus />
            <Input type="email" value={ this.state.email } onChange={ this.handleEmail } maxLength="255" required label="E-mail" />
            <Input type="password" value={ this.state.password } onChange={ this.handlePassword } maxLength="255" required label="Senha" />
            <SubmitButton pending={ this.props.pending }>Fazer cadastro</SubmitButton>
        </form>
    )
}

export default RegisterForm
