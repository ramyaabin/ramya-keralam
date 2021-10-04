import React, { Component } from 'react'
import tippu from '../districts/photos/tippu.jpg';
import deerpark from '../districts/photos/deerpark.jpg';
import Parambikulam from '../districts/photos/Parambikulam.jpg';
import silentvalley from '../districts/photos/silentvalley.jpg';
import meenvallam from '../districts/photos/meenvallam.jpg';
import dhoni from '../districts/photos/dhoni.jpg';
import nelliyampathy from '../districts/photos/nelliyampathy.jpg';
import choolanur from '../districts/photos/choolanur.jpg';
import district from '../districts/photos/district.jpg'

 class Palakkad extends Component {
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
                <span className="navbar-brand mb-0 h1 text-light"><h3>Palakkad Attractions</h3></span>
              </div>
            </nav>
            <br/>
            <div class='container'>
            <blockquote class="blockquote text-secondary">
            Palakkad is rightfully known as the Gateway of Kerala, giving the rest of India access to the State. 
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
                  <img src={tippu} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote text-secondary">
                  Tippu Sulthan Fort
                    </blockquote>
                  </div>
                  </div>
                  

                  
                  <div className="card" style={{ width: '15rem'}}>
                  <img src={nelliyampathy} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote  text-secondary">
                    Nelliyampathy Hill Station
                 </blockquote>
                  </div>
                  </div>
            
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={dhoni} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote  text-secondary">
                     Dhoni Waterfalls
                    </blockquote>
                    </div>
                     </div>
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={meenvallam} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote  text-secondary">
                     Meenvallam Waterfalls
                    </blockquote>
                    </div>
                     </div>
  
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={choolanur} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote  text-secondary ">
                    Choolanur Peacock Sanctuary
                    </blockquote>
                    </div>
                     </div>
  
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={Parambikulam} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote  text-secondary ">
                     Parambikulam Wildlife Sanctuary
                    </blockquote>
                    </div>
                     </div>

                     <div className="card" style={{ width: '15rem'}}>
                     <img src={silentvalley} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote  text-secondary ">
                     Silent Valley
                    </blockquote>
                    </div>
                     </div>

                     <div className="card" style={{ width: '15rem'}}>
                     <img src={deerpark} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote  text-secondary ">
                     Deer Park
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
export default Palakkad;