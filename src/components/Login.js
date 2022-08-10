

import React from 'react'

import Navbar from './Navbar'
export default function Login() {
  return (
    <div>
    
        <form className='form-group col-lg-2'>
            <input type={'text'} placeholder={' Enter Username'} className="form-control"/> <br/>
            <input type={'password'} placeholder={'Enter Password'} className="form-control"/><br/>
            <button type={"submit"} className="btn btn-secondary">Log in</button>
        </form>
    </div>
  )
}

