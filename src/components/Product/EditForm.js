import React from 'react'
import Input from '../UI/Input'
import Select from '../UI/Select'
import SubmitButton from '../UI/SubmitButton'

class EditForm extends React.Component {
    options = [ {
        text: 'Nacional',
        value: 0,
    }, {
        text: 'Estrangeira - importação direta',
        value: 1,
    }, {
        text: 'Estrangeira - adquirida no mercado interno',
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
            </div>
            <div className="form-row">
                <div className="col-sm">
                    <Input type="text"
                        onChange={ event => this.handleChange('sku', event) }
                        value={ this.props.sku || '' }
                        maxLength="13"
                        label="SKU"
                        required
                    />
                </div>
                <div className="col-sm">
                    <Input type="text"
                        onChange={ event => this.handleChange('ncm', event) }
                        value={ this.props.ncm || '' }
                        maxLength="8"
                        label="NCM"
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
                        onChange={ event => this.handleChange('balance', event) }
                        value={ this.props.balance || '' }
                        label="Saldo"
                        step=".01"
                        required
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="col-sm">
                    <Input type="text"
                        onChange={ event => this.handleChange('unit', event) }
                        value={ this.props.unit || '' }
                        label="Unidade"
                        maxLength="3"
                        required
                    />
                </div>
                <div className="col-sm">
                    <Select options={ this.options }
                        onChange={ event => this.handleChange('origin', event) }
                        value={ this.props.origin || 0 }
                        label="Origem"
                        required
                    />
                </div>
            </div>
            <SubmitButton pending={ this.props.pending }>Salvar produto</SubmitButton>
        </form>
    )
}

export default EditForm
