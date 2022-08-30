import React from 'react';
import { useState } from 'react';


import AdminSideNav from "./AdminSideNav";
import Dashboard from './Dashboard';
export default function AddProduct() {
  const [donatesell, setdonatesell] = useState('donate')

  function addp(e) {
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var obj = {
      id: localStorage.getItem('AdminLog'),
      pName: data.get("nproduct"),
      pDescription: data.get('des'),
      pPriceType: data.get('pricetype'),
      pPrice: data.get('price'),
      // pImage:data.get('image')

    };
    console.log(obj)
  }
  return (
    <div >
      <Dashboard/>
      <div className="row m-0 p-0">
      <div style={{zIndex:'1'}}>
        <AdminSideNav />

        </div>
      <div className="col-lg-12 p-0">


      
      <section className="vh-100" style={{ backgroundColor: 'aliceblue' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Product</p>

                      <form className="mx-1 mx-md-4" onSubmit={addp}>



                        <div className="d-flex flex-row align-items-center mb-4">
                          {/* <i className="fa-solid fa-pen"></i>
                           */}
                           <i className="fa-solid fa-book-open-reader"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example3c" className="form-control" placeholder='Name of product' name="nproduct" required />

                          </div>
                        </div>





                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa-solid fa-pen"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example3c" className="form-control" placeholder='Description of product' name="des" required />

                          </div>
                        </div>


                        <div className="frame d-flex flex-row align-items-center mb-4">

                          {/* <div className="center ">
                              <div className="title">
                                <h6>  <i className="fa-solid fa-upload"></i> Drop file to upload:</h6>
                              </div>
                              <div className="dropzone">
                                <input type="file" name='image' className="upload-input" accept=".jpeg,.png,.jpg" multiple />
                              </div>
                            </div> */}
                          <div className="input-group">
                            {/* <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                              </div> */}
                            <div className="custom-file">
                              <input type="file" className="custom-file-input upload-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" name='image'  accept=".jpeg,.png,.jpg" multiple />
                              <label className="custom-file-label" htmlFor="inputGroupFile01">Choose Images</label>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            {/* <i className="fas fa-dollar fa-lg me-3 fa-fw"></i> */}
                            {/* <i class="fas fa-solid fa-box-heart"></i> */}
                            
                            <label htmlFor="donate"><i className="fa-solid fa-hand-holding-medical"></i> Donate</label>&nbsp;

                            <input type={'radio'} id="donate" name="pricetype" value={'Donate'} onClick={() => { setdonatesell('donate') }} defaultChecked/>
                            &nbsp;&nbsp;&nbsp;
                            <label htmlFor='sell'><i className="fas fa-dollar fa-lg me-3 fa-fw"></i>  Sell</label>&nbsp;
                            <input type={'radio'} id="sell" name="pricetype" value={'Sell'} onClick={() => { setdonatesell('sell') }} />


                            <input type={donatesell === 'donate' ? "hidden" : "number"} defaultValue="0" name="price" id="sellpro" className="form-control" placeholder='Enter the cost'
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


      </div>
    </div>
  );
}