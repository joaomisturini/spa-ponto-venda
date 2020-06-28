import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import CashierService from '../../services/CashierService'
import TransactForm from '../../components/Cashier/TransactForm'

class ScreensCashierTransact extends React.Component {
    state = {
        transacted: false,
        pending: false,
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

    handleTransact = async () => {
        this.setState({ pending: true })

        const { id } = this.props.match.params
        const isDeposit = this.props.match.path === '/caixas/depositar/:id'

        const transacted = isDeposit
            ? await CashierService.deposit(id, this.state.cashier)
            : await CashierService.withdraw(id, this.state.cashier)

        this.setState({ transacted, pending: false })
    }

    render = () => {
        if (this.state.transacted) {
            return <Redirect to="/caixas" />
        }

        const isDeposit = this.props.match.path === '/caixas/depositar/:id'
        const titleText = isDeposit ? 'Depositar no' : 'Sacar do'

        return (
            <>
                <div className="row">
                    <div className="col-sm">
                        <h3>{ titleText } caixa - { this.state.name }</h3>
                    </div>
                    <div className="col-sm text-right">
                        <Link to="/caixas" className="btn btn-outline-secondary">Voltar</Link>
                    </div>
                </div>
                <TransactForm pending={ this.state.pending }
                    onSubmit={ this.handleTransact }
                    onChange={ this.handleChange }
                    { ...this.state.cashier }
                />
            </>
        )
    }
}

export default ScreensCashierTransact
