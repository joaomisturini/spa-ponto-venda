import React from 'react'
import { Link } from 'react-router-dom'
import ProviderService from '../../services/ProviderService'

class ScreensProviderIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = { providers: [] }
    }

    componentDidMount = async () => {
        const providers = await ProviderService.list()
        this.setState({ providers })
    }

    render = () => {
        const htmlProviders = this.state.providers.map(provider => (
            <tr key={ provider.id }>
                <td>{ provider.name }</td>
                <td>{ provider.cnpj }</td>
                <td>{ provider.phone }</td>
                <td>{ provider.email }</td>
                <td className="text-right">
                    <Link to={ `/fornecedores/editar/${ provider.id }` } className="btn btn-sm btn-outline-secondary mr-2">Editar</Link>
                    <button type="button" onClick={ event => this.handleDelete(event, provider.id) } className="btn btn-sm btn-outline-danger">Excluir</button>
                </td>
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
                                <th className="text-right">Ações</th>
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
