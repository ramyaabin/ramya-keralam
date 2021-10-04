import React, { Component } from 'react';
import paragliding from '../Aventure-tourism/paragliding.jpg';
import para from '../Aventure-tourism/para.jpg'

 class Paragliding extends Component {
    render() {
        return (
            <div>
 
            
            <img src={paragliding} class="d-block w-100" height="600" alt="..."></img>


            <div className= "bg_image"
            style={{
              backgroundImage: 'url('+para+')',
              backgroundSize: "cover",
              height: "120vh",
            }}>
                
                <div className ="card border-warning mb-3" style={{width: '50rem'}}>
                <div className= "bg_image"
            style={{
              backgroundImage: 'url('+para+')',
              backgroundSize: "cover",
              height: "98vh",
            }}>
                <div class='container'>
                <div class="card-header text-dark"><blockquote class="blockquote text-justify"><h3>Floating in the sky is pure joy and ecstasy</h3></blockquote></div>
                 <div class="card-body text-dark">
                    <h5 className="card-title">Experience purity and serenity!!</h5>
                        <p className="card-text"><blockquote class="blockquote text-justify">
                        The Indian State Kerala is blessed with a unique geographical feature have made it a tropical paradise. Serene beaches, 
                        tranquil stretches of emerald backwaters, lush hill stations and exotic wildlife, are just a few of the wonders. The major 
                        area of Kerala is engulfed in rich greenery which always ensures a very calming experience. Bestowed with a pleasant and equable 
                        climate throughout the year, Kerala is not just a beautiful destination it is also beautiful collection of experiences.  So, Kerala  
                        is beautiful but witnessing it from the bird’s eye view certainly sounds more exciting. Kerala provides paragliding experience which means 
                        you will enjoy your paragliding under the supervision of an expert paraglider pilot who will take care of the launch, flight and landing for you.
                </blockquote></p>
                </div>
                <blockquote class="blockquote">
                <ul class="list-group">
                <li class="list-group-item active bg-warning text-dark" aria-current="true">Paragliding Destinations</li>
                <li class="list-group-item list-group-item-warning">Vagamon</li>
                <li class="list-group-item list-group-item-warning">Munnar</li>
                <li class="list-group-item list-group-item-warning">Varkala</li>
                </ul>    
                    
                </blockquote>
                
            </div> 
            </div>   
            </div>
            </div>
            </div>
        )
    }
}
export default Paragliding;