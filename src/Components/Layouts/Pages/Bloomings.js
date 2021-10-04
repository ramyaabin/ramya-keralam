import React, { Component } from 'react';
import neelakurinji from '../Pages/neelakurinji.jpg';
import atham from '../Pages/atham.jpg'
import kalpathy from '../Pages/kalpathy.jpg'
import pongal from '../Pages/pongal.jpg'
import puthari from '../Pages/puthari.jpg'
import theyyam from '../Pages/theyyam.jpg'
import thrissur from '../Pages/thrissur.jpg'
import christmas from '../Pages/christmas.jpg'
import vallamkali from '../Pages/vallamkali.jpg'
import bloom from '../Pages/bloom.jpg'

class Bloomings extends Component {
    render() {
        return (
          
            <div className= "bg_image"
            style={{
              backgroundImage: 'url('+bloom+')',
              backgroundSize: "cover",
              height: "1200vh",
            }}>
               

        
            
            <img src={neelakurinji} class="d-block w-100" height="700" alt="..."></img>
            
            
           
        
      
                <div className ="card card border-light mb-5"  style={{width: '50rem'}}>
                
                <div className= "bg_image"
            style={{
              backgroundImage: 'url('+bloom+')',
              backgroundSize: "cover",
              height: "900vh",
              
            }}>
                
               <div class='container'>
                <div class="card-header text-secondary bg-success text-light"><blockquote class="blockquote">"Bloomings"</blockquote></div>
                 <div class="card-body text-secondary">
                    <h5 className="card-title">"About Unique Bloomings Of Kerala"</h5>
                        <p className="card-text">
                            <blockquote class="blockquote text-justify">
                                Kerala with its beautiful landscape, culture, valuable medicinal flora and vegetation, 
                                the uniqueness of this land is Kerala is filled with cultural festivals. Irrespective of
                                 religion and beliefs, these festivals are enjoyed by all people. Lets start with special 
                                 blooming of nature. " Once in a blue moon green hills of Munnar transforms into blue mountain 
                                 with the arrival of blue blossoms flowers Neelakurinji (Strobilanthes Kunthiana) " fairytale land during the flowering season of Neelakurinji, 
                                 when the sprawling hills drape themselves in a blue blanket of Neelakurinji blooms.
                                Dwellings occupy much of their habitat. In 2018, Neelakurinji flowered in 
                                Munnar during the season from August to December. Now you can expect the next bloomings in 2030.
                                </blockquote> </p>

                                 

              
            <blockquote class="blockquote">                                   
                <ul class="list-group">
                <li class="list-group-item active bg-success text-light" aria-current="true"><blockquote class="blockquote ">Onam</blockquote></li>
                <img src={atham} class="d-block w-30" height="500" alt="..."></img>

                <li class="list-group-item list-group-item-success text-justify">Onam is the biggest festival in the Indian state of Kerala. 
                Onam Festival falls during the Malayali month of Chingam (Aug - Sep) and marks the homecoming of legendary King 
                Mahabali. Carnival of Onam lasts for ten days and brings out the best of Kerala culture and tradition. Beautifully 
                decorated Pookalam (flower decoration), Sadhya (delicious veg-meals).You can also enjoy breathtaking Snake Boat Race
                 and exotic Kaikottikali dance are some of the most remarkable features of Onam.</li>

                 <img src={vallamkali} class="d-block w-30" height="500" alt="..."></img>
                
                 <li class="list-group-item list-group-item-success">Aranmula Vallamkali – August or September</li>
                 <li class="list-group-item list-group-item-success">President Trophy boat race – 1st November every year on Kollam backwaters</li>
                 <li class="list-group-item list-group-item-success">Chempakulammoolam boat race – June or July</li>
                 <li class="list-group-item list-group-item-success">Payippad Jalotsavam – August or September</li>
                
                |<li class="list-group-item active bg-success text-light" aria-current="true">Thrissur Pooram</li>
                <img src={thrissur} class="d-block w-20" height="700" alt="..."></img>
                <li class="list-group-item list-group-item-success text-justify">Thrissur Pooram is celebrated in three temples; 
                Vadakkunnathan temple, Paramekkavu Devi temple and Thirvambady temple. This festival takes place 
                in April. UNESCO has recognized this festival as one of the most spectacular celebrations in the world.</li>
                <br/>
                <li class="list-group-item active bg-success text-light" aria-current="true">Attukaal Pongal</li>
                <img src={pongal} class="d-block w-20" height="500" alt="..."></img>
                <li class="list-group-item list-group-item-success text-justify"> This festival is recognized by Guinness book of records as the largest women gathering in the world 
                for celebrating a festival. Women will be dressed in traditional attire and wear antique jewelry. Millions of women gather every year 
                in the month of Kumbham around this temple and prepare Pongala (rice cooked with jaggery, ghee, coconut as well as other ingredients) 
                in the open in small pots to please the Goddess Kannaki. Pongala (literally means to boil over) is a ritualistic offering of a sweet dish, 
                consisting of rice porridge, sweet brown molasses, coconut gratings, nuts and raisins. It is done as an offering to the presiding deity of the temple ,
                 the Goddess popularly known as Attukal Amma. Goddess Attukal devi is believed to fulfill their wishes and provide prosperity.</li>
               <br/>
                <li class="list-group-item active bg-success text-light" aria-current="true"> Kalpathi Chariot Festival</li>
                <img src={kalpathy} class="d-block w-30" height="500" alt="..."></img>
                <li class="list-group-item list-group-item-success text-justify">Seven days of the festival, cultural programs are conduced within the temple premises. The cultural 
                programs includes traditional dance and music performances, vedic recitals and many others.The last three days of the celebration attracts 
                thousands of tourists. The devotees and tourists gather to pull the temple chariot through the streets. This festival takes place in the 
                second week of November.</li>
                <br/>
                <li class="list-group-item active bg-success text-light" aria-current="true"> Theyyam Festival</li>
                <img src={theyyam} class="d-block w-30" height="500" alt="..."></img>
                <li class="list-group-item list-group-item-success text-justify">Theyyam festival is a dance festival celebrated every year for six months from November to June. This festival is 
                celebrated at Sri Muthappan Temple of Kannur. Theyyam dance has 400 forms and the dance is famous for unique decorations, dancers’ face paint 
                and appearances.</li>
                <br/>
                <li class="list-group-item active bg-success text-light" aria-current="true"> Puthari</li>
                <img src={puthari} class="d-block w-30" height="500" alt="..."></img>
                <li class="list-group-item list-group-item-success text-justify">This is a harvest festival, which takes place in August or September. This festival is celebrated in Puthari village. 
                People make sweet porridge made with rice and milk.</li>
                <br/>
                <li class="list-group-item active bg-success text-light" aria-current="true">Christmas</li>
                
                <img src={christmas} class="d-block w-30" height="500" alt="..."></img>
                <li class="list-group-item list-group-item-success text-justify">Christmas is a festival to all Christian families in Kerala.Christmas is a festival of happiness and unity where all families get together and celebrate with Christmas songs, bands and loud musics across streets with lights decorated all around.
                 Beach carnival takes place at the Christmas Eve in Kovalam beach. </li>  
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

export default Bloomings;