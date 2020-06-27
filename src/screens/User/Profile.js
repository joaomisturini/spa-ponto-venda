import React from 'react'
import { Redirect } from 'react-router-dom'
import UserService from '../../services/UserService'
import ProfileForm from '../../components/User/ProfileForm'

class ScreensUserProfile extends React.Component {
    state = {
        pending: false,
        saved: false,
    }

    handleLoad = async () => {
        return await UserService.show()
    }

    handleSave = async body => {
        this.setState({ pending: true })

        const saved = await UserService.update(body)

        this.setState({ saved, pending: false })
    }

    render = () => {
        if (this.state.saved) {
            return <Redirect to="/" />
        }

        return (
            <>
                <h3>Editar perfil</h3>
                <ProfileForm pending={ this.state.pending } onSubmit={ this.handleSave } onLoad={ this.handleLoad } />
            </>
        )
    }
}

export default ScreensUserProfile
