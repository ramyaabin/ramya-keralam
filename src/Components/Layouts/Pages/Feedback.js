import React, { Component } from 'react';
import feed from '../Pages/feed.jpg';
import {Link} from 'react-router-dom';


class Feedback extends Component {
    render() {
        return (
          <div className="bg_image"
          style={{
            backgroundImage: 'url('+feed+')',
            backgroundSize: "cover",
            height: "180vh",
            
          }}>
            <br/>
            <br/>
            <br/>
            <br/>

                             <div class="container">
                             <blockquote class="blockquote text-justify text-secondary"><center><h2> Acknowledgement</h2></center></blockquote>   
                            <blockquote class="blockquote text-justify text-secondary">
                            <b>I myself Ramya Mercy Rajan, would like to express my special thanks of gratitude to one and all who spend their precious time on going through my website. This website has been created for the purpose of building a website project as a part of learning Web Development. Special thanks to YouTube vloggers especially Yes Tech Media and Programming with Mosh who in fact helped me to make my dream come true. I would highly recommend the above-mentioned YouTube vloggers and education platform Coursera for enhancing the knowledge in Web Development and programming. The frontend development of this project was done in React and the backend development will be done soon, and I have chosen Django for Backend development. Where there is a will there is a way. I am not from the software background or computer science background. All I had is the basic knowledge of Computer Application at my high school and obviously yes, passion and determination to learn programming and my first step towards it is Web development.
                            </b>
                            </blockquote>
                           


              
                            <blockquote class="blockquote text-justify text-secondary">
              <h4><center>Your suggestions are highly appreciated! <br/>Please find my email id from Contact me information from Footer</center></h4>
              <br/>
              </blockquote>
              <div>
              <section className="my-5 py-5">
                <div className="container text-secondary">
                  <div className="well well-sm">
                    <h3> <strong>Location</strong></h3>
                    </div>
                <div className="row">
                  <div className="col-md-7">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.8976873782885!2d55.39910401448728!3d25.3412140320624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bd8f3a1e367%3A0x7e36f7c285843e03!2sAl%20Jazeera%20Tower%20-%20My%20Home%20Sharjah!5e0!3m2!1sen!2sae!4v1632656636523!5m2!1sen!2sae"style={{ border:'0',width:'100%', height:'315px', frameborder:'0'}}allowFullScreen/>
                  
                </div>
                <div className="col-md-5">
                  <h4><strong>Contact us</strong></h4>
                  <form>
                  <div className='form-group'>
                      <input type='name' className='form-control' placeholder="Name"/>
                    </div>

                    <div className='form-group'>
                      <input type='email' className='form-control' placeholder="Email"/>
                    </div>

                    <div className='form-group'>
                      <input type='phone' className='form-control' placeholder="Phone"/>
                      </div>
                      <textarea className="form-control" cols="30" rows="3" placeholder="Message"></textarea>
                    
                  <Link className= "btn btn-outline-success text-uppercase mt-1">
                    <i className="fab fa-telegram-plane" aria-hidden="true"/>
                    &nbsp;Send
                  </Link>
                  </form>
                </div>

</div></div>
              </section>
            </div>

        









            </div>
            
            
    






</div>

        );
    }
}
export default Feedback;


