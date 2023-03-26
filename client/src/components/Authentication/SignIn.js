import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/firebase";
import { TextField, Button, Typography } from '@material-ui/core';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        <div className="sign-in-container">
            <form>
                <Typography style={{ fontSize: '24px' }}>Log In to your Account</Typography>
                <hr />
                <TextField
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: "20px", marginTop: '20px' }}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    color="primary"
                    fullWidth
                    onClick={signIn}
                    style={{ marginBottom: '20px' }}
                    variant="contained">
                    <Typography variant="h6">Log In</Typography>
                </Button>
                <Button
                    type="submit"
                    color="primary"
                    fullWidth
                    onClick={signUp}
                    variant="contained">
                    <Typography variant="h6">Register</Typography>
                </Button>
            </form>
        </div>
    );
};

export default SignIn;