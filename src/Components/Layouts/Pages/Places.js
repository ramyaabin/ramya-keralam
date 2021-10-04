import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import board from '../Pages/board.jpg';
import trivandrum from './districts/trivandrum.jpg';
import alappuzha from './districts/alappuzha.jpg';
import ernakulam from './districts/ernakulam.jpg';
import idukki from './districts/idukki.jpg';
import kannur from './districts/kannur.jpg';
import kasaragod from './districts/kasaragod.jpg';
import kollam from './districts/kollam.jpg';
import kottayam from './districts/kottayam.jpg';
import kozhikode from './districts/kozhikode.jpg';
import malappuram from './districts/malappuram.jpg';
import palakkad from './districts/palakkad.jpg';
import pathanamthitta from './districts/pathanamthitta.jpg';
import thrissur from './districts/thrissur.jpg';
import wayanad from './districts/wayanad.jpg';




class Places extends Component {
    render() {
        return (
         
          <div className="bg_image"
          style={{
            backgroundImage: 'url('+board+')',
            backgroundSize: "cover",
            height: "600vh",
            
          }}>
<br/>
<br/>
           
                <div className="container">
                  <br/>
                <div><blockquote className="blockquote text-dark"><h3><b>Districts of Kerala</b></h3></blockquote></div>
                <br/>
                    <h5>Kerala covers an Area of 38,863 km².Kerala is divided into 14 revenue districts.</h5>
                        
                            <blockquote className="blockquote text-dark text-justify">
                            Kerala is divided into 14 revenue districts. The districts of Kerala are generally grouped into three parts.
                            Thiruvananthapuram  is the capital of the southern Indian state of Kerala.The North Kerala districts includes  Kasaragod, Kannur, Wayanad, Kozhikode.
                            The Central Kerala districts includes Palakkad, Thrissur, Ernakulam, Idukki, Malappuram, Kottayam. 
                            The South Kerala districts includes Thiruvananthapuram, Kollam, Alappuzha, Pathanamthitta,Thiruvananthapuram.
                             </blockquote>

       
                  
                  </div>




<br/>
<div className="container">
<div className="row my-2">
<div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card text-dark bg-warning mb-3" style={{ width: '18rem'}} >
  <img src={trivandrum} className="card-img-top" className="d-block w-20" height="200" alt="..."/>
  <div className="card-body">

  <blockquote className="blockquote">
      <figure className="text-center">
    <h5 className="card-title text-uppercase">Thiruvananthapuram  </h5>
    
    <p className="card-text">Thiruvananthapuram, known by its former name Trivandrum is the capital of the Indian state of Kerala.<br/>
    Located on the west coast of India near the extreme south.<br/>
    </p>
   
    <Link
    to="/thiruvananthapuram"
    className="btn btn-success text-uppercase">
    More Info
    </Link>
    </figure>
    </blockquote>
    </div>
    </div>
  </div>

  <div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card text-dark bg-warning mb-3"style={{ width: '18rem'}} >
  <img src={kollam} className="card-img-top" className="d-block w-20" height="200"alt="..."/>
  <div className="card-body">
  <blockquote className="blockquote">
      <figure className= "text-center">
    <h5 className="card-title text-uppercase">Kollam</h5>
    <p className="card-text">
    Kollam is situated 66 kms north of Trivandrum. Kollam, known by its former name Quilon is an ancient seaport and city on the Malabar Coast of India bordering the Laccadive Sea,<br/>
     
    </p>
    <Link
    to="/kollam"
    className="btn btn-success text-uppercase">
    More Info
    </Link>
    </figure>
    </blockquote>
    </div>
    </div>
  </div>

  <div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card text-dark bg-warning mb-3" style={{ width: '18rem'}} >
  <img src={pathanamthitta} className="card-img-top" class="d-block w-20" height="200" alt="..."/>
  <div className="card-body">
  <blockquote className= "blockquote">
      <figure className= "text-center">
    <h5 className="card-title text-uppercase">Pathanamthitta</h5>
    <p className="card-text">Pathanamthitta is situated in the Central Travancore region. The words “Pathanam” and “thitta”, which together mean "array of ten "family" houses by the riverside".</p>
    <Link
    to="/pathanamthitta"
    className="btn btn-success text-uppercase">
    More Info
    </Link>
    </figure>
    </blockquote>
    </div>
  </div>
  </div>


  <div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card text-dark bg-warning mb-3"  style={{ width: '18rem'}} >
  <img src={alappuzha} className="card-img-top" className="d-block w-20" height="200" alt="..."/>
  <div className="card-body">
  <blockquote className= "blockquote">
      <figure className= "text-center">
    <h5 className="card-title text-uppercase">Alappuzha</h5>
  
    <p className="card-text">
    Alappuzha,also known by its former name Alleppey is an important tourist destination in India.The Backwaters of Alappuzha is one of the most popular tourist attractions in Kerala.
    </p>
   
    
    <Link
    to="/alappuzha"
    className="btn btn-success text-uppercase">
    More Info
    </Link>
    </figure>
    </blockquote>
    </div>
  </div>
  </div>

  <div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card text-dark bg-warning mb-3" style={{ width: '18rem'}} >
  <img src={kottayam} className="card-img-top" className="d-block w-20" height="200"alt="..."/>
  <div className="card-body">
  <blockquote className= "blockquote">
      <figure className= "text-center">
    <h5 className="card-title text-uppercase">Kottayam</h5>
    
    <p className="card-text">It is located approximately 155 kms north of Trivandrum.It is flanked by the Western Ghats on the east and the Vembanad Lake and paddy fields of Kuttanad on the west.</p>    
    
    <Link
    to="/kottayam"
    className="btn btn-success text-uppercase">
    More Info
    </Link>
    </figure>
    </blockquote>
    </div>
  </div>
  </div>


  <div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card text-dark bg-warning mb-3" style={{ width: '18rem'}} >
  <img src={idukki} className="card-img-top" className="d-block w-20" height="200" alt="..."/>
  <div className="card-body">
  <blockquote className= "blockquote">
      <figure className= "text-center">
    <h5 className="card-title text-uppercase">Idukki</h5>
    
    <p className="card-text">Idukki is the second-largest district in terms of area, it has the lowest population density among the districts of Kerala.It is rich in forests and thus is also known as the "Spice Garden of Kerala".</p>
   
    
    <Link
    to="/idukki"
    className="btn btn-success text-uppercase">
    More Info
    </Link>
    </figure>
    </blockquote>
    </div>
  </div>
  </div>

  <div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card text-dark bg-warning mb-3"style={{ width: '18rem'}} >
  <img src={ernakulam} className="card-img-top" className="d-block w-20" height="200" alt="..."/>
  <div className="card-body">
  <blockquote className= "blockquote">
      <figure className="text-center">
    <h5 className="card-title text-uppercase">Ernakulam</h5>
   
    <p className="card-text"> 
    It is the central portion of the city of Kochi, has lent its name to the Ernakulam district.It is also known as the commercial capital and the most populous metropolitan area in Kerala.</p>
   
    <Link
    to="/ernakulam"
    className="btn btn-success text-uppercase">
    More Info
    </Link>
    </figure>
    </blockquote>
    </div>
  </div>
  </div>

  <div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card text-dark bg-warning mb-3" style={{ width: '18rem'}} >
  <img src={thrissur} className="card-img-top" className="d-block w-20" height="200" alt="..."/>
  <div className="card-body">
  <blockquote className= "blockquote">
      <figure className= "text-center">
    <h5 className="card-title text-uppercase">Thrissur</h5>
   
    <p className="card-text">Formerly Trichur is the fourth largest city in Kerala after Trivandrum, Kochi and Kozhikode, and the 21st largest in India. It is famous for the Thrissur Pooram festival.</p>
    
   
    <Link
    to="/thrissur"
    className="btn btn-success text-uppercase">
    More Info
    </Link>
    </figure>
    </blockquote>
    </div>
  </div>
  </div>

  <div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card text-dark bg-warning mb-3" style={{ width: '18rem'}} >
  <img src={palakkad} className="card-img-top" className="d-block w-20" height="200" alt="..."/>
  <div className="card-body">
  <blockquote className= "blockquote">
      <figure className= "text-center">
    <h5 className="card-title text-uppercase">Palakkad</h5>
  
    <p className="card-text"> Also known as Palghat, is the largest district in Kerala since 2006.It is also known as rice granary of Kerala.Palakkad is situated approximately 382 kms from Trivandrum. </p>
    
 
    
    <Link
    to="/palakkad"
    className="btn btn-success text-uppercase">
    More Info
    </Link>

    </figure>
    </blockquote>
    </div>
  </div>
  </div>

  <div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card text-dark bg-warning mb-3" style={{ width: '18rem'}} >
  <img src={malappuram} className="card-img-top"className="d-block w-20" height="200" alt="..."/>
  <div className="card-body">

  <blockquote className= "blockquote">
      <figure className= "text-center">
    <h5 className="card-title text-uppercase">Malappuram</h5>
   
    <p className="card-text">Malappuram is precisely the land atop the hills,remarkable for its unique natural beauty. It lies between the Nilgiris and Arabian Sea.Chaliyar, Kadalundippuzha, Bharathapuzha and Tirurpuzha rivers through this district.</p>
   
    
    <Link
    to="/malappuram"
    className="btn btn-success text-uppercase">
    More Info
    </Link>
    </figure>
    </blockquote>
    </div>
  </div>
  </div>

  <div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card text-dark bg-warning mb-3" style={{ width: '18rem'}} >
  <img src={kozhikode} className="card-img-top" className="d-block w-20" height="200"alt="..."/>
  <div className="card-body">
  <blockquote className= "blockquote">
      <figure className= "text-center">
    <h5 className="card-title text-uppercase">Kozhikode</h5>
    
    <p className="card-text">Also known as Calicut, is the second-largest metropolitan city in the State of Kerala.It is classified as a Tier 2 city by the Government of India and was ranked the second best city in India to live.It is well known for its sculptures and Kozhikode is known as as “City of Sculptures”.</p>
 
    
    <Link
    to="/kozhikode"
    className="btn btn-success text-uppercase">
    More Info
    </Link>
    </figure>
    </blockquote>
    </div>
  </div>
  </div>

  <div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card text-dark bg-warning mb-3" style={{ width: '18rem'}} >
  <img src={wayanad} className="card-img-top" className="d-block w-20" height="200" alt="..."/>
  <div className="card-body">
  <blockquote className= "blockquote">
      <figure className= "text-center">
    <h5 className="card-title text-uppercase">Wayanad</h5>
   
    <p className="card-text">Wayanad is  in the north-east of Kerala. Wayanad, along with the Chaliyar valley is known for natural Gold fields. "Chaliyar" the fourth longest river of Kerala, originates in Wayanad plateau. Historically important Edakkal Caves are located here.</p>
   
    
    <Link
    to="/wayanad"
    className="btn btn-success text-uppercase">
    More Info
    </Link>
    </figure>
    </blockquote>
    </div>
  </div>
  </div>

  <div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card text-dark bg-warning mb-3" style={{ width: '18rem'}} >
  <img src={kannur} className="card-img-top" className="d-block w-20" height="200" alt="..."/>
  <div className="card-body">
  <blockquote className= "blockquote">
      <figure className= "text-center">
    <h5 className="card-title text-uppercase">Kannur</h5>
    
    <p className="card-text">
      Formerly known in English as Cannanore, Arabic as Kannanur.Kannur is the sixth-most urbanised district in Kerala, with more than 50% of its residents living in urban areas.The Kannur cuisine depicts it culture and heritage. It is famous for Thalassery biriyani. The city of is also famous for Haluva called as Sweet Meat by Europeans due to the texture of the sweet.
    </p>
    
    <Link
    to="/kannur"
    className="btn btn-success text-uppercase">
    More Info
    </Link>
    </figure>
    </blockquote>
    </div>
  </div>
  </div>

  <div className="col-10 col-lg-4 mx-auto mb-5">
<div className="card text-dark bg-warning mb-3" style={{ width: '18rem'}} >
  <img src={kasaragod} className="card-img-top" className="d-block w-20" height="200"  alt="..."/>
  <div className="card-body">
  <blockquote className= "blockquote">
      <figure className= "text-center">
    <h5 className="card-title text-uppercase">Kasaragod</h5>

    <p className="card-text">Formerly known as Kassergode,and Malayalam as Kanhirakode,is situated in the rich biodiversity of Western Ghats. It is the northernmost district of Kerala and is also known as Saptha Bhasha Sangama Bhoomi.Kasaragod is the combination of two Sanskrit words kaasara (which means lake) and kroda (which means a place where treasure is kept).</p>
    
   
    <Link
    to="/kasaragod"
    className="btn btn-success text-uppercase">
    More Info
    </Link>
    </figure>
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

export default Places;