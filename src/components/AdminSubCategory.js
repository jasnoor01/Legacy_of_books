import React, { useEffect, useState } from "react";

import axios from "axios";
import swal from "sweetalert";
export default function AdminCategory() {
    var url = "http://localhost:1000/";
    //   const addcat = (e) => {
    //     e.preventDefault();
    //     var data = new FormData(e.currentTarget);
    //     var obj = {
    //       Category: data.get("category"),
    //     };
    //       if(obj.Category!=''){
    //         axios.post(url + "addcat", obj).then((succ) => {
    //          // e.target.name.focus();
    //          e.target.reset();
    //        });

    //       }

    //     getdata();
    //   };
    const addsubcat = (e) => {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var obj = {
            Category: data.get("category"),
            subCategory: data.get("subcategory")
        };
        if (obj.Category != 'Select Category') {
            console.log(obj)
            axios.post(url + "addsubcat", obj).then((succ) => {
                //  e.target.name.focus();
                e.target.reset();
            });
        }
        getsubcat();
        getdata();
    }

    const [data, setdata] = useState([]);
    function getdata() {
        axios.get(url + "getcat").then((succ) => {
            setdata(succ.data);
        });
    }
    const [subcat, setsubcat] = useState([]);
    function getsubcat() {
        axios.get(url + "getsubcat").then((succ) => {
            setsubcat(succ.data);
        });
    }
    useEffect(() => {
        getdata();
        getsubcat();
    }, []);

    // //   console.log(data);
      function delsubcat(x) {
        axios.post(url+'delsubcat', {id:x}).then((succ) => {
            if(succ.data === "Deleted"){
                swal("Sub Category deleted","", "warning");
                getdata();
                getsubcat();
            }
        })
    }
    return (
        <div>
            <div className="col-lg-12 parentcat">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 childcat">
                    <h2>Add Category</h2>
                    <ul className="list-group col-lg-12 col-sm-12 col-md-12 col-xs-12">
                        {subcat.map((row) => (
                            <li className="list-group-item " key={row._id}>
                                {/* <button className="btn btn-default float-right" onClick={()=>del(row._id)}><span className="fa fa-trash"></span></button> */}
                                <b>{row.Category}</b>
                                <ul>
                                    <li className="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                                        {row.subCategory}
                                        <button className="btn btn-default float-right" onClick={()=>delsubcat(row._id)}><span className="fa fa-trash"></span></button>
                                    </li>
                                    
                                </ul>
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
                                Add Sub Category
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
                            <form onSubmit={addsubcat} id="cat-form">
                                <select className="form-select py-3 col-lg-12" name="category" aria-label="Default select example">
                                    <option defaultValue>Select Category</option>
                                    {data.map((row) => (
                                        <option key={row._id} value={row.Category}>{row.Category}</option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    id="taskname"
                                    style={{ textTransform: 'capitalize' }}
                                    name="subcategory"
                                    className=" form-control my-3 col-lg-12"
                                    placeholder="Add Sub Category..."
                                    aria-describedby="basic-addon2"
                                    required
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
    );
}
