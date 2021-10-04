import React, { Component } from 'react';
import trekking from '../Aventure-tourism/trekking.jpg'
import tree from '../Aventure-tourism/tree.jpg'
import treeh from '../Aventure-tourism/treeh.jpg'

 class trekandcamp extends Component {
    render() {
        return (
            <div>
 
            
            
            <img src={trekking} class="d-block w-100" height="600" alt="..."></img>

            <div className= "bg_image"
            style={{
              backgroundImage: 'url('+tree+')',
              backgroundSize: "cover",
              height: "135vh",
            }}>
        
                
                <div className ="card border-secondary mb-3" style={{width: '50rem'}}>
                <div className= "bg_image"
            style={{
              backgroundImage: 'url('+tree+')',
              backgroundSize: "cover",
              height: "125vh",
            }}>
              <div class='container'>
                <div class="card-header text-dark"><blockquote class="blockquote"><h3>Explore Nature</h3></blockquote></div>
                 <div class="card-body text-dark">
                    <h5 className="card-title text-justify">Grab your chance to experience unique characteristics and features of Adventure Tourism</h5>
                        <p className="card-text"><blockquote class="blockquote text-justify">
                        Kerala is richly blessed with the lush tropical rainforests; picturesque countryside’s, green hills, spice plantations, and beautiful grasslands. 
                        Unquestionably this is going to an adventurous paradise for people who love to explore the world of trekking and camping.  Have a pleasant time 
                        around Anamudi and Agasthyakoodam and Chembra, the three highest peaks in Kerala or through Parambikkulam, which shelters the world's first ever 
                        scientifically managed teak plantation and spot tigers and mysteriously unusual species of birds.Ride on elephants, get showered in rain and enjoy 
                        nature’s beautiful sounds of chirping birds and insects, frogs dive in to water splashing water on you. Take this as the best opportunity to enjoy 
                        on the lap of Mother Earth.
                </blockquote></p>
                
                <blockquote class="blockquote">
                <ul class="list-group">
                <li class="list-group-item active bg-secondary text-light" aria-current="true">Popular Trekking and Camping Destinations</li>
                <li class="list-group-item list-group-item-secondary">Idukki</li>
                <li class="list-group-item list-group-item-secondary">Wayanad</li>
                <li class="list-group-item list-group-item-secondary">Kozhikode</li>
                <li class="list-group-item list-group-item-secondary">Munnar</li>
                <li class="list-group-item list-group-item-secondary">Palakkad</li>
                <li class="list-group-item list-group-item-secondary">Trivandrum</li>
                </ul>    
                    
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
export default trekandcamp;