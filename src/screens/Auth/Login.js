import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import AuthService from '../../services/AuthService'
import LoginForm from '../../components/Auth/LoginForm'

class ScreensAuthLogin extends React.Component {
    constructor(props) {
        super(props)

        this.state = { logged: false }
    }

    handleLogin = async data => {
        const logged = await AuthService.login(data)
        this.setState({ logged })
    }

    render = () => {
        if (this.state.logged) {
            return <Redirect to="/" />
        }

        return (
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title text-center">Ponto de venda</h2>
                        <p className="card-text text-muted text-center">Faça login para continuar</p>
                        <LoginForm onSubmit={ this.handleLogin } />
                    </div>
                    <div className="card-footer text-right">
                        <Link to="/cadastrar" className="card-link">Cadastrar-se</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScreensAuthLogin
