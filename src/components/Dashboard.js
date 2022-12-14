import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import swal from "sweetalert";
export default function Dashboard() {
 
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
          localStorage.removeItem('UserLog')
          localStorage.removeItem('AdminLog')
          navi('/login')

            // swal("Department deleted!", {
            //     icon: "success",
            // });
        }
    });
 
   
}
  return (

    <div style={{marginBottom:'57px'}}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <ul className='navbar-nav me-auto ml-auto'>
          <li className="nav-item" ><button className="btn nav-link" onClick={Logout}>Sign out</button></li>
         </ul>
          
        </div>
      </nav>
    </div>
  )
}
