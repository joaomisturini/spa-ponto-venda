import React from 'react'

const CnpjTd = ({ children }) => (
    <td>{ children.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        '$1.$2.$3/$4-$5'
    ) }</td>
)

export default CnpjTd
