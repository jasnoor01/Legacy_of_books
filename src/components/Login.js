

import React from 'react'
import axios from 'axios';
import Navbar from './Navbar'
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

  var navi = useNavigate();

  var url = "http://localhost:1000/";

  function logincheck(e) {
    e.preventDefault();
    var data = new FormData(e.currentTarget)
    var obj = {
      Email: data.get("email"),
      Password: data.get("password"),
      Type: data.get("type"),
    }
    axios.post(url + 'getlogin', obj).then((succ) => {

      if (succ.data === 'err') {
        swal("Error Occured", "Please contact the authorities", "error")
      } else if (succ.data === 'no') {
        swal("Please enter correct credentials", "", "error")
      } else {
        // console.log(succ.data._id);
        if (data.get("type") === 'Admin') {
          localStorage.setItem('AdminLog', succ.data._id);
          navi('/adminhome');
        } else {


          if (succ.data === "") {
            swal("Invalid Email or Password!", "", "error");
            // console.log("NOT OK")
          } else {
            if(succ.data.Status==='Pending'){
              
              swal("Application under process!", "Status:Pending", "info");
            }
            else if(succ.data.Status==='Approved'){
              e.target.reset()
              localStorage.setItem('UserLog', succ.data._id);
              navi('/updateProfile')
            }
            else if(succ.data.Status==='Rejected'){
              
              swal("Sorry your application was rejected!", "Status:Rejected", "info");
            }
            else if(succ.data.Status==='Blocked'){
              swal("Account  blacklisted!", "Status:Blocked", "info");
            }
          }



        }

      }


      // if (succ.data === "") {
      //   swal("Invalid Email or Password!", "", "error");
      //   console.log("NOT OK")
      // } else {
      //   e.target.reset()
      //   console.log("OK")
      // }


    })
  }
  // console.log(localStorage.getItem('UserLog'));
  // console.log("aa");
  return (
    <div>
      <Navbar />
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" >Sign in</p>

                      <form className="mx-1 mx-md-4" onSubmit={logincheck}>



                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="" className="form-control" placeholder='Email' name="email" required />

                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="" className="form-control" placeholder='Password' name="password" required />

                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label htmlFor="user">User</label>&nbsp;
                            <input type={'radio'} id="user" name="type" value={'User'} />
                            &nbsp;&nbsp;&nbsp;
                            <label htmlFor='admin'>Admin</label>&nbsp;
                            <input type={'radio'} id="admin" name="type" value={'Admin'} defaultChecked />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Sign in</button>
                        </div >
                        <div className="d-flex flex-row align-items-center mb-4">Not a user?<Link to="/Registration">Sign up?</Link><br/>
                        </div>
                        Forget Password?<Link to="/resetpass">Click here to reset</Link>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src={require('../Images/signupimg.jpg')}
                        className="img-fluid" alt="Sample image" />

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section></div>
  )
}

