import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import AuthService from '../../services/AuthService'
import LoginForm from '../../components/Auth/LoginForm'

class ScreensAuthLogin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pending: false,
            logged: false,
        }
    }

    handleLogin = async body => {
        this.setState({ pending: true })

        const logged = await AuthService.login(body)
        this.setState({ logged, pending: false })
    }

    render = () => {
        if (this.state.logged) {
            return <Redirect to="/" />
        }

        return (
            <div className="col-md-8 col-lg-6 col-xl-4">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title text-center">Ponto de venda</h2>
                        <p className="card-text text-muted text-center">Faça login para continuar</p>
                        <LoginForm pending={ this.state.pending } onSubmit={ this.handleLogin } />
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
