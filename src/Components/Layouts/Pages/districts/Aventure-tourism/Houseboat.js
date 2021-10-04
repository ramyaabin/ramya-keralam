import React, { Component } from 'react';
import houseboat from '../Aventure-tourism/houseboat.jpg';
import house from '../Aventure-tourism/house.jpg';
 class Houseboat extends Component {
    render() {
        return (
            <div>
 
           
            <img src={houseboat} class="d-block w-100" height="600" alt="..."></img>
            
            <div className= "bg_image"
            style={{
              backgroundImage: 'url('+house+')',
              backgroundSize: "cover",
              height: "300vh",
            }}>
                
                <div className ="card border-success mb-3" style={{width: '50rem'}}>
                <div className= "bg_image"
            style={{
              backgroundImage: 'url('+house+')',
              backgroundSize: "cover",
              height: "250vh",
            }}>
                <div class='container'>
                <div class="card-header text-secondary"><blockquote class="blockquote"><h3>History of Kettuvallam</h3></blockquote></div>
                 <div class="card-body text-secondary">
                    <h5 className="card-title">Art of Uru</h5>
                        <p className="card-text"><blockquote class="blockquote text-justify">
                Kerala houseboats traditionally known as “Ketuvallam“ in Malayalam which simply means “tied up boat”. Kettuvallam was used as a 
                mode of transportation of goods to the remote areas in Kerala that were surrounded by waters. The freshly produced goods 
                were taken from the villages and to many other areas for the purpose of sales. This made the movement of heavy cargo 
                including spices and rice. After some years, when roads and bridges were made, these houseboats lost their significance. 
                The history of such boats in Kerala goes back to Uru, a large Dhow-type wooden ship made by the carpenters in Beypore, south of Kozhikode port. 
                The art of Uru making in Beypore, on the northern coast of Kerala, is believed to be as old as the beginnings of India’s maritime trade with Mesopotamia.
                The hull of the houseboat is made of wooden planks tied together by ropes of coconut fibres. The common wood used in the making
                 of it is locally called ‘Aanjili’. The roof is made up of bamboo poles and thatched with palm leaves. To prevent the wood from deterioration,
                cashew nut oil which works as an eco-friendly protective varnish, is used to paint the exterior of the boat. Eco friendly interiors 
                like, bamboo mats, coir carpets etc are used inside the houseboats. Houseboats in Kerala became one of the prime attractions in Kerala. 
                The size of the houseboats varies. They have fully furnished interiors, single double or even five bedrooms with sundeck, private balcony,
                 Kitchen and bathrooms. There are different types of houseboats ranging from Standard, Premium, Luxury and even Conference houseboats are available in which,
                  as the name says each one’s facilities differs. There will be a chef, driver and cabin assistant in every houseboat. You can enjoy the beauty 
                  of nature and excellent cuisine in houseboats. The cuisine in houseboats is traditional Kerala dishes with local specialties.Also, there are so
                   many delicious meals made of freshwater fishes, crabs and many seafood specials too. The chef cooks on board, and most often, their meals included
                delicious “Pearl spot fish” (Kerala State Fish) caught straight from the water.
                <br/>
                
                </blockquote></p>
           
                <blockquote class="blockquote">
                <ul class="list-group">
                <li class="list-group-item active bg-danger text-light" aria-current="true">Major Backwaters</li>
                <li class="list-group-item list-group-item-danger">Alleppey Backwaters</li>
                <li class="list-group-item list-group-item-danger">Kochi Backwaters</li>
                <li class="list-group-item list-group-item-danger">Kozhikode Backwaters</li>
                <li class="list-group-item list-group-item-danger">Kollam Backwaters</li>
                <li class="list-group-item list-group-item-danger">Ashtamudi Backwaters</li>
                <li class="list-group-item list-group-item-danger">Kuttanad Backwaters</li>
                <li class="list-group-item list-group-item-danger">Kasargod Backwaters</li>
                <li class="list-group-item list-group-item-danger">Kumarakom Backwaters</li>
                <li class="list-group-item list-group-item-danger">Thiruvallam Backwaters</li>
                <li class="list-group-item list-group-item-danger">Paravur Backwaters</li>
                <li class="list-group-item list-group-item-danger">Kavvayi Backwaters</li>
                <li class="list-group-item list-group-item-danger">Backwater Islands of Kollam</li>
                
                </ul>      
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
export default Houseboat;