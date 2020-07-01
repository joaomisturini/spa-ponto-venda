import React from 'react'

const PrimaryButton = ({ pending, children, onClick }) => (
    <button type="button" className="btn btn-sm btn-outline-primary" disabled={ pending } onClick={ onClick }>
        { pending ? 'Aguarde...' : children }
    </button>
)

export default PrimaryButton
