import React from "react";
import { Container } from "react-bootstrap";



function Navbar(){
    return(
        <nav className="navbar">
            <h1>MiMi</h1>
            <a className="site-title">
            </a>
            <ul>
      <li className="active">
        <a href="/home">Home</a>
        </li>          
      <li >
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/hub">Hub</a>
    
      </li>
    </ul>
</nav>
    )
}

export {Navbar};