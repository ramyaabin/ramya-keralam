import React, { Component } from 'react';
import  kadalundi from '../districts/photos/kadalundi.jpg';
import kodikuthimala from '../districts/photos/kodikuthimala.jpg';
import kumaragiri from '../districts/photos/kumaragiri.jpg';
import miniooty from '../districts/photos/miniooty.jpg';
import nedumkayam from '../districts/photos/nedumkayam.jpg';
import paloorkootta from '../districts/photos/paloorkootta.jpg';
import teakmuseum from '../districts/photos/teakmuseum.jpg';
import district from '../districts/photos/district.jpg'


 class Malappuram extends Component {
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
                <span className="navbar-brand mb-0 h1 text-light"><h3>Malappuram Attractions</h3></span>
              </div>
            </nav>
            <br/>
            <div class='container'>
            <blockquote class="blockquote text-secondary">
            
Malappuram is bounded by the Nilgiris hills on the East and the Arabian Sea on the west,is remarkable for its unique natural beauty.

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
                  <img src={nedumkayam} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote text-secondary">
                  Nedumkayam Rainforest
                    </blockquote>
                  </div>
                  </div>
                  

                  
                  <div className="card" style={{ width: '15rem'}}>
                  <img src={kumaragiri} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote text-secondary">
                    Kumaragiri Farm
                 </blockquote>
                  </div>
                  </div>
            
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={paloorkootta} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Paloor Kootta Waterfalls
                    </blockquote>
                    </div>
                     </div>
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={kadalundi} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Kadalundi Birds Sanctuary
                    </blockquote>
                    </div>
                     </div>
  
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={kodikuthimala} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                    Kodikutthimala
                    </blockquote>
                    </div>
                     </div>
  
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={miniooty} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Mini Ooty
                    </blockquote>
                    </div>
                     </div>

                     <div className="card" style={{ width: '15rem'}}>
                     <img src={teakmuseum} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Teak Museum
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
export default Malappuram;