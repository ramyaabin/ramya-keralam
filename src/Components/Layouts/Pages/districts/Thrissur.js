import React, { Component } from 'react';
import athirapilly from '../districts/photos/athirapilly.jpg';
import charpafalls from '../districts/photos/charpafalls.jpg';
import chavakkad from '../districts/photos/chavakkad.jpg';
import chettuva from '../districts/photos/chettuva.jpg';
import chimmony from '../districts/photos/chimmony.jpg';
import marottichal from '../districts/photos/marottichal.jpg';
import peechi from '../districts/photos/peechi.jpg';
import poomaladam from '../districts/photos/poomaladam.jpg';
import sneha from '../districts/photos/sneha.jpg';
import vazhachal from '../districts/photos/vazhachal.jpg';
import district from '../districts/photos/district.jpg'
 

 class Thrissur extends Component {
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
                <span className="navbar-brand mb-0 h1 text-light"><h3>Thrissur Attractions</h3></span>
              </div>
            </nav>
            <br/>
            <div class='container'>
            <blockquote class="blockquote text-secondary">
            Thrissur is known as the cultural capital of Kerala, and the land of Poorams.
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
                  <img src={chimmony} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote text-secondary">
                  Chimmony Wildlife Sanctuary
                    </blockquote>
                  </div>
                  </div>
                  

                  
                  <div className="card" style={{ width: '15rem'}}>
                  <img src={peechi} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote  text-secondary">
                    Peechi-Vazhani Wildlife Sanctuary
                 </blockquote>
                  </div>
                  </div>
            
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={chavakkad} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote  text-secondary">
                     Chavakkad Beach
                    </blockquote>
                    </div>
                     </div>
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={chettuva} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote  text-secondary">
                     Chettuva Backwater
                    </blockquote>
                    </div>
                     </div>
  
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={sneha} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote  text-secondary">
                     Snehatheeram Beach
                    </blockquote>
                    </div>
                     </div>
  
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={athirapilly} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote  text-secondary ">
                     Athirappilly Falls
                    </blockquote>
                    </div>
                     </div>

                     <div className="card" style={{ width: '15rem'}}>
                     <img src={charpafalls} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote  text-secondary">
                     Charpa Falls
                    </blockquote>
                    </div>
                     </div>

                     <div className="card" style={{ width: '15rem'}}>
                     <img src={vazhachal} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Vazhachal Falls
                    </blockquote>
                    </div>
                     </div>

                     <div className="card" style={{ width: '15rem'}}>
                     <img src={marottichal} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Marottichal
                    </blockquote>
                    </div>
                     </div>

                     <div className="card" style={{ width: '15rem'}}>
                     <img src={poomaladam} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Poomala Dam
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
export default Thrissur;