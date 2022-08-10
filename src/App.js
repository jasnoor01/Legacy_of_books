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
<<<<<<< HEAD
=======
import Navbar from './components/Navbar';
>>>>>>> 996f67549fec9814efc57401754bca16f1f6504e
function App() {
  return (
    <div>
      <Router>
<<<<<<< HEAD
=======
      <Navbar/>
>>>>>>> 996f67549fec9814efc57401754bca16f1f6504e
      <Routes>
        
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Registration' element={<Registration/>}/>
      
      </Routes>
      </Router>
    </div>
    
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 996f67549fec9814efc57401754bca16f1f6504e
