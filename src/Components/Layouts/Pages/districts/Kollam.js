import React, { Component } from 'react';
import jatayu from '../districts/jatayu.jpg';
import thenmala from '../districts/thenmala.jpg';
import palaruvi from '../districts/palaruvi.jpg';
import district from '../districts/photos/district.jpg'

 class Kollam extends Component {
    render() {
        return (
          <div className="bg_image"
          style={{
            backgroundImage: 'url('+district+')',
            backgroundSize: "cover",
            height: "120vh",
            
          }}>    
<nav className="navbar navbar-light bg-secondary">
  <div className="container-warning">
    <span className="navbar-brand mb-0 h1 text-light"><h3>Kollam Attractions</h3></span>
  </div>
</nav>
<br/>
<div class='container'>
<blockquote class="blockquote text-secondary">
Kollam is a southern district of Kerala, located 70 km north of the state’s capital Thiruvananthapuram. Kollam is one of the more densely peopled districts of India.
    </blockquote>
<br/>
<br/>

    
    <nav class="navbar navbar-light bg-secondary">
  <div class="container-warning">
    <span class="navbar-brand mb-0 h1 text-light"> Tourism </span>
  </div>
</nav>

      <div class="container">
      <div class="row my-1">
      <div className="card" style={{ width: '15rem'}}>
      <img src={jatayu} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
      <div className="card-body">
      <blockquote className="blockquote text-secondary">
         Jatayu Adventure Center
        </blockquote>
      </div>
      </div>

      <div className="card" style={{ width: '15rem'}}>
         <img src={thenmala} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
         <div className="card-body">
         <blockquote className="blockquote text-secondary">
           Thenmala Eco-Tourism
        </blockquote>
        </div>
         </div>

         <div className="card" style={{ width: '15rem'}}>
         <img src={palaruvi} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
         <div className="card-body">
         <blockquote className="blockquote text-secondary">
           Paalaruvi Waterfalls
        </blockquote>
        </div>
         </div>

</div>
</div>
</div>   
</div>        
            
            
        )
    }
}
export default Kollam;