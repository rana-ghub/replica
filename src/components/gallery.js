import React from 'react';
import './assets/gallery.css';
import car_1 from './car1.jpg';
import car_2 from './car_2.jpg';
import car_3 from './car_3.jpg';
import car_4 from './car_4.jpg';
import car_5 from './car_5.jpg';
import car_6 from './car_6.jpg';


class Gallery extends React.Component{
    render(){
        return(
            <div className="whole">
                <h4>GALLERY</h4>
                <div className="row">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div class="carousel-item active">
                                <img src={car_1} class="d-block w-100" alt="..." id="gg"/>
                            </div>
                            <div className="carousel-item">
                                <img src={car_4} class="d-block w-100" alt="..." id="gg"/>
                            </div>
                        </div>
                        {/* <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a> */}
                    </div>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={car_2} className="d-block w-100" alt="..." id="qw"/>
                            </div>
                            <div className="carousel-item">
                                <img src={car_5} className="d-block w-100" alt="..." id="qw"/>
                            </div>
                        </div>
                        {/* <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a> */}
                    </div>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={car_3} className="d-block w-100" alt="..." id=""/>
                            </div>
                            <div className="carousel-item">
                                <img src={car_6} className="d-block w-100 " alt="..." id="vr" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default Gallery;