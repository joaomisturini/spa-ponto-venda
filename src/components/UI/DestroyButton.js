import React from 'react'

const DestroyButton = ({ pending, children, onClick }) => (
    <button type="button" className="btn btn-sm btn-outline-danger" disabled={ pending } onClick={ onClick }>
        { pending ? 'Aguarde...' : children }
    </button>
)

export default DestroyButton
