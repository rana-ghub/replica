import React from 'react';
import './assets/contact.css';

const styles ={
    width: '400px'
}
const styles1 ={
    width: '400px',
    marginRight: '5px',
    marginLeft: 'auto'
}
const styles2 ={
    width: '812px',
    marginLeft: 'auto',
    marginRight: 'auto'
}
const styles3 ={
    width: '812px',
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: '180px'
}
class Contact extends React.Component{
    render(){
        return(
            <div className="whole2">
                <h4>CONTACT US</h4><br />
                <p><em>info@mysite.com / 500 Terry Francois Street, San Francisco, CA 94158  /  Tel: 123-456-7890 </em></p>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6 mw-50">
                        <input type="text" class="form-control" id="name" placeholder="Name*" style={styles1}/>
                        </div>
                        <div class="form-group col-md-6 mw-50">
                        <input type="email" class="form-control" id="email" placeholder="Email*" style={styles}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="subject" placeholder="Subject" style={styles2}/>
                    </div>
                    <div class="form-group">
                        <input type="textarea" class="form-control" id="message" placeholder="Message" style={styles3}/>
                    </div>
                    <button type="submit" id="lol">Send</button>
                </form>
            </div>
        )
    }
};
export default Contact;