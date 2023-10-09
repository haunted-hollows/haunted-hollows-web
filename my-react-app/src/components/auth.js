import { useState } from "react";
import {auth, GoogleProvider} from "../config/firebase";
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try{
        await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, GoogleProvider)
        } catch (err)
        {
            console.error(err)
        }
    };

    const logout = async () => {
        try {
            await signOut(auth)
        } catch (err)
        {
            console.error(err)
        }
    };

    return (
        <div>
            <input placeholder="Email"
             onChange={(e) => setEmail(e.target.value)}>
             </input>

            <input placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}>
            </input>

            <button onClick={signIn}>Sign In</button>
            <button onClick={signInWithGoogle}> Sign in With Google</button>
            <button onClick={logout}> Logout </button>

        </div>
    )
}