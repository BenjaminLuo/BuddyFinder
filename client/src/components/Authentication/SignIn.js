import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, useContext } from "react";
import { auth } from "../Firebase/firebase";
import { Typography } from '@material-ui/core';
import { AuthContext } from '../Authentication/AuthDetails'
import { SignInForm } from "./SignInForm";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { authUser } = useContext(AuthContext);

    // Sign in: For existing users
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Sign up: For new users
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>

            {
                authUser ?
                    <>
                        You are now signed in using <b>{authUser.email}</b>
                    </>
                    :
                    <>
                        <Typography style={{ fontSize: '24px' }}>Log In to your Account (or Register)</Typography>
                        <hr />
                        {/* Form for sign in / registration */}
                        {SignInForm(email, setEmail, password, setPassword, signIn, signUp)}
                    </>
            }

        </>
    );
};

export default SignIn;


