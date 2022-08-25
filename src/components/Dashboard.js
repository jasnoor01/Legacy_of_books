import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar';

export default function Dashboard() {

  // localStorage.setItem('AdminLog', succ.data._id);

  const [ac, setac] = useState(window.innerWidth);
  const [view, setview] = useState(false);

  function chk() {
    if (ac < 768) {
      setview(true);
    }
  }

  useEffect(() => {
    chk();
  }, [])

  // console.log(view);

  return (
    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0 m-0'>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark m-0">

        <button className="navbar-toggler" type="button" onClick={() => setview(false)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="#">Navbar</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='row'>
        <AdminNavbar />

        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 p-0">

          <h1>DASHBOARD</h1>




        </div>
      </div>
    </div>
  )
}
