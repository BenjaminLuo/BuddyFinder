import { createTheme } from '@material-ui/core';

// Site-wide styling constants
export const theme = createTheme({
    palette: {
        primary: {
            main: '#151515',
            light: '#acaea9',
            dark: '#acaea9'
        },
        secondary: {
            main: '#dedfdd',
            light: '#dedfdd',
            dark: '#dedfdd'
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h6: {
            color: '#feecda',
            fontWeight: '10',
            fontSize: '14px'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '*': {
                    'scrollbar-width': 'thin',
                },
                '*::-webkit-scrollbar': {
                    width: '4px',
                    height: '4px',
                }
            }
        }
    }
});
