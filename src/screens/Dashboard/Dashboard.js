import React from 'react'
import UserService from '../../services/UserService'

class ScreensDashboard extends React.Component {
    state = { name: '' }

    componentDidMount = async () => {
        const user = await UserService.show()

        this.setState({ name: user.name || '' })
    }

    render = () => (
        <div className="row">
            <div className="col px-5 py-4">
                <h1 className="mb-4">Seja bem-vindo, { this.state.name }!</h1>
                <p>Selecione uma das opções do menu para iniciar.</p>
            </div>
        </div>
    )
}

export default ScreensDashboard
