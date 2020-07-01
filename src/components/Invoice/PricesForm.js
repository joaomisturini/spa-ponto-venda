import React from 'react'
import Input from '../UI/Input'
import SubmitButton from '../UI/SubmitButton'

class PricesForm extends React.Component {
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
                        onChange={ event => this.handleChange('freightPrice', event) }
                        value={ this.props.freightPrice || '' }
                        label="Valor do frete"
                        step=".01"
                        required
                        min="0"
                    />
                </div>
                <div className="col-sm">
                    <Input type="number"
                        onChange={ event => this.handleChange('insurancePrice', event) }
                        value={ this.props.insurancePrice || '' }
                        label="Valor do seguro"
                        step=".01"
                        required
                        min="0"
                    />
                </div>
            </div>
            <SubmitButton pending={ this.props.pending }>Salvar preços da compra</SubmitButton>
        </form>
    )
}

export default PricesForm
