import React from 'react'
import Input from '../UI/Input'
import Select from '../UI/Select'
import SubmitButton from '../UI/SubmitButton'

class ProfileForm extends React.Component {
    state = {
        profile: 0,
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

    componentDidMount = async () => {
        const user = await this.props.onLoad()

        this.setState({
            profile: user.profile || 0,
            name: user.name || '',
        })
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
            <div className="form-row">
                <div className="col-sm">
                    <Input type="text"
                        onChange={ event => this.handleChange('name', event) }
                        value={ this.state.name }
                        maxLength="60"
                        label="Nome"
                        autoFocus
                        required
                    />
                </div>
                <div className="col-sm">
                    <Select options={ this.options }
                        onChange={ event => this.handleChange('profile', event) }
                        value={ this.state.profile }
                        label="Pefil"
                        required
                    />
                </div>
            </div>
            <SubmitButton pending={ this.props.pending }>Salvar perfil</SubmitButton>
        </form>
    )
}

export default ProfileForm
