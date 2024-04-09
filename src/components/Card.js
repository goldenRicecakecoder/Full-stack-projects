import React from 'react';
import '../images/purplerose.png';

function Card(){
    return (
        <div className='card'>
            <img src="../images/purplerose.png" alt="Image not available" />
            <h3> Web Designing</h3>
            <p>Ph: 0123456789</p>
            <p>Email: test@gmail.com</p>
        </div>
    );
}

export default Card;