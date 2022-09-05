import React, { useEffect, useState } from "react";

import axios from "axios";
import Navbar from './Navbar'
import swal from 'sweetalert';
import SideInvoice from "./SideInvoice";
export default function BillingDetails() {

    var url = "http://localhost:1000/";
    const [data, setdata] = useState([]);
    // const [item, setitems] = useState([]);

    function getdata() {
        axios.get(url + "getoneUser/?id=" + localStorage.getItem('UserLog')).then((succ) => {
            setdata(succ.data);
            // console.log(id);
        });
        // axios.get(url + "getitemsofcart/?id=" + localStorage.getItem('UserLog')).then((succ) => {
        //     setitems(succ.data);
        //     // console.log(id);
        // });

    }

    const item = [
        {
            "_id": "631447f199fad467fb3fbfd5",
            "cartof": "630c807562f59eb481c85a85",
            "itemid": "6311c55e2a95ea44d7359fe7",
            "id": "62ff11fc54c5df17e7e89d4c",
            "pName": "Gurkirat Singh",
            "pDescription": "sxaxa",
            "pPriceType": "Donate",
            "pPrice": "0",
            "pDepartment": "Select Department",
            "pCategory": "Category",
            "pSubCategory": "SubCategory",
            "pImage1": "https://firebasestorage.googleapis.com/v0/b/legacy-of-books.appspot.com/o/marissa-grootes-ck0i9Dnjtj0-unsplash.jpg?alt=media&token=82831f11-fca9-418f-ba7c-7d416d022dc9",
            "pImage2": "https://firebasestorage.googleapis.com/v0/b/legacy-of-books.appspot.com/o/linkedin-sales-solutions-0QvTyp0gH3A-unsplash.jpg?alt=media&token=61ab93f9-c7c1-4ffd-bc49-ecbc548aeac8",
            "pImage3": "https://firebasestorage.googleapis.com/v0/b/legacy-of-books.appspot.com/o/thomas-heintz-0tgMnMIYQ9Y-unsplash.jpg?alt=media&token=77d3be0d-3e77-473f-9841-25133d2001d6"
        },
        {
            "_id": "631448e542a48cb138c8e215",
            "cartof": "630c807562f59eb481c85a85",
            "itemid": "6311c55e2a95ea44d7359fe7",
            "id": "62ff11fc54c5df17e7e89d4c",
            "pName": "Gurkirat Singh",
            "pDescription": "sxaxa",
            "pPriceType": "Donate",
            "pPrice": "1",
            "pDepartment": "Select Department",
            "pCategory": "Category",
            "pSubCategory": "SubCategory",
            "pImage1": "https://firebasestorage.googleapis.com/v0/b/legacy-of-books.appspot.com/o/marissa-grootes-ck0i9Dnjtj0-unsplash.jpg?alt=media&token=82831f11-fca9-418f-ba7c-7d416d022dc9",
            "pImage2": "https://firebasestorage.googleapis.com/v0/b/legacy-of-books.appspot.com/o/linkedin-sales-solutions-0QvTyp0gH3A-unsplash.jpg?alt=media&token=61ab93f9-c7c1-4ffd-bc49-ecbc548aeac8",
            "pImage3": "https://firebasestorage.googleapis.com/v0/b/legacy-of-books.appspot.com/o/thomas-heintz-0tgMnMIYQ9Y-unsplash.jpg?alt=media&token=77d3be0d-3e77-473f-9841-25133d2001d6"
        }
    ]

    const sum = item.reduce((accumulator, object) => {
        return Number(accumulator + Number(object.pPrice));
    }, 0);


    useEffect(() => {
        getdata();

    }, []);


    const [contact, setcontact] = useState(data.Contact)
    const [billname, setbillname] = useState(data.Name)
    const [add, setadd] = useState(data.Address)
    const [state, setstate] = useState(data.State)
    const [pin, setpin] = useState(data.Pincode)

    const currentDate = new Date();

    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
    const currentYear = currentDate.getFullYear();

    const dateString = ("0" + currentDayOfMonth).slice(-2) + "/" + ("0" + (currentMonth + 1)).slice(-2) + "/" + currentYear;
    var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    return (
        <div>
            <Navbar />
            <div className="col-lg-12 rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h6 className="text-right">Enter Billing Details</h6>
                            </div>
                            <form>
                                <div className="row mt-2 my-2">
                                    <div className="col-md-6 my-2"><label className="labels">Name</label><input type="text" className="form-control" name="name" placeholder="First name" defaultValue={data.Name} onChange={(e) => setbillname(e.target.value)} /></div>
                                    {/* <div className="col-md-6 my-2"><label className="labels">Date </label><input type="text" className="form-control" readOnly defaultValue={dateString + " (" + time + ")"} required /></div> */}
                                </div>
                                <div className="row mt-2 my-2">
                                    <div className="col-md-12 my-2"><label className="labels">Contact No.</label>
                                        <input type="number" className="form-control" name="contact" placeholder="Contact" defaultValue={data.Contact} onChange={(e) => setcontact(e.target.value)} required />
                                    </div>

                                </div>
                                <div className="row mt-3 my-2">
                                    <div className="col-md-12 my-2"><label className="labels">Email</label><input type="text" className="form-control" placeholder="Email" defaultValue={data.Email} readOnly /></div>
                                    <div className="col-md-12 my-2"><label className="labels">Address</label><input type="text" className="form-control" name="address" placeholder="Address" defaultValue={data.Address} onChange={(e) => setadd(e.target.value)} required /></div>
                                    {/* <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="State" value=""/></div> */}
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6 my-2"><label className="labels">Pincode</label><input type="number" className="form-control" name="pin" placeholder="Pincode" onChange={(e) => setpin(e.target.value)} defaultValue={data.Pincode} required /></div>
                                    <div className="col-md-6 my-2"><label className="labels">State/Region</label><input type="text" className="form-control" name="state" placeholder="State" onChange={(e) => setstate(e.target.value)} defaultValue={data.State} required /></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12 my-2"><label className="labels">Addition Information/Request</label><textarea type="text" className="form-control" placeholder="Extra note such as company or payment information..." name="note" /></div>
                                    {/* <div className="col-md-6 my-2"><label className="labels">State/Region</label><input type="text" className="form-control" name="state" placeholder="State" onChange={(e) => setstate(e.target.value)} defaultValue={data.State} required /></div> */}
                                </div>
                                {/* <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Order</button></div> */}
                                {(sum > 0) ? (
                                    <div className="row mt-3">
                                        <div className="col-md-12 my-2"><label className="labels">Payment Method</label>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                                <label class="form-check-label" for="exampleRadios1">
                                                <i class="fa-regular fa-money-bill-1"></i> Cash on Delivery
                                                </label>
                                        </div>



                                        </div>
                                    </div>



                                ) : ('')}


                            </form>
                        </div>

















                        {/* invoice */}
                    </div>
                    <div className="col-md-6">

                        <div className="page-content container">
                            <div className="page-header text-blue-d2">
                                <h1 className="page-title text-secondary-d1">
                                    Invoice
                                    <small className="page-info">
                                        <i className="fa fa-angle-double-right text-80"></i>
                                        ID: #111-222
                                    </small>
                                </h1>

                                <div className="page-tools">
                                    <div className="action-buttons">
                                        <a className="btn bg-white btn-light mx-1px text-95" href="#" data-title="Print">
                                            <i className="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
                                            Print
                                        </a>
                                        <a className="btn bg-white btn-light mx-1px text-95" href="#" data-title="PDF">
                                            <i className="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
                                            Export
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="container px-0">
                                <div className="row mt-4">
                                    <div className="col-12 col-lg-12">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="text-center text-150">
                                                    <i className="fa fa-book fa-1x text-success-m2 mr-1"></i>
                                                    <span className="text-default-d3">Legacy Of Books</span>
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="row brc-default-l1 mx-n1 mb-4" />

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div>
                                                    <span className="text-sm text-grey-m2 align-middle">To:</span>
                                                    <span className="text-600 text-110 text-blue align-middle">{billname}</span>
                                                </div>
                                                <div className="text-grey-m2">
                                                    <div className="my-1" style={{ wordBreak: 'break-word' }}>
                                                        {add}
                                                    </div>
                                                    <div className="my-1">
                                                        {state}, {pin}
                                                    </div>
                                                    <div className="my-1"><i className="fa fa-phone fa-flip-horizontal text-secondary"></i> <b className="text-600">{contact}</b></div>
                                                </div>
                                            </div>

                                            <div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                                                <hr className="d-sm-none" />
                                                <div className="text-grey-m2">
                                                    <div className="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                                                        Invoice
                                                    </div>

                                                    <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span className="text-600 text-90">ID:</span> #111-222</div>

                                                    <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span className="text-600 text-90">Issue Date:</span> {dateString + " (" + time + ")"}</div>

                                                    <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span className="text-600 text-90">Status:</span> <span className="badge badge-warning badge-pill px-25">Unpaid</span></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <div className="row text-600 text-white bgc-default-tp1 py-25">
                                                <div className="d-none d-sm-block col-1">#</div>
                                                <div className="col-9 col-sm-5">Description</div>
                                                <div className="d-none d-sm-block col-4 col-sm-2">Qty</div>
                                                <div className="d-none d-sm-block col-sm-2">Unit Price</div>
                                                <div className="col-2">Amount</div>
                                            </div>

                                            <div className="text-95 text-secondary-d3">

                                                {item.map((row) => (

                                                    <div className="row mb-2 mb-sm-0 py-25" key={row._id}>
                                                        <div className="d-none d-sm-block col-1">1</div>
                                                        <div className="col-9 col-sm-5">{row.pName}</div>
                                                        <div className="d-none d-sm-block col-2">1</div>
                                                        <div className="d-none d-sm-block col-2 text-95">Rs {row.pPrice} /-</div>
                                                        <div className="col-2 text-secondary-d2">Rs {row.pPrice} /-</div>
                                                    </div>


                                                ))}


                                            </div>

                                            <div className="row border-b-2 brc-default-l2"></div>





                                            <div className="row mt-3">
                                                <div className="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                                                    Extra note such as company or payment information...
                                                </div>

                                                <div className="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                                                    <div className="row my-2">
                                                        <div className="col-7 text-right">
                                                            SubTotal
                                                        </div>
                                                        <div className="col-5">
                                                            <span className="text-100 text-secondary-d1">Rs {sum} /-</span>
                                                        </div>
                                                    </div>

                                                    {(sum > 0) ? (
                                                        <>

                                                            <div className="row my-2">
                                                                <div className="col-7 text-right">
                                                                    GST (18%)
                                                                </div>
                                                                <div className="col-5">
                                                                    <span className="text-100 text-secondary-d1">Rs {(sum * 0.18).toFixed(2)} /-</span>
                                                                </div>
                                                            </div>

                                                            <div className="row my-2 align-items-center bgc-primary-l3 p-2">
                                                                <div className="col-7 text-right">
                                                                    Total Amount
                                                                </div>
                                                                <div className="col-5">
                                                                    <span className="text-120 text-success-d3 opacity-2">Rs {sum + Number((sum * 0.18).toFixed(2))} /-</span>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="row my-2 align-items-center bgc-primary-l3 p-2">
                                                            <div className="col-7 text-right">
                                                                Total Amount
                                                            </div>
                                                            <div className="col-5">
                                                                <span className="text-120 text-success-d3 opacity-2">Rs {sum} /-</span>
                                                            </div>
                                                        </div>
                                                    )}

                                                </div>


                                            </div>

                                            <hr />

                                            <div>
                                                <span className="text-secondary-d1 text-105">Thank you for your business</span>
                                                <a href="#" className="btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0">Pay Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}