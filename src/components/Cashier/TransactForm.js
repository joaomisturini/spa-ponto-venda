import React from 'react'
import Input from '../UI/Input'
import SubmitButton from '../UI/SubmitButton'

class TransactForm extends React.Component {
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
                        onChange={ event => this.handleChange('price', event) }
                        value={ this.props.price || '' }
                        label="Valor"
                        step=".01"
                        autoFocus
                        required
                        min="0"
                    />
                </div>
            </div>
            <SubmitButton pending={ this.props.pending }>Fazer transação</SubmitButton>
        </form>
    )
}

export default TransactForm
