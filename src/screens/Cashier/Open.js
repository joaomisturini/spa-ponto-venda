import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import OpenForm from '../../components/Cashier/OpenForm'
import CashierService from '../../services/CashierService'

class ScreensCashierOpen extends React.Component {
    state = {
        pending: false,
        opened: false,
        cashier: {},
        name: '',
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params

        const cashier = await CashierService.show(id)
        this.setState({ name: cashier.name || '' })
    }

    handleChange = (field, value) => {
        this.setState(({ cashier }) => ({
            cashier: Object.assign({}, cashier, { [field]: value }),
        }))
    }

    handleOpen = async () => {
        this.setState({ pending: true })

        const { id } = this.props.match.params

        const opened = await CashierService.open(id, this.state.cashier)
        this.setState({ opened, pending: false })
    }

    render = () => {
        if (this.state.opened) {
            return <Redirect to="/caixas" />
        }

        return (
            <>
                <div className="row">
                    <div className="col-sm">
                        <h3>Abrir caixa - { this.state.name }</h3>
                    </div>
                    <div className="col-sm text-right">
                        <Link to="/caixas" className="btn btn-outline-secondary">Voltar</Link>
                    </div>
                </div>
                <OpenForm pending={ this.state.pending }
                    onChange={ this.handleChange }
                    onSubmit={ this.handleOpen }
                    { ...this.state.cashier }
                />
            </>
        )
    }
}

export default ScreensCashierOpen
