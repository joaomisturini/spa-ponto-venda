import React from 'react'

const Select = ({ options, label, noGroup, ...props }) => {
    const htmlLabel = label ? <label>{ label }</label> : null

    const htmlOptions = options.map(option => (
        <option key={ option.value } value={ option.value }>{ option.text }</option>
    ))

    if (noGroup) {
        return <select className="form-control" { ...props }>{ htmlOptions }</select>
    }

    return (
        <div className="form-group">{ htmlLabel }
            <select className="form-control" { ...props }>{ htmlOptions }</select>
        </div>
    )
}

export default Select
