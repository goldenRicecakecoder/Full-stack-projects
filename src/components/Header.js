import React from 'react';
import '../styles.css';

function Header () {

let time =  new Date();
let hours = time.getHours();
let mode = "";
// let headerStyles = { }
    console.log(hours);
    if(hours > 18){
        mode = "nightMode";
        // headerStyles = {
        //     backgroundColor: 'black'
        // };
    } else if (hours < 18) {
        mode = "dayMode"
        // headerStyles = {
        //     backgroundColor : 'orange'
        // };
    }


    return(
        <header className={`display-flex ${mode}`} >
            <div className='logo'>Logo</div>
            <ul className='nav display-flex'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>

            </ul>
        </header>
    )
}

export default Header;