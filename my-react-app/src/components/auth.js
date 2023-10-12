import { useState } from "react";
import './auth.css';
import {auth, GoogleProvider} from "../config/firebase";
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const Auth = () => {


     const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, GoogleProvider)
            console.log("Login realizado com " + auth.currentUser.email);
        } catch (err)
        {
            console.error(err)
        }
    };

    const logout = async () => {
        try {
            await signOut(auth)
            console.log("logout realizado");
        } catch (err)
        {
            console.error(err)
        }
    };


    if (auth.currentUser && auth.currentUser.email !== null) {

        console.log(auth.currentUser.email)
      } else {

      }

    return (
            <button onClick={signInWithGoogle}> Sign in With Google</button>
    )
}

export default Auth ;
