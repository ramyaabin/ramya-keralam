import React, { Component } from 'react'
import paithalamala from '../districts/photos/paithalamala.jpeg';
import payyambalam from '../districts/photos/payyambalam.jpg';
import  kannurfort from '../districts/photos/kannurfort.jpg';
import district from '../districts/photos/district.jpg'

class Kannur extends Component {
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
                <span className="navbar-brand mb-0 h1 text-light"><h3>Kannur Attractions</h3></span>
              </div>
            </nav>
          <br/>
            <div class='container'>
            <blockquote class="blockquote text-secondary">
            Kannur district is bounded by the Western Ghats, which forms the border with the state of Karnataka. The Arabian Sea lies to the west.
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
                  <img src={paithalamala} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote text-secondary">
                  Paithalmala
                    </blockquote>
                  </div>
                  </div>
                  

                  
                  <div className="card" style={{ width: '15rem'}}>
                  <img src={payyambalam} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote text-secondary">
                  Payyambalam Beach
                 </blockquote>
                  </div>
                  </div>
            
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={kannurfort} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Kannur Fort
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
export default Kannur;