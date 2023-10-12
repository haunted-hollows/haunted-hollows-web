import React from 'react';
import './navbar.css';
import imageSrc from '../images/fio-removebg-preview.png';
import { signInWithPopup } from 'firebase/auth';
import {auth, GoogleProvider} from "../config/firebase";


const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, GoogleProvider)
        console.log("Login realizado com " + auth.currentUser.email);
    } catch (err)
    {
        console.error(err)
    }
};

function Navbar() {
    return (

          <div class="container">
                  <img src="images/fundoSI.png"></img>
      <div className="navbar">
        <div className="left-items">
        <div><img className='imge' src={imageSrc} alt="Image Alt Text" /></div> {/* Use <img> and src attribute */}
          <div>DOWNLOAD</div>
          <div>GAMEPLAY</div>
          <div>ROADMAP</div>
        </div>
  
        <div className="right-item">
          <button onClick={signInWithGoogle}>SIGN IN</button>
        </div>
      </div>
          </div>
    );
  }


export default Navbar;
