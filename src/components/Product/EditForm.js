import React from 'react'
import Input from '../UI/Input'
import SubmitButton from '../UI/SubmitButton'

class EditForm extends React.Component {
    state = {
        balance: '',
        price: '',
        icms: '',
        name: '',
        ean: '',
        ipi: '',
    }

    componentDidMount = async () => {
        const product = await this.props.onLoad()

        this.setState({
            balance: product.balance || '',
            price: product.price || '',
            icms: product.icms || '',
            name: product.name || '',
            ean: product.ean || '',
            ipi: product.ipi || '',
        })
    }

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
                    <Input type="text"
                        onChange={ event => this.handleChange('name', event) }
                        value={ this.state.name }
                        maxLength="60"
                        label="Nome"
                        autoFocus
                        required
                    />
                </div>
                <div className="col-sm">
                    <Input type="text"
                        onChange={ event => this.handleChange('ean', event) }
                        value={ this.state.ean }
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
                        value={ this.state.price }
                        label="Preço"
                        step=".01"
                        required
                        min="0"
                    />
                </div>
                <div className="col-sm">
                    <Input type="number"
                        onChange={ event => this.handleChange('ipi', event) }
                        value={ this.state.ipi }
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
                        value={ this.state.icms }
                        label="ICMS"
                        step=".01"
                        required
                        min="0"
                    />
                </div>
                <div className="col-sm">
                    <Input type="number"
                        onChange={ event => this.handleChange('balance', event) }
                        value={ this.state.balance }
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
