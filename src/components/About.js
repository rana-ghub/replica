import React from 'react';
import './assets/About.css';

class About extends React.Component{
    render(){
        return(
            <div>
                <div id="about" className="about">
                    <h4>ABOUT</h4>
                </div>
                <main>
                    <em>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click<br /> “Edit Text” or double click me to add your own content and make changes to the<br />
                     font. Feel free to drag and drop me anywhere you like on your page. I’m a great <br />place for you to tell a story and let your users know a little more about you.</em>
                </main>
            </div>
        )
    }
}
export default About;