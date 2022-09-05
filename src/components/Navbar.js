

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import swal from "sweetalert";
export default function Navbar() {

  const [logcheck, setlogcheck] = useState(localStorage.getItem('UserLog'))
  var navi = useNavigate();

  function Logout() {
    swal({
      title: "Logout?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((go) => {
        if (go) {
          setlogcheck(null)
          localStorage.removeItem('UserLog')
          localStorage.removeItem('AdminLog')
          // console.log(localStorage.getItem('UserLog')+'abc')
          navi('/login')

          // swal("Department deleted!", {
          //     icon: "success",
          // });
        }
      });


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
            <Link className="nav-link" to="/viewproduct">Products</Link>
          </li>



          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact us</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/About">About us</Link>
          </li>

        </ul>
        <ul className='navbar-nav me-auto ml-auto'>




          {/* <Link className="nav-link" to='/login'> */}

          {(logcheck == null ? (<li className="nav-item" ><Link className="nav-link" to="/login">Sign in</Link></li>) : 
          (
            <>
              <li className="nav-item "  >
                  <Link to="/cart"  className="border-0  bg-transparent row  p-0 " style={{marginRight:"0px",height:"45px"}}>
                <span className="fa-stack nav-link" data-count="5"   >
                  <i  style={{fontSize:"20px"}} className="fa fa-shopping-cart" ></i>
                </span>
                  <p className='nav-link' style={{textDecoration:"none"}}>Cart</p>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <button className="border-0 bg-transparent nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa-solid fa-user"></i> Profile
                </button>
                <div className="dropdown-menu border-0 navbar-expand-lg navbar-light bg-light " aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/updateProfile">Update Profile</Link>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <button className=" btn dropdown-item" onClick={Logout}>Sign out</button>
                </div>
              </li>
            </>
          ))}


          {/* </Link> */}





          <li className="nav-item" ><Link className="nav-link" to='/Registration'><i className="fa-solid fa-user-plus"></i> Sign up</Link></li>
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
