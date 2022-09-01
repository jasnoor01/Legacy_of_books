import React from 'react'
import axios from 'axios';
import Navbar from './Navbar'
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';

export default function ResetPass() {

  var navi = useNavigate();

  var url = "http://localhost:1000/";
function Resetpass(e){
    e.preventDefault();
    var data = new FormData(e.currentTarget)
    var obj = {
      Email: data.get("email"),
      DOB: data.get("dob"),
      Contact: data.get("contact"),
      npass: data.get("newpass")
    }
    axios.post(url + "fpass",obj).then((succ) => {
        // console.log(succ)
        if(succ.data===''){
            swal("Invalid Credentials!","","error")
        }
        else{swal("Password Updated","","success")}
      });
}
  return (
    <div>
      <Navbar/>
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Reset Password</p>

                    <form className="mx-1 mx-md-4" onSubmit={Resetpass}>



                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="" className="form-control" placeholder='Email' name="email" required />

                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fa-solid fa-phone"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="number" id="" className="form-control" placeholder='Contact' name="contact" required />

                        </div>
                      </div>
                      <div>
                      <label htmlFor="dob" className="labels">Enter date of birth:</label>
                      <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fa-solid fa-calendar-days"></i>
                        <div className="form-outline flex-fill mb-0"> 
                        
                          <input type="date" id="dob" className="form-control"  name="dob" required />
                        </div>
                      </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fa-solid fa-lock"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="" className="form-control" placeholder='New Password' name="newpass" required />

                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button className="btn btn-dark btn-md">Change Password</button></div>
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