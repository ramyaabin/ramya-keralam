import React, { Component } from 'react';
import ramyalogo from '../Pages/ramyalogo.png';
import {Link} from 'react-router-dom';



class Navbar extends Component {
  render() {
      return (
<div>
               
             <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" to="/"  >
                <img src= {ramyalogo} alt="logo" style={{width: '80px'}}/>
            </a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"aria-expanded="false" aria-label="Toggle navigation">
            <span id="click">
              <label for="click" class="menu-btn">
              <i className="fa fa-bars" aria-hidden="true"></i>
              </label>
              </span>
            </button>

            <div className="collapse navbar-collapse"id="navbarTogglerDemo02">
            
              <ul className="navbar-nav m-auto">
                 
                <li className="nav-item active">
                    <Link className="nav-link active text-light  fs-5  ml-5" aria-current="page" to="/home">
                   Home&nbsp;<i className="fas fa-home"></i><span class="sr-only"></span>
                   
                    </Link>
                </li>
                  <li className="nav-item">
                      
                    <Link className="nav-link text-light fs-5 ml-5" to="/places">
                      Places 
                    </Link>
                  </li>
              
                <li className="nav-item">
                   
                  <Link className="nav-link text-light   fs-5 ml-5" to="/accomodation">
                    Accomodation 
                  </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light  fs-5  ml-5" to="/bloomings">
                      Bloomings 
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light  fs-5  ml-5" to="/feedback">
                      Feedback 
                    </Link>
                </li>
                </ul>
              



               
                <div className="main">
                    <form action="http://localhost:3002/" target="_blank" method="get">
                         <input type = "text" name = "search" placeholder="Search"/>
                         <input type = "submit" value="search"/>

                    </form>
                </div>



      





              </div>
          </div>
        </nav> 
        
         
            </div>
        
      
        );
    }
}

export default Navbar;