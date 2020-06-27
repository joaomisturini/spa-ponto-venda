import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import EditForm from '../../components/Product/EditForm'
import ProductService from '../../services/ProductService'

class ScreensProductEdit extends React.Component {
    state = {
        pending: false,
        saved: false,
        product: {},
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params

        const product = id !== undefined ? await ProductService.show(id) : {}
        this.setState({ product })
    }

    handleChange = (field, value) => {
        this.setState(({ product }) => ({
            product: Object.assign({}, product, { [field]: value }),
        }))
    }

    handleSave = async () => {
        this.setState({ pending: true })

        const { id } = this.props.match.params

        const saved = id === undefined
            ? await ProductService.create(this.state.product)
            : await ProductService.update(id, this.state.product)

        this.setState({ saved, pending: false })
    }

    render = () => {
        if (this.state.saved) {
            return <Redirect to="/produtos" />
        }

        const { id } = this.props.match.params
        const action = id === undefined ? 'criar' : 'editar'

        return (
            <>
                <div className="row">
                    <div className="col-sm">
                        <h3>Produtos - { action }</h3>
                    </div>
                    <div className="col-sm text-right">
                        <Link to="/produtos" className="btn btn-outline-secondary">Voltar</Link>
                    </div>
                </div>
                <EditForm pending={ this.state.pending }
                    onChange={ this.handleChange }
                    onSubmit={ this.handleSave }
                    { ...this.state.product  }
                />
            </>
        )
    }
}

export default ScreensProductEdit
