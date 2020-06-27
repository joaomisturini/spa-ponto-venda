import React from 'react'
import Input from '../UI/Input'
import InputMask from '../UI/InputMask'
import SubmitButton from '../UI/SubmitButton'

class EditForm extends React.Component {
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
                        label="Razão social"
                        maxLength="60"
                        autoFocus
                        required
                    />
                </div>
                <div className="col-sm">
                    <InputMask type="text"
                        onChange={ event => this.handleChange('cnpj', event) }
                        value={ this.props.cnpj || '' }
                        mask="99.999.999/9999-99"
                        label="CNPJ"
                        required
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="col-sm">
                    <InputMask type="text"
                        onChange={ event => this.handleChange('phone', event) }
                        value={ this.props.phone || '' }
                        mask="(99) 9999-9999"
                        label="Telefone"
                        required
                    />
                </div>
                <div className="col-sm">
                    <Input type="email"
                        onChange={ event => this.handleChange('email', event) }
                        value={ this.props.email || '' }
                        maxLength="60"
                        label="E-mail"
                        required
                    />
                </div>
            </div>
            <SubmitButton pending={ this.props.pending }>Salvar fornecedor</SubmitButton>
        </form>
    )
}

export default EditForm
