import React, { Component } from 'react';

import water from '../Aventure-tourism/water.jpg'

 class watersports extends Component {
    render() {
        return (
            <div className= "bg_image"
            style={{
              backgroundImage: 'url('+water+')',
              backgroundSize: "cover",
              height: "170vh",
            }}>
              <br/>
              <br/>
                <div class="container-sm ">
              
                <blockquote class="blockquote text-light" ><h2>Most Enthralling water sports</h2> </blockquote>
                <br/>
                <blockquote class="blockquote text- text-light"> <h3 >Exciting opportunities of Water Sports Destinations in God's Own Country </h3></blockquote>
                    <br/>
                       <br/>
                       
                        <blockquote class="blockquote text- text-light text-justify">
                        Many enthusiastic tourists and natives are seen to enjoy the highly acclaimed water sports in Kerala Canoeing, Kayaking, Sailing, water-skiing, 
                        white-water rafting, wind surfing. Canoeing and Kayaking can be enjoyed along the serene backwaters, which is the venue for the spectacular 
                        snake boat races in Kerala. Catamaran sailing is possible at the beaches of Alappuzha, Varkala and Kovalam. Parasailing is gaining popularity 
                        in Varkala and Alappuzha beaches. For wind surfing, the beaches of Kovalam and Varkala are the best bet, while the backwaters offer great scope 
                        for speed boating and bamboo rafting.</blockquote>
                        
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
              
                <div className="card"style={{ width: '50rem'}}>
                <ul className="list-group list-group-flush">
                <li className="list-group-item active bg-primary text-light" aria-current="true">Popular water sports destinations</li>
                <li className="list-group-item list-group-item-primary">Kayaking - Alappuzha </li>
                <li className="list-group-item list-group-item-primary">Surfing - Varkala Beach, Kovalam Beach, Kappil Beach, Poovar and Tiruchindur</li>
                <li className="list-group-item list-group-item-primary">Rafting - Tejaswini River in Kannur district, Vythiri River in Wayanad, Iruvanjhipuza and Chalipuza rivers in Tusharagiri, and Boothathankettu in Ernakulam</li>
                <li className="list-group-item list-group-item-primary">Catamaran Sailing - Alappuzha, Kovalam and Varkala are three of the most popular catamaran siling destinations in Kerala.</li>
                <li className="list-group-item list-group-item-primary">Bamboo Rafting -  Periyar Lake flowing across Periyar National Park in Thekkady serves as the primal bamboo rafting destinations in Kerala.</li>
                <li className="list-group-item list-group-item-primary">Parasailing -  Varkala, Payyambalam and Alappuzha and indulge in this enthralling water sport in Kerala.</li>
                <li className="list-group-item list-group-item-primary">Snorkelling -  Kovalam Beach and Varkala Beach are the two most ideal snorkelling destinations in Kerala.</li>
                <li className="list-group-item list-group-item-primary">Scuba Diving - Varkala Beach and Cochin are the most preferred scuba diving destinations in Kerala.</li>
                </ul>    
                </div>
              </div>
              </div>
              
              
            
            
            
          
        )
    }
}
export default watersports