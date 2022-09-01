import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='NavBar'>
            <nav>
                <Link to='/'>AnaBrolic 💪 Calorie Tracker</Link>
                <button className='foodButton'><Link to='/foods'>Foods</Link></button>
                <button className='newButton'><Link to='/foods/new'>New Foods</Link> </button>
            </nav>
        </div>
    )
}
