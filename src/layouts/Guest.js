import React from 'react'
import NotificationWrapper from '../components/Notification/Wrapper'

const LayoutsGuest = ({ children }) => (
    <div className="container-fluid container-guest bg-light">
        <div className="row justify-content-center align-items-center h-100">{ children }</div>
        <NotificationWrapper />
    </div>
)

export default LayoutsGuest
