import React from "react";
import { TextField, Button, Typography } from '@material-ui/core';

export function SignInForm(email, setEmail, password, setPassword, signIn, signUp) {
    return (
        <form>
            <TextField
                type="email"
                placeholder="Enter your email"
                value={email}
                variant="outlined"
                fullWidth
                style={{ marginBottom: "20px", marginTop: '20px' }}
                onChange={(e) => setEmail(e.target.value)} />
            <TextField
                type="password"
                placeholder="Enter your password"
                value={password}
                variant="outlined"
                fullWidth
                style={{ marginBottom: "20px" }}
                onChange={(e) => setPassword(e.target.value)} />
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
    );
}
