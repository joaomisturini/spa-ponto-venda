import React from 'react'
import { Link } from 'react-router-dom'
import UserService from '../../services/UserService'
import CashierService from '../../services/CashierService'
import IndexTable from '../../components/Cashier/IndexTable'

class ScreensCashierIndex extends React.Component {
    state = {
        cashiers: [],
        profile: 0,
    }

    componentDidMount = async () => {
        const { profile } = await UserService.show()
        this.setState({ profile })

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

    handleClose = async id => {
        const closed = await CashierService.close(id)

        if (closed) {
            this.setState(({ cashiers }) => {
                const index = cashiers.findIndex(cashier => cashier.id === id)
                cashiers[index].open = false
                cashiers[index].balance = 0

                return { cashiers }
            })
        }

        return closed
    }

    render = () => (
        <>
            <div className="row mb-2">
                <div className="col-sm"><h3>Caixas</h3></div>
                { this.state.profile === 0 && (
                    <div className="col-sm text-right">
                        <Link to="/caixas/criar" className="btn btn-outline-primary">Novo caixa</Link>
                    </div>
                ) }
            </div>
            <IndexTable onDestroy={ this.handleDestroy } onClose={ this.handleClose } { ...this.state } />
        </>
    )
}

export default ScreensCashierIndex
