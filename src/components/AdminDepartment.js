import React, { useEffect, useState } from "react";
import axios from "axios";

import AdminSideNav from "./AdminSideNav";
import swal from "sweetalert";
import Dashboard from "./Dashboard";
export default function AdminDepartment() {
  var url = "http://localhost:1000/";
  const adddep = (e) => {
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var obj = {
      Department: data.get("department"),
    };
    if (obj.Department !== '') {
      axios.post(url + "adddep", obj).then((succ) => {
        // e.target.name.focus();
        e.target.reset();
        getdata();
      });

    }
    getdata();
    console.log(obj)
  };

  const [data, setdata] = useState([]);
  function getdata() {
    axios.get(url + "getdep").then((succ) => {
      setdata(succ.data);
      // console.log(succ.data);
    });
    // console.log(data)
  }
  useEffect(() => {
    getdata();
  }, []);

  //   console.log(data);
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

          axios.post(url + 'deldep', { id: x }).then((succ) => {
            if (succ.data === "Deleted") {
              swal("Department deleted", "", "warning");
              getdata();
            }
          })
          swal("Department deleted!", {
            icon: "success",
          });
        }
      });










  }
  return (
    <div>
      <Dashboard />
      <div className="row m-0 p-0" >
        <div style={{ zIndex: '1' }}>
          <AdminSideNav />

        </div>
        <div className="col-lg-12 parentcat">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 childcat">
            <h2>Add Department</h2>
            <ul className="list-group col-lg-12 col-sm-12 col-md-12 col-xs-12">
              {data.map((row) => (
                <li className="list-group-item list-group-item-action d-flex align-items-center justify-content-between" key={row._id}>
                  {row.Department}
                  <button className="btn btn-default float-right" onClick={() => del(row._id)}><span className="fa fa-trash"></span></button>
                </li>
              ))}
            </ul>

            <button
              className="btn btn-info my-2"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <span><b>+</b></span>
            </button>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">
                  Add Department
                </h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body col-lg-12">
                <form onSubmit={adddep} id="cat-form">
                  <input
                    type="text"
                    id="taskname"
                    name="department"
                    className=" form-control col-lg-12"
                    placeholder="Add Department..."
                    required
                    aria-describedby="basic-addon2"
                  />
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" form="cat-form">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}