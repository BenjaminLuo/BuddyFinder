import React, { useCallback } from 'react';
import { withRouter } from "react-router";
import app from "../Firebase/base"

import {
    Button, Typography, FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    TextField
} from '@material-ui/core';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



export const SignIn = ({ history }) => {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history])

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSignUp}>

                <TextField
                    label="Username"
                    // helperText={errorBody ? "Please enter your message" : ""}
                    // onChange={(event) => updateBody(event.target.value)}
                    // error={errorBody}
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: "20px" }} />

                <FormControl style={{ marginBottom: "20px" }} fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={<InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>}
                        label="Password" />
                </FormControl>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth>
                    <Typography>Sign In</Typography>
                </Button>
            </form>
        </>
    );
};
