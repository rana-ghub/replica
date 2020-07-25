import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './assets/room.css';
import garden from './garden.jpg';
class Grass extends React.Component{
    render(){
        return(
            <div className="box">
                <img src={garden} alt="Room" />
                <div className="text">
                    <h4>
                        GUEST REVIEW
                    </h4>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <FontAwesomeIcon icon ={faQuoteLeft} />
                                <p><em>“I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.”</em></p>                            
                            </div>
                            <div class="carousel-item">
                            <FontAwesomeIcon icon ={faQuoteLeft} />
                            <p><em>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</em></p>       
                            </div>
                            <div class="carousel-item">
                            <FontAwesomeIcon icon ={faQuoteLeft} />
                                <p><em>“I'm a paragraph. Click here to add your own text and edit me.”</em></p>
                            </div>
                            <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active dark"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default Grass;
