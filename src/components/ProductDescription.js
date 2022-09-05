import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

import swal from "sweetalert";

export default function ProductDescription() {
    
  const [load, setload] = useState(false)
    var url = "http://localhost:1000/";
    const [data, setdata] = useState([])
    const navi = useNavigate()
    const [img, setimg] = useState()

    const params = new URLSearchParams(window.location.search)
    var idd = params.get('id')
    // console.log(idd)
    function getdata() {
        axios.get(url + "getprodesc/?id=" + idd).then((succ) => {
            setdata(succ.data);
            setimg(data.pImage1)
        });
    }

    useEffect(() => {
        getdata();
    }, []);



    function cart(x) {
        setload(true)
        if (localStorage.getItem('UserLog')) {
            var obj = {
                cartof: localStorage.getItem('UserLog'),
                itemid: idd
            }
            axios.post(url + 'addtocart', obj).then((succ) => {
                // console.log(succ)
                swal("Product Added Successfully", "", "success")
              setload(false)
            })
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








    return (
        <div>
            <Navbar />
            <div className="my-5 container bootdey" >
                <div className="col-md-12">
                    <section className="panel">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="pro-img-details" >
                                        <img src={img} alt="" width={"550px"} height={"330"} />
                                    </div>
                                    <div className="pro-img-list row p-0">
                                        <button className='btn btn-md p-1' onClick={() => setimg(data.pImage1)} href="#">
                                            <img src={data.pImage1} alt="" width={"100px"} height={"85"} />
                                        </button>
                                        <button className='btn btn-md p-1' onClick={() => setimg(data.pImage2)} href="#">
                                            <img src={data.pImage2} alt="" width={"100px"} height={"85"} />
                                        </button>
                                        <button className='btn btn-md p-1' onClick={() => setimg(data.pImage3)} href="#">
                                            <img src={data.pImage3} alt="" width={"100px"} height={"85"} />
                                        </button>


                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="pro-d-title">
                                        {data.pName}
                                    </h4>
                                    <p>
                                        {data.pDescription}
                                    </p>
                                    <div className="product_meta">
                                        <span className="posted_in"> <strong>Department:</strong> {data.pDepartment}</span>
                                        <span className="posted_in"> <strong>Category: </strong> {data.pCategory}</span>
                                        <span className="tagged_as"><strong>SubCategory: </strong> {data.pSubCategory}</span>
                                    </div>
                                    <div className="m-bot15"> <strong>Price : </strong>
                                        {/* <span className="amount-old">$544</span> */}
                                        <span className="pro-price"> Rs {data.pPrice} /-</span>
                                    </div>
                                    {/* <div className="form-group">
                                                             <label>Quantity</label>
                                         <input type="quantiy" placeholder="1" className="form-control quantity"/>
                                             </div> */}

                                    {load ? (
                                        <div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <div className="spinner-border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>
                                        </div>

                                    ) : (

                                    <p>
                                        <button className="btn btn-round btn-dark my-3" type="button" onClick={() => cart(data._id)}><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                                    </p>


                                    )}
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}