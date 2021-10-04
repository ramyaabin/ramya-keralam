import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Container, Segment} from 'semantic-ui-react';
import {FacebookShareButton, WhatsappShareButton,TwitterShareButton,LinkedinShareButton} from 'react-share';
import {FacebookIcon,WhatsappIcon,TwitterIcon,LinkedinIcon} from 'react-share';


class Footer extends Component {
    render() {
        return (


        
        <FooterContainer className= "main-footer">
        <div className= "footer-middle">
        <div className= "container">
        <div className= "row">

  
    <div className="col-md-3 col-sm-6">
        <h4>Contact me</h4>
        <ul className= "list-unstyled">
        <li>Sharjah</li>
        <li>United Arab Emirates</li>
        <li>Telephone:00971527043043</li>
        <li>Email:ramya.abin@gmail.com</li>
        <li>website:www.remyakeralam.com</li>
        </ul>
        </div>


    <div className= "col-md-3 col-sm-6">
            <h4>Adventure Tourism</h4>
            <ul className= "list-unstyled">
            <li><Link to="/houseboat">Houseboat</Link></li>
            <li><Link to="/paragliding">Paragliding</Link></li>
            <li><Link to="/trekandcamp">Trekking and Camping</Link></li>
            <li><Link to="/watersports">Water Sports</Link></li>
            </ul>
        </div>

        <div className= "col-md-3 col-sm-6">
            <h4>Special Tourism</h4>
            <ul className= "list-unstyled">
            <li><Link to="/ayurveda">Ayurveda Tour</Link></li>
            <li><Link to="/hillstation">Kerala Hill Station</Link></li>  
            <li><Link to="/wildlife">Kerala Wildlife tour</Link></li>
            <li><Link to="/honeymoon">Lovely Honeymoon</Link></li>
            </ul>
           
        </div>
        <div className= "col-md-3 col-sm-6">
            <h4>Emergency Contacts</h4>
            <ul className= "list-unstyled">
            <li>Tourist Information toll free : 1-800-425-4747</li>
            <li>Police Station (Nearest) : 100</li>
            <li>Pink Police Patrol : 1515</li>
            <li>KSRTC Enquiry : 0821-2443602</li>
            <li>KSRTC Suburb Bus Stand : 0821-2443490</li>
            <li>Rural/Suburban Bus Stand : 0821-2520853</li>
            <li>Railway enquiry number : 1800-111-139</li>
            </ul>
           
        </div>

        <Container>
            <Segment>
                <FacebookShareButton url="http://localhost:3002/home" 
                quote={"Thankyou for the Share"}
                hashtag="#RamyaKeralam">
                    <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                </FacebookShareButton>
                <WhatsappShareButton
                title="Sharing Content"
                url="http://localhost:3002/home">
                    <WhatsappIcon></WhatsappIcon>
                </WhatsappShareButton>
                <TwitterShareButton url="http://localhost:3002/home" 
                quote={"Thankyou for the Share"}
                hashtag="#RamyaKeralam">
                    <TwitterIcon></TwitterIcon>
                </TwitterShareButton>
                <LinkedinShareButton  url="http://localhost:3002/home" 
                quote={"Thankyou for the Share"}
                hashtag="#RamyaKeralam">
                <LinkedinIcon></LinkedinIcon>
                </LinkedinShareButton>
            </Segment>
        </Container>



        <div className= "footer-bottom">
            <p className= "text-center">
               &copy;{new Date().getFullYear()} City Guide Kerala - All Rights Reserved
            </p>
            </div>
        </div>

        
        </div>
        </div>

        
        </FooterContainer>
);
        
}
}


export default Footer;

const FooterContainer = styled.footer`

    .footer-middle {
        background: var(--mainDark);
        padding-top: 3rem;
        color: var(--mainWhite);

    }

    .footer-bottom {
        padding-top: 3rem;
        padding-bottom: 2rem;
    }

    ul li a {
        color: var(--mainGrey);
    }

    ul li a:hover {
        color: var(--mainLightGrey);
    }



`;




