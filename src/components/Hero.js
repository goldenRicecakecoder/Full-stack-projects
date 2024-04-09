import React from 'react';

let a = 'Hero Image';
let styles = {color: 'white', 
backgroundColor: 'black',
fontSize: 50
}
function Hero(){
    return(
        <div className='hero'>
            <h1 style={styles}>{a}</h1></div>
    )
}

export default Hero;