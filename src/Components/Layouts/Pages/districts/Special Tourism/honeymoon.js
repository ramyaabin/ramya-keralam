import React, { Component } from 'react';
import romance from '../Aventure-tourism/romance.jpg'

 class honeymoon extends Component {
    render() {
        return (
            <div>

            <div className= "bg_image"
            style={{
              backgroundImage: 'url('+romance+')',
              backgroundSize: "cover",
              height: "170vh",
            }}>
                <div class='container'>
<br/>
                <blockquote class="blockquote text-light" ><h2>New Journey Begins here!!</h2> </blockquote>

            
            <br/>
            <br/>
                
                <blockquote class="blockquote text-light" ><h4>Journey through ups and downs, grass and stones, hot and cold "Standing together means - Made for each other"</h4> </blockquote>
                <blockquote class="blockquote text-justify text-light">
               
                            Get closer to each other while roaming through Kerala’s most magical honeymoon destination and 
                            the many ways to fall in love.<br/> Spend nights in tree houses and houseboats. Spend time together 
                            around  velvet slopes of a tea hill and disclose your dreams.<br/> Walk through paddy field holding 
                            hands together experiencing life as it was meant to be.
                </blockquote>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>




             
           

                <div class="card" style={{width: '30rem'}}>
                <ul class="list-group list-group-flush">
                    <div class="card-header bg-warning">
                    Popular Honeymoon Destinations
                    </div>
                    <li className="list-group-item list-group-item-warning">Munnar Hill Stations</li>
                    <li className="list-group-item list-group-item-warning">Alleppey Backwaters</li>
                    <li className="list-group-item list-group-item-warning">Wayanad Chembra Peak</li>
                    <li className="list-group-item list-group-item-warning">Thekady Periyar Lake and Wildlife Sanctuary</li>
                    <li className="list-group-item list-group-item-warning">Bekal Fort and Beach</li>
                    <li className="list-group-item list-group-item-warning">Kumarakom Bird Sanctuary</li>
                    <li className="list-group-item list-group-item-warning">Marayoor</li>
                    <li className="list-group-item list-group-item-warning">Vagamon</li>
                    <li className="list-group-item list-group-item-warning">Kuttikanam</li>
                    <li className="list-group-item list-group-item-warning">Peermedu Hill Station</li>
                    <li className="list-group-item list-group-item-warning">Athirappilly</li>
                </ul> 
                </div>  
                </div> 
                </div>
                </div>
            
                
                
              
        
        )
    }
}
export default honeymoon;