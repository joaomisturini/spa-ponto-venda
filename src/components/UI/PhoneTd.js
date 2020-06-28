import React from 'react'

const PhoneTd = ({ children }) => (
    <td>{ children.replace(
        /^(\d{2})(\d{4})(\d{4})/,
        '($1) $2-$3'
    ) }</td>
)

export default PhoneTd
