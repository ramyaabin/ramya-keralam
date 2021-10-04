import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
class Notfoundpage extends Component {
    render() {
        return (
            <ComponentNotFound className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='error-template text-center'>
                            <h1>Oops</h1>
                            <br/>
                            <h2>Error 404 Not Found</h2>
                            <br/>
                            <div className='error-details'>
                                Sorry, an error occured.The requested page was not found!
                            </div>
                            <br/>
                            <div className='error-actions'>
                                <Link to='/home' className="btn btn-outline-success btn-lg">
                                    <i className="fas fa-home"/>
                                    &nbsp;Back to Main
                                </Link>
                                <Link className="btn btn-outline-success btn-lg">
                                    <i className="fas fa-envelope"/>
                                    &nbsp;Support
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
              
            </ComponentNotFound>
        );
    }
}

export default Notfoundpage;

const ComponentNotFound = styled.div`
.error template {
    padding: 40px 15px;
    text-align: center;
}

.error-action {
    margin-top: 15px;
    margin-bottom: 15px;
}

.btn{
    margin-right: 10px;
}

`;