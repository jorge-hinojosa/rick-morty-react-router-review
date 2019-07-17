import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div className='app-header'>
      <nav className='app-nav'>
      <h1>Rick and Morty Characters!</h1> 
      <ul className='app-header-links-cont'>
        <Link to='/' className='app-header-links'>
          <li>Characters</li>
        </Link>
        <Link to='/episodes' className='app-header-links'>
          <li>Episodes</li>
        </Link>
      </ul>
      </nav>
      
    </div>
  )
}
