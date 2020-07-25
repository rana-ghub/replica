import React from 'react';
import './assets/navbar.css'
class Navbar extends React.Component {
    render(){
        return(
            <header>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">ROOMS</a></li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">GALLERY</a></li>
                        <li><a href="#">SEE & DO</a></li>
                        <li><a href="#">CONTACT</a></li>
                        <li><button id="but">Book A Room</button></li>
                    </ul>
                </nav>
            </header>
        )
    }
};
export default Navbar;