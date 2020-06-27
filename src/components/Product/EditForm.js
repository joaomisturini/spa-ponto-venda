import React from 'react'
import Input from '../UI/Input'
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
                        maxLength="60"
                        label="Nome"
                        autoFocus
                        required
                    />
                </div>
                <div className="col-sm">
                    <Input type="text"
                        onChange={ event => this.handleChange('ean', event) }
                        value={ this.props.ean || '' }
                        maxLength="13"
                        label="EAN"
                        required
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="col-sm">
                    <Input type="number"
                        onChange={ event => this.handleChange('price', event) }
                        value={ this.props.price || '' }
                        label="Preço"
                        step=".01"
                        required
                        min="0"
                    />
                </div>
                <div className="col-sm">
                    <Input type="number"
                        onChange={ event => this.handleChange('ipi', event) }
                        value={ this.props.ipi || '' }
                        label="IPI"
                        step=".01"
                        required
                        min="0"
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="col-sm">
                    <Input type="number"
                        onChange={ event => this.handleChange('icms', event) }
                        value={ this.props.icms || '' }
                        label="ICMS"
                        step=".01"
                        required
                        min="0"
                    />
                </div>
                <div className="col-sm">
                    <Input type="number"
                        onChange={ event => this.handleChange('balance', event) }
                        value={ this.props.balance || '' }
                        label="Saldo"
                        step=".01"
                        required
                        min="0"
                    />
                </div>
            </div>
            <SubmitButton pending={ this.props.pending }>Salvar produto</SubmitButton>
        </form>
    )
}

export default EditForm
