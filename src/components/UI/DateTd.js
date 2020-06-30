import React from 'react'
import moment from 'moment'

const DateTd = ({ children }) => (
    <td>{ moment(children).format('DD/MM/YYYY - HH:mm:ss') }</td>
)

export default DateTd
