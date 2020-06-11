import React from 'react'

const Input = ({ label, ...props }) => (
    <div className="form-group">
        { label ? <label>{ label }</label> : null }
        <input className="form-control" { ...props } />
    </div>
)

export default Input
