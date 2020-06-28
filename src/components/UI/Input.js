import React from 'react'

const Input = ({ label, noGroup, ...props }) => {
    const htmlLabel = label ? <label>{ label }</label> : null

    if (noGroup) {
        return <input className="form-control" { ...props } />
    }

    return (
        <div className="form-group">{ htmlLabel }
            <input className="form-control" { ...props } />
        </div>
    )
}

export default Input
