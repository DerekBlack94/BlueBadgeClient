import React from 'react';
import './Landing.css';
import landingTwo from '../../assets/landing-2.jpg';



const Landing = (props) => {


return (
    <div className='landingDiv'>
        <h1>Welcome to the Epic Character Creator!</h1>
        <img src={landingTwo} height='700px'></img>
        <h2>Start Your Adventure</h2>
        <h4>Create a Character Now</h4>
    </div>
);
}

export default Landing;