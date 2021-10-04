import React, { Component } from 'react';
import ayurvedam from '../Aventure-tourism/ayurvedam.jpg'
import ayurvedabg from '../Special Tourism/ayurvedabg.jpg'

 class Ayurveda extends Component {
    render() {
        return (
            <div className= "bg_image"
            style={{
              backgroundImage: 'url('+ayurvedabg+')',
              backgroundSize: "cover",
              height: "270vh",
            }}>
              <img src={ayurvedam} class="d-block w-100" height="600" alt="..."></img>

<div class='container'>
 
            
            
        <br/>   
        <br/>
                
                <div className ="card border-success mb-3" style={{width: '50rem'}}>
                    <div className= "bg_image"
                style={{
              backgroundImage: 'url('+ayurvedabg+')',
              backgroundSize: "cover",
              height: "150vh",
            }}>
              
                <div className="card-header text-secondary"><blockquote class="blockquote text-dark">Ayurvedam "Science Of Life"</blockquote></div>
                 <div class="card-body text-secondary">
                    <h5 className="card-title text-dark ">Way of life focused on preventing disease rather than curing it!</h5>
                        <p className="card-text">
                            <blockquote class="blockquote text-dark text-justify">
                            Ayurveda tourism as can be understood from the name is a form of tourism that is Ayurvedic treatment to the tourists. 
                            Ayurvedic treatment in India has been growing at a tremendous rate in recent times because the cost of treatment is not
                            expensive as compared to the other countries of the world. Majority of people from all around the world come to India to 
                            find an effective solution to several their health concerns. Ayurvedic tourism has been long popular in India, but Kerala 
                            is the only state of the country where this form of tourism has been flourishing. Kerala is state in India that has used Ayurveda 
                            as mainstream medicine. Most importantly, the state of Kerala has numerous Ayurvedic medical colleges and hospitals spread throughout 
                            the state. Ayurveda of Kerala is quite popular because of the five prolonged treatment which is termed as panchakarma. This form of 
                            treatment includes the use of medicated oils, milk, Ayurvedic herbs along with a special diet for the purpose of treating various types 
                            of health issues as well as illnesses.
                </blockquote></p>

       
            
      <blockquote class="blockquote">
                <ul class="list-group">
                <li class="list-group-item active bg-dark"  aria-current="true">Ayurvedic Centers</li>
                <li class="list-group-item list-group-item-success">Vedasparsh Ayurveda Center</li>
                <li class="list-group-item list-group-item-success">Kottakal Arya Vaidya Sala</li>
                <li class="list-group-item list-group-item-success">PVA Ayurvedic Multi-speciality Hospital</li>
                <li class="list-group-item list-group-item-success"> Vaidyaratnam Oushadhasala</li>
                <li class="list-group-item list-group-item-success">Anjali Ayurvedic Research Centre</li>
                <li class="list-group-item list-group-item-success">MGS Kalari Chikithsalayalam</li>
                <li class="list-group-item list-group-item-success">Ashtamgam Ayurveda Chikithsalayam</li>
                <li class="list-group-item list-group-item-success">Dhatri Ayurveda Hospital and Panchakarma Center</li>
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
export default Ayurveda;