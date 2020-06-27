import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ children, ...props }) => (
    <li className="nav-item">
        <Link className="nav-link" { ...props }>{ children }</Link>
    </li>
)

export default NavItem
