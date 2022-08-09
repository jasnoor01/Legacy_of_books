import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    
    <div className='navbar navbar-default'>

<div className='container-fluid'>
<div className='navbar-header'>
<div className='navbar-brand'>Logo</div>
</div>
<ul className='nav navbar-nav'>
    <li><a href="/">Home</a></li>
    <li><a href="/About">About</a></li>   
    <li><a href="/Contact">Contact</a></li>   
</ul>

<ul className='nav navbar-nav navbar-right'>
    <li><Link to='/login'>Log in</Link></li>
    <li><Link to='/Registration'>Register</Link></li>   
</ul>
</div>


</div>
    
  )
}
