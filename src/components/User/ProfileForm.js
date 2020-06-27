import React from 'react'
import Input from '../UI/Input'
import Select from '../UI/Select'
import SubmitButton from '../UI/SubmitButton'

class ProfileForm extends React.Component {
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
            <div className="form-row">
                <div className="col-sm">
                    <Input type="text"
                        onChange={ event => this.handleChange('name', event) }
                        value={ this.props.name || '' }
                        maxLength="60"
                        label="Nome"
                        autoFocus
                        required
                    />
                </div>
                <div className="col-sm">
                    <Select options={ this.options }
                        onChange={ event => this.handleChange('profile', event) }
                        value={ this.props.profile || 0 }
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
