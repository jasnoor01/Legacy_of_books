import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';

// import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Registration' element={<Registration/>}/>
      
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;