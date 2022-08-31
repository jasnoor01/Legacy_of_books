import React, { useEffect, useState } from "react";

import axios from "axios";
import Navbar from './Navbar'

import swal from 'sweetalert';

export default function UpdateProfile() {
    
    var url = "http://localhost:1000/";
    const [data, setdata] = useState([]);
    function getdata() {
      axios.get(url + "getoneUser/?id="+localStorage.getItem('UserLog')).then((succ) => {
        setdata(succ.data);
        // console.log(id);
      });
    }
    useEffect(() => {
      getdata();
      getdata1();
    }, []);
    // console.log(data)
    function update(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var obj={
            Name:data.get("name"),
            Dob:data.get('dob'),
            Address:data.get("address"),
            Pincode:data.get("pin"),
            State:data.get("state"),
            Urn:data.get('Urn'),
            Batch:data.get('Batch'),
            Department:data.get('department')
        }
        // console.log(obj)
        axios.post(url + "updateUser?id="+localStorage.getItem('UserLog'),obj).then((succ) => {
            if(succ.data==="succ"){
                swal("Data Updated Successfully","","success")
            }
          });
    }

    const [dep, setdep] = useState([]);
    function getdata1() {
        axios.get(url + "getdep").then((succ) => {
            setdep(succ.data);
        });
    }
  return (
    <div>
        <Navbar/>
        <div className="col-lg-12 rounded bg-white mt-5 mb-5">
        <div className="row">
            <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src="https://i.imgur.com/O1RmJXT.jpg" width="90"/><span className="font-weight-bold">{data.Name}</span><span className="text-black-50">{data.Email}</span><span>United States</span></div>
            </div>
            <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className="text-right">Edit your profile</h6>
                    </div>
                    <form onSubmit={update}>
                    <div className="row mt-2 my-2">
                        <div className="col-md-6 my-2"><label className="labels">Name</label><input type="text" className="form-control" name="name"placeholder="First name" defaultValue={data.Name}/></div>
                        <div className="col-md-6 my-2"><label className="labels">Date Of Birth</label><input type="Date" className="form-control" name="dob" defaultValue={data.Dob} required/></div>
                    </div>
                    <div className="row mt-2 my-2">
                        <div className="col-md-6 my-2"><label className="labels">University Roll No.</label><input type="number" className="form-control" name="Urn" placeholder="First name" defaultValue={data.Urn}/></div>
                        <div className="col-md-6 my-2"><label className="labels">Batch</label><input type="month" className="form-control" name="batch" defaultValue={data.batch} required/></div>
                    </div>
                    <div className="row mt-2 my-2">
                        <div className="col-md-12 my-2"><label className="labels">Department</label>
                        <select className="form-select py-3 col-lg-12" name="department" aria-label="Default select example">
                                        <option defaultValue>Select Department</option>
                                        {dep.map((row) => (
                                            <option key={row._id} value={row.Department}>{row.Department}</option>
                                        ))}
                                    </select>
                        </div>
                       
                    </div>
                    <div className="row mt-3 my-2">
                        <div className="col-md-12 my-2"><label className="labels">Email</label><input type="text" className="form-control" placeholder="Email" defaultValue={data.Email} readOnly/></div>
                        <div className="col-md-12 my-2"><label className="labels">Address</label><input type="text" className="form-control" name="address" placeholder="Address" defaultValue={data.Address} required/></div>
                        {/* <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="State" value=""/></div> */}
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 my-2"><label className="labels">Pincode</label><input type="number" className="form-control" name="pin" placeholder="Pincode" defaultValue={data.Pincode} required/></div>
                        <div className="col-md-6 my-2"><label className="labels">State/Region</label><input type="text" className="form-control" name="state" placeholder="State" defaultValue={data.State} required/></div>
                    </div>
                    <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Save Profile</button></div>
                </form>
                </div>
                
                        
            </div>
            <div className="col-md-4">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div>
                    <div className="d-flex flex-row mt-3 exp-container"><img src="https://i.imgur.com/azSfBM3.png" width="45" height="45"/>
                        <div className="work-experience ml-1"><span className="font-weight-bold d-block">Senior UI/UX Designer</span><span className="d-block text-black-50 labels">Twitter Inc.</span><span className="d-block text-black-50 labels">March,2017 - May 2020</span></div>
                    </div>
                    <hr/>
                    <div className="d-flex flex-row mt-3 exp-container"><img src="https://img.icons8.com/color/100/000000/facebook.png" width="45" height="45"/>
                        <div className="work-experience ml-1"><span className="font-weight-bold d-block">Senior UI/UX Designer</span><span className="d-block text-black-50 labels">Facebook Inc.</span><span className="d-block text-black-50 labels">March,2017 - May 2020</span></div>
                    </div>
                    <hr/>
                    <div className="d-flex flex-row mt-3 exp-container"><img src="https://img.icons8.com/color/50/000000/google-logo.png" width="45" height="45"/>
                        <div className="work-experience ml-1"><span className="font-weight-bold d-block">UI/UX Designer</span><span className="d-block text-black-50 labels">Google Inc.</span><span className="d-block text-black-50 labels">March,2017 - May 2020</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}