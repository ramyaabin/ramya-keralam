import React, { Component } from 'react';
import  amaradwaterfall from '../districts/photos/amaradwaterfall.jpg';
import aripara from '../districts/photos/aripara.jpg';
import parapally from '../districts/photos/parapally.jpg';
import  kozhikodebeach from '../districts/photos/kozhikodebeach.jpg';
import district from '../districts/photos/district.jpg'


 class Kozhikode extends Component {
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
                <span className="navbar-brand mb-0 h1 text-light"><h3>Kozhikode Attractions</h3></span>
              </div>
            </nav>
            <br/>
            <div class='container'>
            <blockquote class="blockquote text-secondary">
            Kozhikode is an Indian city and the second-largest metropolitan city in the State of Kerala.Kozhikode is the third largest city of Kerala.
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
                  <img src={amaradwaterfall} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote text-secondary">
                  Amarad Waterfalls
                    </blockquote>
                  </div>
                  </div>
                  

                  
                  <div className="card" style={{ width: '15rem'}}>
                  <img src={parapally} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote text-secondary">
                    Parapalli Beach
                 </blockquote>
                  </div>
                  </div>
            
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={aripara} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Aripara Waterfalls
                    </blockquote>
                    </div>
                     </div>
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={kozhikodebeach} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Kozhikode Beach
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
export default Kozhikode;