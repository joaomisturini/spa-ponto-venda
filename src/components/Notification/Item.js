import React from 'react'

const NotificationItem = ({ type, title, message, onClick }) => {
    const classList = `toastr p-3 shadow-sm rounded text-white bg-${ type }`

    return (
        <div className={ classList } onClick={ onClick }>
            <span className="d-block"><strong>{ title }</strong></span>
            <span className="d-block">{ message }</span>
        </div>
    )
}

export default NotificationItem
