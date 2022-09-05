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

    var idd = localStorage.getItem('UserLog')
    function getdata() {
        axios.get(url + "getitemsofcart/?id=" + idd).then((succ) => {
            setdata(succ.data);
        });
    }

    useEffect(() => {
        getdata();
    }, []);






console.log(data);




    return (
        <div>
          <Navbar/>
          {/* <h1>{data[0].cartof}</h1> */}
        </div>
    )
}