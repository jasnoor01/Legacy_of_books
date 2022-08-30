

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {

  const [logcheck,setlogcheck]=useState(localStorage.getItem('UserLog'))
  

function Logout() {
  setlogcheck(null) 
  localStorage.removeItem('UserLog')
  console.log(localStorage.getItem('UserLog')+'abc')
   
}
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Contact">Contact us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">About us</Link>
      </li>
      
    </ul>
  <ul className='navbar-nav me-auto ml-auto'>



          <li className="nav-item" >
            {/* <Link className="nav-link" to='/login'> */}
            
            {(logcheck==null?(<Link className="nav-link" to="/login">Sign in</Link>):(<button className=" btn nav-link" onClick={Logout}>Sign out</button>))}
            
            
            {/* </Link> */}
            
            
            
            
            </li>
          <li className="nav-item" ><Link className="nav-link" to='/Registration'>Sign up</Link></li>
         </ul>
  </div>
</nav>

    // <div className='navbar navbar-default'>

    //   <div className='container-fluid'>
    //     <div className='navbar-header'>
    //       <div className='navbar-brand'>Logo</div>
    //     </div>
    //     <ul className='nav navbar-nav'>
    //       <li><a href="/">Home</a></li>
    //       <li><a href="/About">About</a></li>
    //       <li><a href="/Contact">Contact</a></li>
    //     </ul>

    //     <ul className='nav navbar-nav navbar-right'>
    //       <li><Link to='/login'>Log in</Link></li>
    //       <li><Link to='/Registration'>Register</Link></li>
    //     </ul>
    //   </div>


    // </div>

  )
}
