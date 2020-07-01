import React from 'react'
import Input from '../UI/Input'
import Select from '../UI/Select'
import SubmitButton from '../UI/SubmitButton'

class CreateItemForm extends React.Component {
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
                    <Select onChange={ event => this.handleChange('productId', event) }
                        options={ this.props.products.map(({ id, name }) => ({
                            text: name, value: id,
                        })) }
                        value={ this.props.productId || 0 }
                        label="Produto"
                        required
                    />
                </div>
                <div className="col-sm">
                    <Input type="number"
                        onChange={ event => this.handleChange('quantity', event) }
                        value={ this.props.quantity || '' }
                        label="Quantidade"
                        step=".01"
                        required
                        min="0"
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="col-sm">
                    <Input type="number"
                        onChange={ event => this.handleChange('price', event) }
                        value={ this.props.price || '' }
                        label="Preço"
                        stop=".01"
                        required
                        min="0"
                    />
                </div>
                <div className="col-sm">
                    <Input type="number"
                        onChange={ event => this.handleChange('taxPrice', event) }
                        value={ this.props.taxPrice || '' }
                        label="Valor dos impostos"
                        stop=".01"
                        required
                        min="0"
                    />
                </div>
            </div>
            <SubmitButton pending={ this.props.pending }>Salvar item</SubmitButton>
        </form>
    )
}

export default CreateItemForm
