
import React from 'react'
import Dashbaord from './Dashboard'
import Navbar from './Navbar'

export default function Home() {
  var x = localStorage.getItem("AdminLog");
  console.log(x)
  function logout(){
    localStorage.removeItem("AdminLog");
    console.log(x+"removed")
  }
  return (
    <div>
      <Navbar/>
      <button onClick={logout}>logou</button>
    <Dashbaord/>
    </div>
  )
}
