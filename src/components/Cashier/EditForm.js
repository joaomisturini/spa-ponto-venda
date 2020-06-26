import React from 'react'
import Input from '../UI/Input'
import SubmitButton from '../UI/SubmitButton'

class EditForm extends React.Component {
    state = { name: '' }

    componentDidMount = async () => {
        const cashier = await this.props.onLoad()

        this.setState({ name: cashier.name || '' })
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
            </div>
            <SubmitButton pending={ this.props.pending }>Salvar caixa</SubmitButton>
        </form>
    )
}

export default EditForm
