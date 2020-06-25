import React from 'react'
import ParentInputMask from 'react-input-mask'

const InputMask = ({ label, ...props }) => {
    const htmlLabel = label ? <label>{ label }</label> : null

    return (
        <div className="form-group">{ htmlLabel }
            <ParentInputMask className="form-control" maskPlaceholder="" { ...props } />
        </div>
    )
}

export default InputMask
