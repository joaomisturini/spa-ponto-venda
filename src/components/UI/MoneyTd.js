import React from 'react'
import numeral from 'numeral'

numeral.register('locale', 'pt-BR', { delimiters: {
    thousands: '.', decimal: ',',
} })

numeral.locale('pt-BR')

const MoneyTd = ({ children, prefix }) => (
    <td>{ prefix }{ numeral(children).format('0,0.00') }</td>
)

export default MoneyTd
