import React, { Component } from 'react';
import vilakku from '../Pages/vilakku.jpg';
import ramya2 from '../Pages/ramya2.jpg';
import ramya3 from '../Pages/ramya3.jpg';
import jackfruit from '../Pages/jackfruit.jpg';
import kanikonna from '../Pages/kanikonna.jpg';
import Pearlspot from '../Pages/Pearlspot.jpg';
import hornbill from '../Pages/hornbill.jpg';
import elephant from '../Pages/elephant.jpg';
import tryback from '../Pages/tryback.jpg';
import paddy from '../Pages/paddy.jpg'
import mazha from '../Pages/mazha.jpg'
import kerala from '../Pages/kerala.jpg'



class About extends Component {
    render() {
        return (
            <div> 
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>

  </div>
  <div className="carousel-inner">
  <div className="carousel-item active">

      <img src={vilakku} class="d-block w-100" height="700" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Gods Own Country</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={ramya2} class="d-block w-100" height="700" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Wet Evergreen Rainforests </h5>
      </div>
    </div>
    <div className="carousel-item" >
      <img src={ramya3} class="d-block w-100" height="700" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Evergreen Rainforest</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="bg_image"
            style={{
              backgroundImage: 'url('+tryback+')',
              backgroundSize: "cover",
              height: "350vh",
              
            }}>
<div>
<nav class="navbar navbar-light bg-secondary">
  <div class="container-warning">
    <span class="navbar-brand mb-0 h1 text-light"><h2>  Geography </h2></span>
  </div>
</nav>



<div class="container">
<div class="row my-4">
<div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card" style={{ width: '18rem'}} >
<nav class="navbar navbar-light bg-secondary">
  <div class="container-warning">
    <span class="navbar-brand mb-0 h1 text-light"><h5>  Outline </h5></span>
  </div>
</nav>
<img src={paddy} class="d-block w-20" height="230" alt="..."></img>
<div className="bg_image"
            style={{
              backgroundImage: 'url('+tryback+')',
              backgroundSize: "cover",
              height: "50vh",
              
            }}>
<blockquote class="blockquote">
<figure class="text-center">
<p class="text-light">Kerala is located on India's tropical Malabar Coast.
    Population: 34.63 million (2018)<br/>
    Capital: Thiruvananthapuram<br/>
    Districts: 14<br/>
    Largest District in Kerala: Palakkad<br/>
    Smallest District in Kerala: Alappuzha
    </p>


</figure>
</blockquote>
</div>
</div>
</div>

<div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card" style={{ width: '18rem'}} >
<nav class="navbar navbar-light bg-secondary">
  <div class="container-warning">
    <span class="navbar-brand mb-0 h1 text-light"><h5>  Climate </h5></span>
  </div>
</nav>
<img src={mazha} class="d-block w-20" height="230" alt="..."></img>
<div className="bg_image"
            style={{
              backgroundImage: 'url('+tryback+')',
              backgroundSize: "cover",
              height: "50vh",
              
            }}>
<blockquote class="blockquote">
<figure class="text-center">
<p class="text-light">Considering the geographical features, the climatic condition in Kerala is diverse. Climate of Kerala can be divided into four
Winter, Summer, South-West Monsoon and North-East Monsoon.Although Kerala has rains all year round , it experiences two monsoon seasons: June - August and October to November. 
</p>
</figure>
</blockquote>
</div>
</div>
</div>

<div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card" style={{ width: '18rem'}} >
<nav class="navbar navbar-light bg-secondary">
  <div class="container-warning">
    <span class="navbar-brand mb-0 h1 text-light"><h5>  Kerala State Seal</h5></span>
  </div>
</nav>
<img src={kerala} class="d-block w-20" height="230" alt="..."></img>
<div className="bg_image"
            style={{
              backgroundImage: 'url('+tryback+')',
              backgroundSize: "cover",
              height: "50vh",
              
            }}>
<blockquote class="blockquote">
<figure class="text-center">
<p class="text-light">The emblem portrays two elephants guarding the state and national insignias. The state insignia is the conch-shell of Lord Sri Padmanabha and the national insignia is the Lion Capital of Ashoka</p>
</figure>
</blockquote>
</div>
</div>
</div>

<div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card" style={{ width: '18rem'}} >
<nav class="navbar navbar-light bg-secondary">
  <div class="container-warning">
    <span class="navbar-brand mb-0 h1 text-light"><h5> Kerala State Fruit</h5></span>
  </div>
</nav>
<img src={jackfruit} class="d-block w-20" height="230" alt="..."></img>
<div className="bg_image"
            style={{
              backgroundImage: 'url('+tryback+')',
              backgroundSize: "cover",
              height: "40vh",
              
            }}>
<blockquote class="blockquote">
<figure class="text-center">
<p class="text-light"> Kerala anounced Jackfruit as Kerala State fruit based on a proposal by the Agriculture Department. The 'Kerala jackfruit' is more organic and tasty as it is produced in a very natural way without using any chemical fertilisers or pesticides.</p>
</figure>
</blockquote>
</div>
</div>
</div>



<div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card" style={{ width: '18rem'}} >
<nav class="navbar navbar-light bg-secondary">
  <div class="container-warning">
    <span class="navbar-brand mb-0 h1 text-light"><h5> Kerala State Flower</h5></span>
  </div>
</nav>
<img src={kanikonna} class="d-block w-20" height="230" alt="..."></img>
<div className="bg_image"
            style={{
              backgroundImage: 'url('+tryback+')',
              backgroundSize: "cover",
              height: "40vh",
              
            }}>
<blockquote class="blockquote">
<figure class="text-center">
<p class="text-light"> Kerala's State flower, the 'Kanikonna' or the Indian laburnum, the tree itself is unmistakable when in full bloom, golden-yellow flowers held in droopy chandeliers on completely leafless trees.
</p>
</figure>
</blockquote>
</div>
</div>
</div>

<div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card" style={{ width: '18rem'}} >
<nav class="navbar navbar-light bg-secondary">
  <div class="container-warning">
    <span class="navbar-brand mb-0 h1 text-light"><h5>  Kerala State Fish </h5></span>
  </div>
</nav>
<img src={Pearlspot} class="d-block w-20" height="230" alt="..."></img>
<div className="bg_image"
            style={{
              backgroundImage: 'url('+tryback+')',
              backgroundSize: "cover",
              height: "40vh",
              
            }}>

<blockquote class="blockquote">
<figure class="text-center">
<p class="text-light">The Kerala government has declared pearl spot fish, known as ''karimeen'' in local parlance, as the state fish of 'Gods Own Country'.Pearlspot fish is found in abundance in the fresh water lakes of Kerala.
</p>
</figure>
</blockquote>
</div>
</div>
</div>

<div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card" style={{ width: '18rem'}} >
<nav class="navbar navbar-light bg-secondary">
  <div class="container-warning">
    <span class="navbar-brand mb-0 h1 text-light"><h5> Kerala State Bird</h5></span>
  </div>
</nav>
<img src={hornbill} class="d-block w-20" height="230" alt="..."></img>
<div className="bg_image"
            style={{
              backgroundImage: 'url('+tryback+')',
              backgroundSize: "cover",
              height: "40vh",
              
            }}>
<blockquote class="blockquote">
<figure class="text-center">
<p class="text-light">Greater Indian Hornbill, is the largest member of the hornbill family. It is found in the evergreen forest of Kerala.
</p>

</figure>
</blockquote>
</div>
</div>
</div>

<div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card" style={{ width: '18rem'}} >
<nav class="navbar navbar-light bg-secondary">
  <div class="container-warning">
    <span class="navbar-brand mb-0 h1 text-light"><h5> Kerala State Animal </h5></span>
  </div>
</nav>
<img src={elephant} class="d-block w-20" height="230" alt="..."></img>
<div className="bg_image"
            style={{
              backgroundImage: 'url('+tryback+')',
              backgroundSize: "cover",
              height: "40vh",
              
            }}>
<blockquote class="blockquote">
<figure class="text-center">
<p class="text-light">Kerala has more than seven hundred domesticated elephants. Most of them are owned by temples and individuals. As the State Animal, the elephant is featured on the emblem of the Government of Kerala state.</p>
</figure>
</blockquote>
</div>
</div>
<br/>

</div>


</div>

</div>
</div>

</div>
</div>




             
        );
    }
}

export default About;


