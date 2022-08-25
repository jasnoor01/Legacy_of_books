import React from 'react'
import { useState } from 'react';
export default function AddProduct() {
  const [donatesell, setdonatesell] = useState('donate')
  return (
    <div >
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Product</p>

                    <form className="mx-1 mx-md-4">



                      <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fa-solid fa-pen"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example3c" className="form-control" placeholder='Name of product' name="text" required />

                        </div>
                      </div>

                      

                     

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fa-solid fa-pen"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example3c" className="form-control" placeholder='Description of product' name="text" required />

                        </div>
                      </div>
                      
                      
                      <div className="frame d-flex flex-row align-items-center mb-4">
                       
	<div className="center ">
		<div className="title">
			<h6>  <i className="fa-solid fa-upload"></i> Drop file to upload:</h6>
		</div>
		<div className="dropzone">
			<input type="file" className="upload-input" required/>
		</div>
	</div>
</div>
                     












<div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                        <i className="fas fa-dollar fa-lg me-3 fa-fw"></i>
                          <label htmlFor="donate">Donate</label>&nbsp;

                          <input type={'radio'} id="donate" name="type" value={'Donate'}  onClick={()=>{setdonatesell('donate')}}/>
                          &nbsp;&nbsp;&nbsp;
                          <label htmlFor='sell'>Sell</label>&nbsp;
                          <input type={'radio'} id="sell" name="type" value={'Sell'} onClick={()=>{setdonatesell('sell')}} />


                          <input type={donatesell==='donate'?"hidden":"number"} id="sellpro" className="form-control" placeholder='Enter the cost' name="text"
                          min={1} required />

                        </div>
                      </div>
                      
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-dark btn-md">Add product</button>
                      </div >
                    

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
    </section>
  </div>
);
}