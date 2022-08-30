import React from 'react'
import { Link } from 'react-router-dom'

export default function SideNav() {
    return (
        
        <div className=' col-lg-2 p-0' >
            <input type="checkbox" name="" id="side-menu-switch"  />
            
            <div className="side-menu p-0 ">
                
                <nav>
                
                    <Link className="link " to='/AddProduct' >Add Product</Link>
                    <Link className="link" to="/admincat"  >Add Category</Link>
                    <Link className="link" to="/adminsubcat"   >Add Sub Category</Link>
                    <Link className="link" to="/admindepartment"   >Add Department</Link>
                    <Link className="link" to="/"   >View Products</Link>
                    <Link className="link" to="/adminviewusers"   >View Users</Link>

                </nav>
                <label htmlFor="side-menu-switch">
                    <i className="fas fa-angle-right"></i>
                </label>
            </div>
        </div>
    )
}
