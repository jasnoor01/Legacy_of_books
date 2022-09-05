import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../Firebase'
import swal from "sweetalert";
import AdminSideNav from "./AdminSideNav";
import Dashboard from './Dashboard';
export default function AddProduct() {
  const [donatesell, setdonatesell] = useState('donate')

  var url = "http://localhost:1000/";
  function viewpro(params) {

  }

  const [load, setload] = useState(false)


  function addp(e) {
    setload(true)
    e.preventDefault();
    var data = new FormData(e.currentTarget);

    var img1 = data.get('image1')
    var img2 = data.get('image2')
    var img3 = data.get('image3')
    var ref = db.ref()
    const metadata = {
      contentType: img1.type,
    }
    const metadata2 = {
      contentType: img2.type,
    }
    const metadata3 = {
      contentType: img3.type,
    }

    ref.child(img1.name).put(img1, metadata).then(snapshot => snapshot.ref.getDownloadURL()).then((ur1) => {
      ref.child(img2.name).put(img2, metadata2).then(snapshot2 => snapshot2.ref.getDownloadURL()).then((ur2) => {
        ref.child(img3.name).put(img3, metadata3).then(snapshot3 => snapshot3.ref.getDownloadURL()).then((ur3) => {

          var obj = {
            id: localStorage.getItem('AdminLog'),
            pName: data.get("nproduct"),
            pDescription: data.get('des'),
            pPriceType: data.get('pricetype'),
            pPrice: data.get('price'),
            pDepartment: data.get('department'),
            pCategory: data.get('category'),
            pSubCategory: data.get('subcategory'),
            pImage1: ur1,
            pImage2: ur2,
            pImage3: ur3
          };
          axios.post(url + "addpro", obj).then((succ) => {
            // console.log(succ)
            if (succ.data !== '') {
              swal("Product Added Successfully", "", "success")
              setload(false)
            }
          });

        })
      })
    })




  }
  const [dep, setdep] = useState([]);
  const [cat, setcat] = useState([]);
  const [subcat, setsubcat] = useState([]);
  function getdata() {
    axios.get(url + "getdep").then((succ) => {
      setdep(succ.data);
    });
    axios.get(url + "getcat").then((succ) => {
      setcat(succ.data);
      // console.log(succ.data);
    });
    axios.get(url + "getsubcat").then((succ) => {
      setsubcat(succ.data);
    });
  }
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div >
      <Dashboard />
      <div className="row m-0 p-0">
        <div style={{ zIndex: '2' }}>
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
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fa-solid fa-building-user"></i>
                              <select className="form-outline flex-fill mb-0 form-select py-2  col-lg-12" name="department" style={{ border: '0', borderBottom: '1px solid #ccc ' }} aria-label="Default select example">
                                <option defaultValue>Select Department</option>
                                {dep.map((row) => (
                                  <option key={row._id} value={row.Department}>{row.Department}</option>
                                ))}
                              </select>
                            </div>
                            <div className="row">
                              <div className="d-flex flex-row align-items-center mb-4 col-lg-6">
                                <i className="fa-solid fa-building-user"></i>
                                <select className="form-outline flex-fill mb-0 form-select py-2  col-lg-12" name="category" style={{ border: '0', borderBottom: '1px solid #ccc ' }} aria-label="Default select example">
                                  <option defaultValue>Category</option>
                                  {cat.map((row) => (
                                    <option key={row._id} value={row.Category}>{row.Category}</option>
                                  ))}
                                </select>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4 col-lg-6">
                                <i className="fa-solid fa-building-user"></i>
                                <select className="form-outline flex-fill mb-0 form-select py-2  col-lg-12" name="subcategory" style={{ border: '0', borderBottom: '1px solid #ccc ' }} aria-label="Default select example">
                                  <option defaultValue>SubCategory</option>
                                  {subcat.map((row) => (
                                    <option key={row._id} value={row.subCategory}>{row.subCategory}</option>
                                  ))}
                                </select>
                              </div>

                            </div>


                            <div className="frame d-flex flex-row align-items-center mb-4">
                              <div className="input-group">
                                <div className="custom-file">
                                  <input type="file" className="custom-file-input upload-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" name='image1' accept=".jpeg,.png,.jpg" required />
                                  <label className="custom-file-label" htmlFor="inputGroupFile01">Choose Images</label>
                                </div>
                              </div>
                            </div>
                            <div className="frame d-flex flex-row align-items-center mb-4">
                              <div className="input-group">
                                <div className="custom-file">
                                  <input type="file" className="custom-file-input upload-input" id="inputGroupFile02" aria-describedby="inputGroupFileAddon02" name='image2' accept=".jpeg,.png,.jpg" required />
                                  <label className="custom-file-label" htmlFor="inputGroupFile02">Choose Images</label>
                                </div>
                              </div>
                            </div>
                            <div className="frame d-flex flex-row align-items-center mb-4">
                              <div className="input-group">
                                <div className="custom-file">
                                  <input type="file" className="custom-file-input upload-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" name='image3' accept=".jpeg,.png,.jpg" />
                                  <label className="custom-file-label" htmlFor="inputGroupFile03">Choose Images</label>
                                </div>
                              </div>
                            </div>


















                            <div className="d-flex flex-row align-items-center mb-4">
                              <div className="form-outline flex-fill mb-0">

                                <label htmlFor="donate"><i className="fa-solid fa-hand-holding-medical"></i> Donate</label>&nbsp;

                                <input type={'radio'} id="donate" name="pricetype" value={'Donate'} onClick={() => { setdonatesell('donate') }} defaultChecked />
                                &nbsp;&nbsp;&nbsp;
                                <label htmlFor='sell'><i className="fas fa-dollar fa-lg me-3 fa-fw"></i>  Sell</label>&nbsp;
                                <input type={'radio'} id="sell" name="pricetype" value={'Sell'} onClick={() => { setdonatesell('sell') }} />


                                <input type={donatesell === 'donate' ? "hidden" : "number"} defaultValue="0" name="price" id="sellpro" className="form-control" placeholder='Enter the cost'
                                  min={1} required />

                              </div>
                            </div>
                            {load ? (
                              <div>

                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                  <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                  </div>
                                </div>
                              </div>

                            ) : (

                              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="submit" className="btn btn-dark btn-md">Add product</button>
                              </div >


                            )}


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