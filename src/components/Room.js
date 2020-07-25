import React from 'react';
import './assets/room.css';
import RoomPic from './room.jpg'
class Room extends React.Component{
    render(){
        return(
            <div className="box">
                <img src={RoomPic} alt="Room" />
                <div className="text">
                    <h4>
                        OUR ROOMS
                    </h4>
                    <p>
                    <em>I'm a paragraph. Click here to add your
                    own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</em>
                    </p>
                    <button type="submit">Book A Room</button>
                </div>
            </div>
        )
    }
};
export default Room;
