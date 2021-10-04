import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/Components/Layouts/Pages/Navbar';
import Footer from './Components/Layouts/Footer';
import {BrowserRouter as Router,Switch, Route,Link} from 'react-router-dom';
import Home from './Components/Layouts/Pages/Home';
import Accomodation from './Components/Layouts/Pages/Accomodation';
import Bloomings from './Components/Layouts/Pages/Bloomings';
import Places from './Components/Layouts/Pages/Places';
import Feedback from './Components/Layouts/Pages/Feedback';
import Alappuzha from './Components/Layouts/Pages/districts/Alappuzha';
import Ernakulam from './Components/Layouts/Pages/districts/Ernakulam';
import Idukki from './Components/Layouts/Pages/districts/Idukki';
import Kannur from './Components/Layouts/Pages/districts/Kannur';
import Kasaragod from './Components/Layouts/Pages/districts/Kasaragod';
import Kollam from './Components/Layouts/Pages/districts/Kollam';
import Kottayam from './Components/Layouts/Pages/districts/Kottayam';
import Kozhikode from './Components/Layouts/Pages/districts/Kozhikode';
import Malappuram from './Components/Layouts/Pages/districts/Malappuram';
import Palakkad from './Components/Layouts/Pages/districts/Palakkad';
import Pathanamthitta from './Components/Layouts/Pages/districts/Pathanamthitta';
import Thiruvananthapuram from './Components/Layouts/Pages/districts/Thiruvananthapuram';
import Thrissur from './Components/Layouts/Pages/districts/Thrissur';
import Wayanad from './Components/Layouts/Pages/districts/Wayanad';
import kuthiramalika from './Components/Layouts/Pages/kuthiramalika';
import Houseboat from '../src/Components/Layouts/Pages/districts/Aventure-tourism/Houseboat';
import Paragliding from '../src/Components/Layouts/Pages/districts/Aventure-tourism/Paragliding';
import trekandcamp from '../src/Components/Layouts/Pages/districts/Aventure-tourism/trekandcamp';
import watersports from '../src/Components/Layouts/Pages/districts/Aventure-tourism/watersports';
import Ayurveda from '../src/Components/Layouts/Pages/districts/Special Tourism/Ayurveda';
import hillstation from '../src/Components/Layouts/Pages/districts/Special Tourism/hillstation';
import honeymoon from '../src/Components/Layouts/Pages/districts/Special Tourism/honeymoon';
import wildlife from '../src/Components/Layouts/Pages/districts/Special Tourism/wildlife';
import Notfoundpage from './Components/Layouts/Pages/Notfoundpage';

class App extends Component {
  render() {
    return (

        <Router>

          <Navbar/>
          <Switch>
            <Route exact path="/home"component={Home}/>
            <Route path="/places" component={Places}/>
            <Route path="/accomodation" component={Accomodation}/>
            <Route path="/bloomings" component={Bloomings}/>
            <Route path="/feedback"component={Feedback}/>
            <Route path="/kuthiramalika"component={kuthiramalika}/>
            <Route path="/alappuzha"component={Alappuzha}/>
            <Route path="/ernakulam"component={Ernakulam}/>
            <Route path="/idukki"component={Idukki}/>
            <Route path="/kannur"component={Kannur}/>
            <Route path="/kasaragod"component={Kasaragod}/>
            <Route path="/kollam"component={Kollam}/>
            <Route path="/kottayam"component={Kottayam}/>
            <Route path="/kozhikode"component={Kozhikode}/>
            <Route path="/malappuram"component={Malappuram}/>
            <Route path="/palakkad"component={Palakkad}/>
            <Route path="/pathanamthitta"component={Pathanamthitta}/>
            <Route path="/thiruvananthapuram"component={Thiruvananthapuram}/>
            <Route path="/thrissur"component={Thrissur}/>
            <Route path="/wayanad"component={Wayanad}/>
            <Route path="/wayanad"component={kuthiramalika}/>
            <Route path="/ayurveda"component={Ayurveda}/>
            <Route path="/hillstation"component={hillstation}/>
            <Route path="/honeymoon"component={honeymoon}/>
            <Route path="/wildlife"component={wildlife}/>
            <Route path="/houseboat"component={Houseboat}/>
            <Route path="/paragliding"component={Paragliding}/>
            <Route path="/trekandcamp"component={trekandcamp}/>
            <Route path="/watersports"component={watersports}/>

            <Route path component={Notfoundpage}/>

          </Switch>

          <Link />



          <Footer />






        </Router>

    );
  }
}



export default App;