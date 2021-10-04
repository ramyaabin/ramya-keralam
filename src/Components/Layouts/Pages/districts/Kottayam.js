import React, { Component } from 'react'
import aruvikkuzhi from '../districts/aruvikkuzhi.jpg';
import ilavee from '../districts/ilavee.jpg';
import kurishumala from '../districts/ilavee.jpg';
import bharananganam from '../districts/bharananganam.jpg';
import Poonjarpalace from '../districts/Poonjarpalace.jpg';
import vagamonhillstation from '../districts/vagamonhillstation.jpg';
import vazhikkadavuhillstation from '../districts/vazhikkadavuhillstation.jpg';
import kumarakam from '../districts/kumarakam.jpg';
import district from '../districts/photos/district.jpg'

 class Kottayam extends Component {
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
                <span className="navbar-brand mb-0 h1 text-light"><h3>Kottayam Attractions</h3></span>
              </div>
            </nav>
            <br/>
            <div class='container'>
            <blockquote class="blockquote text-secondary">
            Kottayam is  bordered by the lofty Western Ghats on the east and the Vembanad Lake and paddy fields of Kuttanad on the west. Kuttanad is blessed with serene backwater stretches, lush paddy fields, hills and hillocks, rubber plantations and many more attractions.
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
                  <img src={aruvikkuzhi} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote text-secondary">
                     Aruvikkuzhi Waterfalls
                    </blockquote>
                  </div>
                  </div>
                  

                  
                  <div className="card" style={{ width: '15rem'}}>
                  <img src={bharananganam} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                  <div className="card-body">
                  <blockquote className="blockquote text-secondary">
                     Bharananganam Church
                    </blockquote>
                  </div>
                  </div>
            
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={ilavee} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                     Ilaveezhapoonchira Melukavu
                    </blockquote>
                    </div>
                     </div>
            
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={kurishumala} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                       Kurishumala Pilgrim Center
                    </blockquote>
                    </div>
                     </div>
  
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={Poonjarpalace} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                       Poonjar Palace
                    </blockquote>
                    </div>
                     </div>
  
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={vagamonhillstation}className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                       Vagamon Hillstation
                    </blockquote>
                    </div>
                     </div>
  
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={vazhikkadavuhillstation} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                       Vazhikkadavu Hillstation
                    </blockquote>
                    </div>
                     </div>
  
                     <div className="card" style={{ width: '15rem'}}>
                     <img src={kumarakam} className="card-img-top" class="d-block w-20" height="150" alt="..."/>
                     <div className="card-body">
                     <blockquote className="blockquote text-secondary">
                      Kumarakom Lake Resort
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
export default Kottayam;