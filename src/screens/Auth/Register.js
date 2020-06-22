import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthService from '../../services/AuthService'
import RegisterForm from '../../components/Auth/RegisterForm'

class ScreensAuthRegister extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            registered: false,
            pending: false,
        }
    }

    handleRegister = async body => {
        this.setState({ pending: true })

        const registered = await AuthService.register(body)
        this.setState({ registered, pending: false })
    }

    render = () => {
        if (this.state.registered) {
            return <Redirect to="/login" />
        }

        return (
            <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title text-center">Ponto de venda</h2>
                        <p className="card-text text-muted text-center">Faça seu cadastro</p>
                        <RegisterForm pending={ this.state.pending } onSubmit={ this.handleRegister } />
                    </div>
                    <div className="card-footer text-right">
                        <Link to="/login" className="card-link">Fazer login</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScreensAuthRegister
