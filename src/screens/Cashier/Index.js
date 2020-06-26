import React from 'react'
import { Link } from 'react-router-dom'
import CashierService from '../../services/CashierService'
import IndexTable from '../../components/Cashier/IndexTable'

class ScreensCashierIndex extends React.Component {
    handleLoad = async () => {
        return await CashierService.list()
    }

    handleDestroy = async id => {
        return await CashierService.destroy(id)
    }

    render = () => (
        <>
            <div className="row">
                <div className="col-sm">
                    <h3>Caixas</h3>
                </div>
                <div className="col-sm text-right">
                    <Link to="/caixas/criar" className="btn btn-outline-primary">Novo caixa</Link>
                </div>
            </div>
            <div className="table-responsive mt-3">
                <IndexTable onLoad={ this.handleLoad } onDestroy={ this.handleDestroy } />
            </div>
        </>
    )
}

export default ScreensCashierIndex
