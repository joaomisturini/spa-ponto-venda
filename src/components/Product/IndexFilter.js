import React from 'react'
import Input from '../UI/Input'
import Select from '../UI/Select'

class IndexFilter extends React.Component {
    options = [ {
        text: 'Menor ou igual a',
        value: 0,
    }, {
        text: 'Maior ou igual a',
        value: 1,
    } ]

    handleChange = (field, { target }) => {
        this.props.onChange(field, target.value)
    }

    render = () => (
        <form className="mb-2">
            <p>Filtre os resultados</p>
            <div className="form-row">
                <div className="col-sm">
                    <Input type="text"
                        onChange={ event => this.handleChange('name', event) }
                        value={ this.props.name || '' }
                        placeholder="Nome"
                        maxLength="60"
                    />
                </div>
                <div className="col-sm">
                    <div className="form-group">
                        <div className="input-group">
                            <Select options={ this.options }
                                onChange={ event => this.handleChange('priceOption', event) }
                                value={ this.props.priceOption || 0 }
                                noGroup={ true }
                            />
                            <Input type="number"
                                onChange={ event => this.handleChange('price', event) }
                                value={ this.props.price || '' }
                                placeholder="Preço"
                                noGroup={ true }
                                step=".01"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="form-group">
                        <div className="input-group">
                            <Select options={ this.options }
                                onChange={ event => this.handleChange('balanceOption', event) }
                                value={ this.props.balanceOption || 0 }
                                noGroup={ true }
                            />
                            <Input type="number"
                                onChange={ event => this.handleChange('balance', event) }
                                value={ this.props.balance || '' }
                                placeholder="Saldo"
                                noGroup={ true }
                                step=".01"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default IndexFilter
