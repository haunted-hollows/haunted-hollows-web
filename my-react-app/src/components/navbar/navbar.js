import React from "react";
import "./navbar.css";
import imageSrc from "../../images/fio-removebg-preview.png";
import { signInWithPopup } from "firebase/auth";
import { auth, GoogleProvider } from "../../config/firebase";
import { Link } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";

// Login with Firebase Google
const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, GoogleProvider);
    console.log("Login realizado com " + auth.currentUser.email);
  } catch (err) {
    console.error(err);
  }
};

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-items">
        <Link to="/">
          <img className="imge" src={imageSrc} alt="Image Alt Text" />
        </Link>
        <div className="nav-link">DOWNLOAD</div>
        <div className="nav-link">
        <ScrollLink
          to="gameplay"
          smooth={true}
          duration={500}
        >
          GAMEPLAY
        </ScrollLink>
        </div>
        <div className="nav-link">ROADMAP</div>
      </div>
      <div className="right-item">
        <button onClick={signInWithGoogle}>SIGN IN</button>
      </div>
    </div>
  );
}


export default Navbar;
