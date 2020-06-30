import React from 'react'
import Input from '../UI/Input'
import Select from '../UI/Select'
import InputMask from '../UI/InputMask'
import SubmitButton from '../UI/SubmitButton'

class CreateForm extends React.Component {
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
                <div className="col-sm-3">
                    <Input type="number"
                        onChange={ event => this.handleChange('number', event) }
                        value={ this.props.number || '' }
                        max="999999999"
                        label="Número"
                        autoFocus
                        required
                        min="0"
                    />
                </div>
                <div className="col-sm-3">
                    <Input type="number"
                        onChange={ event => this.handleChange('series', event) }
                        value={ this.props.series || '' }
                        label="Série"
                        max="999"
                        required
                        min="0"
                    />
                </div>
                <div className="col-sm">
                    <Select onChange={ event => this.handleChange('providerId', event) }
                        options={ this.props.providers.map(({ id, name }) => ({
                            text: name, value: id,
                        })) }
                        value={ this.props.providerId || 0 }
                        label="Fornecedor"
                        required
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="col-sm">
                    <InputMask type="text"
                        onChange={ event => this.handleChange('issueDate', event) }
                        value={ this.props.issueDate || '' }
                        mask="99/99/9999 - 99:99:99"
                        label="Data de emissão"
                        required
                    />
                </div>
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
            <SubmitButton pending={ this.props.pending }>Salvar compra e inserir itens</SubmitButton>
        </form>
    )
}

export default CreateForm
