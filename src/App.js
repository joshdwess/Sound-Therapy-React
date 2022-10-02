import React from 'react';
import './App.css';
import{Route,Routes} from 'react-router-dom';
import {Home} from './components/Home';
import {About}  from './components/About';
import  {Hub}  from './components/Hub';
import {Navbar} from './components/Navbar';



function App() {
return(
<>
  <Navbar />
  <Routes>
    <Route path ='/home' element = {<Home />} />
    <Route path='/about' element = {<About />} />
    <Route path='/hub' element = {<Hub />} />
    <Route />
    </Routes>
    
    </>
  
)
}

export default App;
