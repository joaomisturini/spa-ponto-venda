import React from 'react'
import { Link } from 'react-router-dom'
import CashierService from '../../services/CashierService'
import IndexTable from '../../components/Cashier/IndexTable'

class ScreensCashierIndex extends React.Component {
    state = { cashiers: [] }

    componentDidMount = async () => {
        const cashiers = await CashierService.list()
        this.setState({ cashiers })
    }

    handleDestroy = async id => {
        const destroyed = await CashierService.destroy(id)

        if (destroyed) {
            this.setState(({ cashiers }) => ({
                cashiers: cashiers.filter(cashier => cashier.id !== id),
            }))
        }

        return destroyed
    }

    render = () => {
        return (
            <>
                <div className="row">
                    <div className="col-sm"><h3>Caixas</h3></div>
                    <div className="col-sm text-right">
                        <Link to="/caixas/criar" className="btn btn-outline-primary">Novo caixa</Link>
                    </div>
                </div>
                <div className="table-responsive mt-3">
                    <IndexTable onDestroy={ this.handleDestroy } { ...this.state } />
                </div>
            </>
        )
    }
}

export default ScreensCashierIndex
