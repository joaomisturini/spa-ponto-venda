import React from 'react'
import Input from '../UI/Input'
import SubmitButton from '../UI/SubmitButton'

class OpenForm extends React.Component {
    state = { balance: '' }

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
                    <Input type="number"
                        onChange={ event => this.handleChange('balance', event) }
                        value={ this.state.balance }
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
