import React from 'react'

const SubmitButton = ({ pending, children }) => (
    <button type="submit" className="btn btn-outline-success btn-block" disabled={ pending }>
        { pending ? 'Aguarde...' : children }
    </button>
)

export default SubmitButton
