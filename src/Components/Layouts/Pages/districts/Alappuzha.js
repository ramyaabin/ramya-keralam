import React, { Component } from 'react'
import houseboat from '../districts/houseboat.jpg';
import bayisland from '../districts/bayisland.jpg';
import kayaking from '../districts/kayaking.jpg';
import krishnapuram from '../districts/krishnapuram.jpg';
import marari from '../districts/marari.jpg';
import pathiramanal from '../districts/pathiramanal.jpg';
import vembanad from '../districts/vembanad.jpg';
import coirmuseum from '../districts/coirmuseum.jpg';
import district from '../districts/photos/district.jpg'



 class Alappuzha extends Component {
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
              <span className="navbar-brand mb-0 h1 text-light"><h3>Alappuzha Attractions</h3></span>
            </div>
          </nav>
          <br/>
          <div class='container'>
          <blockquote class="blockquote text-secondary">
          Backwater tourism destinations in God's Own Country!!
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
                <img src={houseboat} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                <div className="card-body">
                <blockquote className="blockquote text-secondary">
                   Alappuzha House Boat
                  </blockquote>
                </div>
                </div>
          
                <div className="card" style={{ width: '15rem'}}>
                   <img src={bayisland} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                   <div className="card-body">
                   <blockquote className="blockquote text-secondary">
                    Bay Island
                  </blockquote>
                  </div>
                   </div>
          
                   <div className="card" style={{ width: '15rem'}}>
                   <img src={kayaking} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                   <div className="card-body">
                   <blockquote className="blockquote text-secondary">
                     Kayaking
                  </blockquote>
                  </div>
                   </div>
          
                   <div className="card" style={{ width: '15rem'}}>
                   <img src={krishnapuram} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                   <div className="card-body">
                   <blockquote className="blockquote text-secondary">
                     Krishnapuram Palace
                  </blockquote>
                  </div>
                   </div>

                   <div className="card" style={{ width: '15rem'}}>
                   <img src={marari} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                   <div className="card-body">
                   <blockquote className="blockquote text-secondary">
                     Marari Beach
                  </blockquote>
                  </div>
                   </div>
                  

                   <div className="card" style={{ width: '15rem'}}>
                   <img src={pathiramanal} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                   <div className="card-body">
                   <blockquote className="blockquote text-secondary">
                     Pathiramanal Island
                  </blockquote>
                  </div>
                   </div>

                   <div className="card" style={{ width: '15rem'}}>
                   <img src={vembanad} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                   <div className="card-body">
                   <blockquote className="blockquote text-secondary">
                     Vembanad Lake
                  </blockquote>
                  </div>
                   </div>

                   <div className="card" style={{ width: '15rem'}}>
                   <img src={coirmuseum} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                   <div className="card-body">
                   <blockquote className="blockquote text-secondary">
                     Coir Museum
                  </blockquote>
                  </div>
                   </div>
          
          </div>
          </div>
          </div> 
          </div>
          
        );
    }
}
export default Alappuzha;