import React from 'react'

const Input = ({ label, ...props }) => {
    const htmlLabel = label ? <label>{ label }</label> : null

    return (
        <div className="form-group">{ htmlLabel }
            <input className="form-control" { ...props } />
        </div>
    )
}

export default Input
