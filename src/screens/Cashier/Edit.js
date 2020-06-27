import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import EditForm from '../../components/Cashier/EditForm'
import CashierService from '../../services/CashierService'

class ScreensCashierEdit extends React.Component {
    state = {
        pending: false,
        saved: false,
        cashier: {},
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params

        const cashier = id !== undefined ? await CashierService.show(id) : {}
        this.setState({ cashier })
    }

    handleChange = (field, value) => {
        this.setState(({ cashier }) => ({
            cashier: Object.assign({}, cashier, { [field]: value }),
        }))
    }

    handleSave = async () => {
        this.setState({ pending: true })

        const { id } = this.props.match.params

        const saved = id === undefined
            ? await CashierService.create(this.state.cashier)
            : await CashierService.update(id, this.state.cashier)

        this.setState({ saved, pending: false })
    }

    render = () => {
        if (this.state.saved) {
            return <Redirect to="/caixas" />
        }

        const { id } = this.props.match.params
        const action = id === undefined ? 'criar' : 'editar'

        return (
            <>
                <div className="row">
                    <div className="col-sm">
                        <h3>Caixas - { action }</h3>
                    </div>
                    <div className="col-sm text-right">
                        <Link to="/caixas" className="btn btn-outline-secondary">Voltar</Link>
                    </div>
                </div>
                <EditForm pending={ this.state.pending }
                    onChange={ this.handleChange }
                    onSubmit={ this.handleSave }
                    { ...this.state.cashier }
                />
            </>
        )
    }
}

export default ScreensCashierEdit
