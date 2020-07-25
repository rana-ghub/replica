import React from "react";
import './assets/ferofly.css';
import Capture from './capture.jpg'


const styles = {
    fontSize : '12px'
}
class Ferofly extends React.Component{
    render(){
        return(
            <div id="wh">
                <div className="body">
                    Ferofly
                </div>
                <div className = "down">
                    Magnify your Journey
                </div>
                <img src={Capture} className="img1"/>
                <div className="date-picker">
                    <div>
                        <label for="check-in" style={styles}>Check-In</label><br />
                        <input type="date" id="chech-in" name="check-in" placeholder="DD MM YYYY"/>
                    </div>
                    <div>
                        <label for="check-out" style={styles}>Check-Out</label><br />
                        <input type="date" id="chech-out" name="check-out" placeholder="DD MM YYYY"/>
                    </div>
                    <div>
                        <label for="adults" style={styles}>Adults</label><br/>
                        <input type="number" min="1" max="100" name="adults" placeholder="1"/>
                    </div>
                    <div>
                        <label for="child" style={styles}>Kids</label><br/>
                        <input type="number" min="1" max="100" name="child" placeholder="0"/>
                    </div>
                    <div>
                        <br />
                        <button id="search" type="submit">Search</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Ferofly;