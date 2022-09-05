import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard';
import swal from 'sweetalert';
import AdminSideNav from "./AdminSideNav";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
export default function ProductGrid() {
    const [data, setdata] = useState([])
    const navi=useNavigate()
    var url = "http://localhost:1000/";
    function getdata() {
        axios.get(url + "getpro").then((succ) => {
            setdata(succ.data);
            // console.log(succ.data);
        });
        // console.log(data)
    }
    useEffect(() => {
        getdata();
    }, []);
    
    function delproduct(x){
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover your data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
      
                axios.post(url + 'delproduct', { id: x }).then((succ) => {
                    if (succ.data === "Deleted") {
                      swal("Product deleted", "", "warning");
                      getdata();
                    }
                  })
                swal("Product deleted!", {
                  icon: "success",
                });
              }
            });
            function viewpro(x){
                // console.log(x)
                navi('/productdescription/?id='+x)
            }
        }    
        function cart(x) {
            if (localStorage.getItem('UserLog')) {
                console.log("true")
            } else {
                swal({
                    title: "Go to the Sign in page?",
                    text: "You need to Sign in first to perform this action!",
                    icon: "info",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((go) => {
                        if (go) {
                            navi('/Login')
                        }
                    });
            }
        }
        function viewpro(x){
            // console.log(x)
            navi('/productdescription/?id='+x)
        }
    return (
        <div>
        {(localStorage.getItem('AdminLog') !== null) ? ('') : (<Navbar />)}
        <div className="row m-0 p-0">
            {(localStorage.getItem('AdminLog') !== null) ? (
                <>
                    <Dashboard />
                    <div style={{ zIndex: '2' }}>
                        <AdminSideNav />

                    </div>
                </>
            ) : ('')}
            <div className="container-fluid">
            
                {/* <h3 className="h3">shopping Demo-3 </h3> */}
                <div className="row">
                    {data.map((row) => (

                        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-6 my-3" key={row._id}>
                            <div className="product-grid3 p-2">
                                <div className="product-image3">
                                    <a href="#">
                                        <img className="pic-1" src={row.pImage1} />
                                        <img className="pic-2" src={row.pImage2} />
                                    </a>
                                    <ul className="social">
                                            <li><button className='btn'  data-tip="View More" onClick={()=>viewpro(row._id)}><i className="fa-solid fa-eye"></i></button></li>
                                            <li><button className='btn'  data-tip="Add to Cartt" onClick={()=>cart(row._id)}><i className="fa fa-shopping-cart"></i></button></li>
                                        </ul>
                                        {/* <span className="product-new-label">New</span> */}
                                    </div>
                                    <div className="product-content ">
                                        <h3 className="title"><p  onClick={()=>viewpro(row._id)}>{row.pName}</p></h3>

                                    <div className="price">
                                        Rs {row.pPrice} /-
                                    </div>
                           
                                    <ul className="rating ">
                                        <li className="fa fa-star"></li>
                                        <li className="fa fa-star"></li>
                                        <li className="fa fa-star"></li>
                                        <li className="fa fa-star disable"></li>
                                        <li className="fa fa-star disable"></li>
                                    </ul>
        
                                </div>
                                {localStorage.getItem('AdminLog')?(

                                    <div> <button className='btn btn-dark btn-md' onClick={()=>delproduct(row._id)}>Delete Product</button></div>

                                ):('')}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
        </div>





    )
}