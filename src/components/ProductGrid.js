import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard';

import AdminSideNav from "./AdminSideNav";
export default function ProductGrid() {
    const [data, setdata] = useState([])

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
    return (
        <div>
            <Dashboard />
            <div className="row m-0 p-0">
                <div style={{ zIndex: '2' }}>
                    <AdminSideNav />

                </div>
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
                                        <li><a href="#" data-tip="View More"><i className="fa-solid fa-eye"></i></a></li>
                                        <li><a href="#" data-tip="Add to Cartt"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                    {/* <span className="product-new-label">New</span> */}
                                </div>
                                <div className="product-content ">
                                    <h3 className="title"><a href="#">{row.pName}</a></h3>

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
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
        </div>





    )
}
