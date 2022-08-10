<<<<<<< HEAD
import React from 'react'
import swal from 'sweetalert';
export default function Registration() 
{
    function registerform(e){
        e.preventDefault();
        var data= new FormData(e.currentTarget)
        var obj={
            Name:data.get("name"),
            Email:data.get("email"),
            Password:data.get("password"),
            Rpassword:data.get("rpassword"),
        } 
        
        if(obj.Password===obj.Rpassword){
            console.log(obj);

            
            e.target.reset()
            swal("Registration Successful!","", "success");
        }else{
            swal("Please make sure your passwords match","", "error");
        }

    }
  return (
    <div><section className="vh-100" style={{backgroundColor: '#eee'}}>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{borderRadius: '25px'}}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
  
                  <form className="mx-1 mx-md-4" onSubmit={registerform}>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" className="form-control" placeholder='Name' name="name" required />
                        {/* <label className="form-label" for="form3Example1c">Your Name</label> */}
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" className="form-control" placeholder='Email' name="email" required/>
                        {/* <label className="form-label" for="form3Example3c">Your Email</label> */}
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" className="form-control" placeholder='Password' name="password" required/>
                        {/* <label className="form-label" for="form3Example4c">Password</label> */}
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4cd" className="form-control" placeholder='Repeat password' name="rpassword" required/>
                        {/* <label className="form-label" for="form3Example4cd">Repeat your password</label> */}
                      </div>
                    </div>
  
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg">Register</button>
                    </div>
  
                  </form>
  
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid" alt="Sample image"/>
  
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
=======
import React from 'react';
import swal from 'sweetalert';
export default function Registration() 

{
    function registerform(e){
        e.preventDefault();
        var data= new FormData(e.currentTarget)
        var obj={
            Name:data.get("name"),
            Email:data.get("email"),
            Password:data.get("password"),
            Rpassword:data.get("rpassword"),
        } 
        
        if(obj.Password===obj.Rpassword){
            console.log(obj);

            
            e.target.reset()
            swal("Registration Successful!","", "success");
        }else{
            swal("Please make sure your passwords match","", "error");
        }

    }
  return (
    <div><section className="vh-100" style={{backgroundColor: '#eee'}}>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{borderRadius: '25px'}}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
  
                  <form className="mx-1 mx-md-4" onSubmit={registerform}>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" className="form-control" placeholder='Name' name="name" required />
                        {/* <label className="form-label" for="form3Example1c">Your Name</label> */}
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" className="form-control" placeholder='Email' name="email" required/>
                        {/* <label className="form-label" for="form3Example3c">Your Email</label> */}
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" className="form-control" placeholder='Password' name="password" required/>
                        {/* <label className="form-label" for="form3Example4c">Password</label> */}
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4cd" className="form-control" placeholder='Repeat password' name="rpassword" required/>
                        {/* <label className="form-label" for="form3Example4cd">Repeat your password</label> */}
                      </div>
                    </div>
  
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg">Register</button>
                    </div>
  
                  </form>
  
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src={require('../Images/signupimg.jpg')}
                    className="img-fluid" alt="Sample image"/>
                  {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid" alt="Sample image"/> */}
  
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
>>>>>>> 996f67549fec9814efc57401754bca16f1f6504e