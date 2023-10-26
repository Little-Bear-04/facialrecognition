import React from "react";
import Tilt from 'react-parallax-tilt';
import bear from './bear.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="br2 shadow-2" options={{ max:55 }} style={{height: 250, width: 250}}>
                <div className="pa3">
                        <img style={{paddingTop:'30px'}} alt='logo' src={bear}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;