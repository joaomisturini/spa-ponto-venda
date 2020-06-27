import React from 'react'
import { Redirect } from 'react-router-dom'
import UserService from '../../services/UserService'
import ProfileForm from '../../components/User/ProfileForm'

class ScreensUserProfile extends React.Component {
    state = {
        pending: false,
        saved: false,
        user: {},
    }

    componentDidMount = async () => {
        const user = await UserService.show()
        this.setState({ user })
    }

    handleChange = (field, value) => {
        this.setState(({ user }) => ({
            user: Object.assign({}, user, { [field]: value }),
        }))
    }

    handleSave = async () => {
        this.setState({ pending: true })

        const saved = await UserService.update(this.state.user)
        this.setState({ saved, pending: false })
    }

    render = () => {
        if (this.state.saved) {
            return <Redirect to="/" />
        }

        return (
            <>
                <h3>Editar perfil</h3>
                <ProfileForm pending={ this.state.pending }
                    onChange={ this.handleChange }
                    onSubmit={ this.handleSave }
                    { ...this.state.user }
                />
            </>
        )
    }
}

export default ScreensUserProfile
