import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'

import AdminSideNav from "./AdminSideNav";
import axios from 'axios';
export default function AdminViewUsers() {

    var url = "http://localhost:1000/";
    const [data, setdata] = useState([]);
    function getdata() {
      axios.get(url + "RegUsers").then((succ) => {
        setdata(succ.data);
        // console.log(succ.data);
      });
      // console.log(data)
    }
    useEffect(() => {
      getdata();
    }, []);
    // console.log(data)
    return (
        <div className='users'>
            <Dashboard />
            <div className="row m-0 p-0" >
                <div style={{ zIndex: '1' }}>
                    <AdminSideNav />

                </div>
                <div className="col-lg-12 col-sm-12 col-xs-12 col-md-12">
                    <h1 className='col-lg-12 col-sm-12 col-xs-12 col-md-12 text-center my-3' style={{fontFamily: 'myFirstFont'}}>Users</h1>
                    <div className="p-1">

                        <table>
                            <thead>
                                <tr>
                                    <th>Sr.No.</th>
                                    <th>Full Name</th>
                                    <th>Date of Birth</th>
                                    <th>Branch</th>
                                    <th>Batch</th>
                                    <th>University Roll No.</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>State</th>
                                    <th>Pincode</th>
                                    <th>Status</th>
                                    <th>Items Uploaded</th>
                                    <th>Delete User</th>
                                </tr>
                            </thead>
                            <tbody>

                                {data.map((row)=>(



                                
                                <tr key={row._id}>
                                    <td ></td>
                                    <td>{row.Name}</td>
                                    <td>{row.Dob}</td>
                                    <td>{row.Branch}</td>
                                    <td>{row.Batch}</td>
                                    <td>{row.Urn}</td>
                                    <td>{row.Email}</td>
                                    <td>{row.Address}</td>
                                    <td>{row.State}</td>
                                    <td>{row.Pincode}</td>
                                    <td>{row.Status}</td>
                                    <td><button className="btn btn-primary">View Items</button></td>
                                    <td><i className="fa-solid fa-trash-can"></i></td>
                                </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
