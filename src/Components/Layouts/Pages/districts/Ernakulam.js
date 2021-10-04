import React, { Component } from 'react';
import folklore from '../districts/photos/folklore.jpg';
import cherai from '../districts/photos/cherai.jpg';
import bhootathankettu from '../districts/photos/bhootathankettu.jpg';
import thattekad from '../districts/photos/thattekad.jpg';
import hillpalace from '../districts/photos/hillpalace.jpg';
import district from '../districts/photos/district.jpg'


 class Ernakulam extends Component {
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
                <span className="navbar-brand mb-0 h1 text-light"><h3>Ernakulam Attractions</h3></span>
              </div>
            </nav>
            <br/>

            <div class='container'>
            <blockquote class="blockquote text-secondary">
            Kerala’s nature rich area with the land of massive mountains, green valleys and splendid streams located in the southern portion of Kerala .
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
                  <img src={folklore} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className=" blockquote text-secondary">
                     Folklore Museum
                    </blockquote>
                  </div>
                  </div>
                  

                  
                  <div className="card" style={{ width: '15rem'}}>
                  <img src={cherai} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote text-secondary">
                     Cherai Beach
                    </blockquote>
                  </div>
                  </div>
            
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={hillpalace} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Hill Palace Museum
                    </blockquote>
                    </div>
                     </div>
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={thattekad} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Thattekad Bird Sanctuary
                    </blockquote>
                    </div>
                     </div>
  
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={bhootathankettu} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                      Bhoothathankettu Ecotourism
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
export default Ernakulam;