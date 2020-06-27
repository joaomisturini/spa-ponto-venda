import React from 'react'
import Input from '../UI/Input'
import SubmitButton from '../UI/SubmitButton'

class OpenForm extends React.Component {
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
                    <Input type="number"
                        onChange={ event => this.handleChange('balance', event) }
                        value={ this.props.balance || '' }
                        label="Saldo"
                        step=".01"
                        autoFocus
                        required
                        min="0"
                    />
                </div>
            </div>
            <SubmitButton pending={ this.props.pending }>Abrir caixa</SubmitButton>
        </form>
    )
}

export default OpenForm
