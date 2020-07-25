import React, { Component } from 'react';
 import map from './map.jpg';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
 

 const styles={
     width: '100%',
     background: 'cover'
 }
 const footerStyle ={
     textAlign: 'center',
     color: '#fff',
     background: '#1f1f1f',
     fontFamily: 'sans-serif',
     padding: '10px'
 }
class SimpleMap extends Component {
 
  render() {
    return (
        <div>
            <img src={map} style={styles}></img>
            <footer style={footerStyle}>
                <p>&copy; 2023 by Anton and Lily. Made by Shashank Rana</p>
            </footer>
        </div>
    );
  }
}
 
export default SimpleMap;