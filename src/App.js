import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';

import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AdminCategory from './components/AdminCategory';
import AdminSubCategory from './components/AdminSubCategory';
import AddProduct from './components/AddProduct';
import SideNav from './components/AdminSideNav';
import AdminViewUsers from './components/AdminViewUsers';
import AdminHome from './components/AdminHome';
import ProductGrid from './components/ProductGrid';
import AdminDepartment from './components/AdminDepartment';
import UpdateProfile from './components/UpdateProfile';
import ResetPass from './components/ResetPass';
function App() {
  return (
    <div>
      <Router>

        {/* <Navbar/> */}

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/admincat' element={<AdminCategory />} />
          <Route path='/adminviewusers' element={<AdminViewUsers />} />
          <Route path='/adminsubcat' element={<AdminSubCategory />} />
          <Route path='/admindepartment' element={<AdminDepartment />} />
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/adminhome' element={<AdminHome/>} />
          <Route path='/adminviewusers' element={<AdminViewUsers/>} />
          <Route path='/updateProfile' element={<UpdateProfile/>} />
          <Route path='/resetpass' element={<ResetPass/>} />
          <Route path='/viewproduct' element={<ProductGrid/>} />
          <Route path='/pgrid' element={<ProductGrid/>} />

        </Routes>
      </Router>
    </div>

  );
}

export default App;

