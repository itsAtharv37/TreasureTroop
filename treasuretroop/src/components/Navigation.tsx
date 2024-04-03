import React from 'react'
import '../styles/component-style.css'

const Navigation: React.FC = () => {
    return(
        <nav className='navigation'>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation