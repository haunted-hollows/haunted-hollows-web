import React, { useState, useEffect } from "react";
import "./navbar.css";
import imageSrc from "../../images/fio-removebg-preview.png";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, GoogleProvider } from "../../config/firebase";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, GoogleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="navbar">
      <div className="left-items">
        <Link to="/">
          <img className="imge" src={imageSrc} alt="Image Alt Text" />
        </Link>
        <div className="nav-link">DOWNLOAD</div>
        <div className="nav-link">
          <ScrollLink to="gameplay" smooth={true} duration={500}>
            GAMEPLAY
          </ScrollLink>
        </div>
        <div className="nav-link">ROADMAP</div>
      </div>
      <div className="right-item">
        {loading ? (
          <p></p>
        ) : user === null ? (
          <button onClick={signInWithGoogle}>SIGN IN</button>
        ) : (
          <div className="user-info">
            <p className="display-name">{user.displayName}</p>
            <div className="hover-box"><p className="sign-out-box">Settings</p> <p className="sign-out-box" onClick={handleSignOut}>Log out</p></div>
          </div>

        )}
      </div>
    </div>
  );
}

export default Navbar;
