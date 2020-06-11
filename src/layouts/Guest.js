import React from 'react'

const LayoutsGuest = props => (
    <div className="container-fluid container-guest bg-light">
        <div className="row justify-content-center align-items-center h-100">
            { props.children }
        </div>
    </div>
)

export default LayoutsGuest
