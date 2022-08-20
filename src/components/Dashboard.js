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

  console.log(view);

  return (
    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0 m-0'>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark m-0">

        <button class="navbar-toggler" type="button" onClick={() => setview(false)}>
          <span class="navbar-toggler-icon"></span>
        </button>

        <a class="navbar-brand" href="#">Navbar</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
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
