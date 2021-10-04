import React, { Component } from 'react';
import idukkidam from '../districts/photos/idukkidam.jpg';
import kulamavudam from '../districts/photos/kulamavudam.jpg';
import munnar from '../districts/photos/munnar.jpg';
import hillviewpark from '../districts/photos/hillviewpark.jpg';
import periyartiger from '../districts/photos/periyartiger.jpg';
import teamuseum from '../districts/photos/teamuseum.jpg';
import district from '../districts/photos/district.jpg'

 class Idukki extends Component {
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
                <span className="navbar-brand mb-0 h1 text-light"><h3>Idukki Attractions</h3></span>
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
                  <img src={idukkidam} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote text-secondary">
                     Idukki Dam
                    </blockquote>
                  </div>
                  </div>
                  

                  
                  <div className="card" style={{ width: '15rem'}}>
                  <img src={kulamavudam} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote text-secondary">
                     Kulamavu Dam
                    </blockquote>
                  </div>
                  </div>
            
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={munnar} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Munnar
                    </blockquote>
                    </div>
                     </div>
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={hillviewpark} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                       Hill View Park Idukki
                    </blockquote>
                    </div>
                     </div>
  
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={periyartiger} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Periyar National Park and Wildlife Sanctuary
                    </blockquote>
                    </div>
                     </div>
  
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={teamuseum}className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                       Kannan Devan Tea Plantation Company Tea Museum
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
export default Idukki;