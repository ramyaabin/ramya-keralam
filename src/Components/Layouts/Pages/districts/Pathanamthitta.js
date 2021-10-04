import React, { Component } from 'react';
import kakki from '../districts/kakki.jpg';
import perumthenaruvi from '../districts/perumthenaruvi.jpg';
import gavi from '../districts/gavi.jpg';
import district from '../districts/photos/district.jpg'

 class Pathanamthitta extends Component {
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
    <span className="navbar-brand mb-0 h1 text-light"><h3>Pathanamthitta Attractions</h3></span>
  </div>
</nav>
<br/>
<div class='container'>
<blockquote class="blockquote text-secondary">
Pathanamthitta is a municipality situated in the Central Travancore region in the state of Kerala, India, spread over an area of 23.50 km².
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
      <img src={kakki} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
      <div className="card-body">
      <blockquote className="blockquote text-secondary">
         Kakki
        </blockquote>
      </div>
      </div>



         <div className="card" style={{ width: '15rem'}}>
         <img src={perumthenaruvi} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
         <div className="card-body">
         <blockquote className="blockquote text-secondary">
           Perumthenaruvi
        </blockquote>
        </div>
         </div>

         <div className="card" style={{ width: '15rem'}}>
         <img src={gavi} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
         <div className="card-body">
         <blockquote className="blockquote text-secondary">
           Gavi
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
export default Pathanamthitta;