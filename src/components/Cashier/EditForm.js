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
            </div>
            <SubmitButton pending={ this.props.pending }>Salvar caixa</SubmitButton>
        </form>
    )
}

export default EditForm
