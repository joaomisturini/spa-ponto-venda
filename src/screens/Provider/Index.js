import React from 'react'
import { Link } from 'react-router-dom'

class ScreensProviderIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = { providers: [] }
    }

    componentDidMount = () => {

    }

    render = () => {
        const htmlProviders = this.state.providers.map(provider => (
            <tr>
                <td>{ provider.RazaoSocial }</td>
                <td>{ provider.CNPJ }</td>
                <td>{ provider.Telefone }</td>
                <td>{ provider.Email }</td>
                <td></td>
            </tr>
        ))

        return (
            <>
                <div className="row">
                    <div className="col-sm">
                        <h3>Fornecedores</h3>
                    </div>
                    <div className="col-sm text-right">
                        <Link to="/fornecedores/criar" className="btn btn-outline-primary">Novo fornecedor</Link>
                    </div>
                </div>
                <div className="table-responsive mt-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Razão social</th>
                                <th>CNPJ</th>
                                <th>Telefone</th>
                                <th>E-mail</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>{ htmlProviders }</tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default ScreensProviderIndex
