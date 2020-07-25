import React from 'react';

import './assets/services.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBreadSlice, faFootballBall, faSwimmingPool, faWifi, faAward, faPlaceOfWorship } from '@fortawesome/free-solid-svg-icons';

class Services extends React.Component{
    render(){
        return(
            <div className="whole">
                <h4>
                    OUR SERVICES
                </h4>
                <div className="container">
                    <div className="boxes">
                        <FontAwesomeIcon icon={faBreadSlice} />
                        <h5>
                            <strong>Breakfast</strong>
                        </h5>
                        <p>
                            <em>I'm a paragraph. Click here to add your own text and edit me.</em>
                            
                        </p>
                    </div>
                    <div className="boxes">
                    <FontAwesomeIcon icon={faFootballBall} />
                        <h5>
                            <strong>Garden</strong>
                        </h5>
                        <p>
                            <em>I'm a paragraph. Click here to add your own text and edit me.</em>
                        </p>
                    </div>
                    <div className="boxes">
                    <FontAwesomeIcon icon={faSwimmingPool} />
                        <h5>
                            <strong>Pool</strong>
                        </h5>
                        <p>
                            <em>I'm a paragraph. Click here to add your own text and edit me.</em>
                        </p>
                    </div>
                    <div className="boxes">
                    <FontAwesomeIcon icon={faWifi} />
                        <h5>
                            <strong>Free Wifi</strong>
                        </h5>
                        <p>
                            <em>I'm a paragraph. Click here to add your own text and edit me.</em>
                        </p>
                    </div>
                    <div className="boxes">
                    <FontAwesomeIcon icon={faAward} />
                        <h5>
                            <strong>Daily Housekeeping</strong>
                        </h5>
                        <p>
                            <em>I'm a paragraph. Click here to add your own text and edit me.</em>
                        </p>
                    </div>
                    <div className="boxes">
                    <FontAwesomeIcon icon={faPlaceOfWorship} />
                        <h5>
                            <strong>In-Room Dining Service</strong>
                        </h5>
                        <p>
                            <em>I'm a paragraph. Click here to add your own text and edit me.</em>
                        </p>
                    </div>

                </div>
            </div>
        )
    }
};
export default Services;