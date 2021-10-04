import React, { Component } from 'react';
import resorts from '../Pages/resorts.jpg'
import ayurvedaresort from '../Pages/ayurvedaresort.jpg'
import beachresort from '../Pages/beachresort.jpg'
import cavehouse from '../Pages/cavehouse.jpg'
import rainforestresort from '../Pages/rainforestresort.jpg'
import tree from '../Pages/tree.jpg'
import islandresort from '../Pages/islandresort.jpg'
import acco from '../Pages/acco.jpg'

class Accomodation extends Component {
    render() {
        return (
<div >
 

 <img src={resorts} class="d-block w-100" height="700" alt="..."></img>
 


<div className= "bg_image"
style={{
  backgroundImage: 'url('+acco+')',
  backgroundSize: "cover",
  height: "580vh",
}}>
    
     
     <div className ="card border-success mb-3" style={{width: '50rem'}}>
         <div  className= "bg_image"
style={{
  backgroundImage: 'url('+acco+')',
  backgroundSize: "cover",
  height: "520vh",
}}>


    <div class='container'>
    <h3 className="card-title text-center"><b>Relish your stay in a tranquil environment!!</b></h3>
    <li class="list-group-item active bg-info text-light" aria-current="true"><h3><center>Speciality Accomodations of Kerala</center></h3></li>
      
           

             <blockquote class="blockquote">
             <h4><b>Cave House</b></h4>

             <img src={cavehouse} class="d-block w-30" height="200" alt="..."></img>
             <br/>
             
             <ul class="list-group">
             <li class="list-group-item active bg-info text-light" aria-current="true">Popular Cave Houses</li>
             <li class="list-group-item list-group-item-info">Carmelia Haven Resort Cave House</li>
             <li class="list-group-item list-group-item-info">Ela Blooms Wayanad Cave House</li>
             <li class="list-group-item list-group-item-info">Kanthalloor Cave House</li>
             <li class="list-group-item list-group-item-info">Kedara Village Cave House</li>
             <li class="list-group-item list-group-item-info">Foggy Knolls Resort Cave House</li>
             </ul>        
             </blockquote>
             <br/>
             <blockquote class="blockquote">
               <h4> <b> Tree House</b></h4>

                 <img src={tree} class="d-block w-30" height="200" alt="..."></img>
                  <br/>
                <ul class="list-group">
                <li class="list-group-item active bg-info text-light" aria-current="true">Popular Tree Houses</li>
                <li class="list-group-item list-group-item-info">Marmalade Spring</li>
                <li class="list-group-item list-group-item-info">Vythiri Tree House</li>
                <li class="list-group-item list-group-item-info"> Rangerwood Nature Castle Machan Treehouse</li>
                <li class="list-group-item list-group-item-info"> Tranquil Resort Wayanad Treehouse</li>
                <li class="list-group-item list-group-item-info">Dreamcatcher Resort Munnar Treehouse Honeymoon</li>
                <li class="list-group-item list-group-item-info">Tree House at Ela Ecoland Munnar</li>
                </ul>    
             </blockquote>
             <br/>

             <blockquote class="blockquote">
             <h4><b>Ayurveda Resorts </b></h4>
             <img src={ayurvedaresort} class="d-block w-30" height="200" alt="..."></img>
               <br/>   
                <ul class="list-group">
                <li class="list-group-item active bg-info text-light" aria-current="true">Popular Ayurveda Resorts </li>
                <li class="list-group-item list-group-item-info">Shina Shiva Ayurvedic Resort, Thiruvananthapuram</li>
                <li class="list-group-item list-group-item-info">Perumbayil Ayurveda Mana, Trichur</li>
                <li class="list-group-item list-group-item-info">Sarovaram Ayurvedic Health Center, Kollam</li>
                <li class="list-group-item list-group-item-info">Carnoustie Ayurveda and Wellness Resort, Mararikulam</li>
                <li class="list-group-item list-group-item-info">The Athreya Ayurvedic Resort, Kottayam</li>
                <li class="list-group-item list-group-item-info">Kairali - The Ayurvedic Healing Village, Palakkad</li>
                </ul>    
             </blockquote>
             <br/>

             <blockquote class="blockquote">
            <h4><b>Rainforest Resorts</b></h4>
             <img src={rainforestresort} class="d-block w-30" height="200" alt="..."></img>
                  <br/>
                <ul class="list-group">
                <li class="list-group-item active bg-info text-light" aria-current="true">Popular Rainforest Resorts</li>
                <li class="list-group-item list-group-item-info">Vythiri Resort Wayanad</li>
                <li class="list-group-item list-group-item-info">Munnar Tea Country Resort</li>
                <li class="list-group-item list-group-item-info">Dream Catcher Plantation Resort</li>
                <li class="list-group-item list-group-item-info">Bracknell Forest Resort</li>
                <li class="list-group-item list-group-item-info">MangoMeadows Agricultural Theme Park</li>
                <li class="list-group-item list-group-item-info">Rainforest Ayur County Resort Kottayam</li>
                <li class="list-group-item list-group-item-info">MangoMeadows Agricultural Theme Park</li>
                </ul>    
             </blockquote>
             <br/>
             <blockquote class="blockquote">
             <h4><b>Island Resorts</b></h4>
             <img src={islandresort} class="d-block w-30" height="200" alt="..."></img>
                  
                <ul class="list-group">
                <li class="list-group-item active bg-info text-light" aria-current="true">Popular Island Resorts</li>
                <li class="list-group-item list-group-item-info">Poovar Island Resort</li>
                <li class="list-group-item list-group-item-info">Coconut Island Resort </li>
                <li class="list-group-item list-group-item-info">Munroe Island Lake Resort</li>
                <li class="list-group-item list-group-item-info">Bracknell Forest Resort</li>
                <li class="list-group-item list-group-item-info">Estuary Island Resort</li>
                </ul>    
             </blockquote>
             <br/>
             <blockquote class="blockquote">
             <h4><b>Beach Resorts</b></h4>
             <img src={beachresort} class="d-block w-30" height="200" alt="..."></img>
                 <br/> 
                <ul class="list-group">
                <li class="list-group-item active bg-info text-light" aria-current="true">Popular Beach Resorts</li>
                <li class="list-group-item list-group-item-info">Cherai Beach Resorts</li>
                <li class="list-group-item list-group-item-info">B'Canti Boutique Beach Resort Varkala </li>
                <li class="list-group-item list-group-item-info">The Travancore Heritage Beach Resort</li>
                <li class="list-group-item list-group-item-info">Marari Beach Resort</li>
                </ul>    
             </blockquote> 
              

                      
              </div>
   </div>  
 </div>
 </div>
</div>
 
        );
    }
}

export default Accomodation;