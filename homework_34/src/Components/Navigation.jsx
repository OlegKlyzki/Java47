import React from 'react'
import { navItems } from '../Utils/constants'
import NavItem from './NavItem'

const Navigation = ({changePage}) => {
    return (
        <nav className="fixed-top mt-2 ms-4">
            <ul className="nav">
                {navItems.map(item => <NavItem key={item} itemTitle={item} changePage={changePage}/>)}
            </ul>
        </nav>
    )
}

export default Navigation