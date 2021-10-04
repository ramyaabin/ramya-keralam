import React, { Component } from 'react';
import  kanthanpara from '../districts/photos/kanthanpara.jpg';
import edakkalcave from '../districts/photos/edakkalcave.jpg';
import chembrapeak from '../districts/photos/chembrapeak.jpg';
import  kuruvadweep from '../districts/photos/kuruvadweep.jpg';
import  lakkidiviewpoint from '../districts/photos/lakkidiviewpoint.jpg';
import neelimalaviewpoint from '../districts/photos/neelimalaviewpoint.jpg';
import district from '../districts/photos/district.jpg'


 class Wayanad extends Component {
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
                <span className="navbar-brand mb-0 h1 text-light"><h3>Wayanad Attractions</h3></span>
              </div>
            </nav>
            <br/>
            <div class="container">
            <blockquote class="blockquote text-secondary">
           
              Wayanad is blessed with waterfalls, caves, bird-watching sites, flora, fauna and an overall plethora of magnificent sights.
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
                  <img src={kanthanpara} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote text-secondary">
                  Kanthanpara Waterfalls
                    </blockquote>
                  </div>
                  </div>
                  

                  
                  <div className="card" style={{ width: '15rem'}}>
                  <img src={edakkalcave} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote text-secondary">
                   Edakkal Cave
                 </blockquote>
                  </div>
                  </div>
            
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={chembrapeak} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Chembra Peak
                    </blockquote>
                    </div>
                     </div>
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={kuruvadweep} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Kuruvadweep
                    </blockquote>
                    </div>
                     </div>

                     
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={lakkidiviewpoint} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Lakkidi Viewpoint
                    </blockquote>
                    </div>
                     </div>

                     
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={neelimalaviewpoint} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Neelimala Viewpoint
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
export default Wayanad;