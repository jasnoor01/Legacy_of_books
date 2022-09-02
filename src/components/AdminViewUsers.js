import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'

import swal from "sweetalert";
import AdminSideNav from "./AdminSideNav";
import axios from 'axios';
export default function AdminViewUsers() {

    var url = "http://localhost:1000/";
    const [data, setdata] = useState([]);
    const [id, setid] = useState();
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
    function ustatus(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var obj = {
            idd: data.get('idd'),
            Status: data.get('status')
        }
        console.log(obj)
        axios.post(url + "updateUserStatus", obj).then((succ) => {
            if (succ.data === "succ") {
                swal("Data Updated Successfully", "", "success")
            }
        });
        getdata()
    }





    function del(x) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover your data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    axios.post(url + 'deluser', { id: x }).then((succ) => {
                        if (succ.data === "Deleted") {
                            swal("User deleted", "", "warning");
                            getdata();
                        }
                    })
                    swal("Department deleted!", {
                        icon: "success",
                    });
                }
            });
    }
    // console.log(data)
    return (
        <div className='users'>
            <Dashboard />
            <div className="row m-0 p-0" >
                <div style={{ zIndex: '1' }}>
                    <AdminSideNav />

                </div>
                <div className="col-lg-12 col-sm-12 col-xs-12 col-md-12">
                    <h1 className='col-lg-12 col-sm-12 col-xs-12 col-md-12 text-center my-3' style={{ fontFamily: 'myFirstFont' }}>Users</h1>
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
                                    <th>Contact</th>
                                    <th>Address</th>
                                    <th>State</th>
                                    <th>Pincode</th>
                                    <th>Status</th>
                                    <th>Items Uploaded</th>
                                    <th>Delete User</th>
                                </tr>
                            </thead>
                            <tbody>

                                {data.map((row) => (




                                    <tr key={row._id}>
                                        <td ></td>
                                        <td>{row.Name}</td>
                                        <td>{row.Dob}</td>
                                        <td>{row.Department}</td>
                                        <td>{row.Batch}</td>
                                        <td>{row.Urn}</td>
                                        <td>{row.Email}</td>
                                        <td>{row.Contact}</td>
                                        <td>{row.Address}</td>
                                        <td>{row.State}</td>
                                        <td>{row.Pincode}</td>
                                        <td>{row.Status}
                                            <br />
                                            <button type="button" onClick={() => setid(row._id)} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                                Update Status
                                            </button>
                                        </td>
                                        <td><button className="btn btn-primary">View Items</button></td>
                                        <td><i className="fa-solid fa-trash-can" style={{cursor:'pointer'}} onClick={()=>del(row._id)}></i></td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={ustatus} id="stat">
                                <input type={"hidden"} name="idd" defaultValue={id} />
                                <select className="form-select py-3 col-lg-12" name="status" style={{ border: '1px solid #ccc' }} aria-label="Default select example">
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                    <option value="Blocked">Blocked</option>

                                </select>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" form="stat" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
