import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import UserService from '../../services/UserService'
import RegisterForm from '../../components/User/RegisterForm'

class ScreensUserRegister extends React.Component {
    state = {
        registered: false,
        pending: false,
        user: {},
    }

    handleChange = (field, value) => {
        this.setState(({ user }) => ({
            user: Object.assign({}, user, { [field]: value }),
        }))
    }

    handleRegister = async () => {
        this.setState({ pending: true })

        const registered = await UserService.create(this.state.user)
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
                        <RegisterForm pending={ this.state.pending }
                            onSubmit={ this.handleRegister }
                            onChange={ this.handleChange }
                            { ...this.state.user }
                        />
                    </div>
                    <div className="card-footer text-right">
                        <Link to="/login" className="card-link">Fazer login</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScreensUserRegister
