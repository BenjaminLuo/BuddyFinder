import * as React from 'react';

import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import history from '../Navigation/history';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/core/Menu';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
//import AdbIcon from '@material-ui/core/Adb';

const Appbar = () => {

  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  
  
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

  return (


    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
           <Button
             // key={page}
             onClick={() => history.push('/')}
             sx={{ my: 2, color: 'white', display: 'block' }}
           >
             Home
           </Button>
         
       </Box>

<<<<<<< HEAD
=======
       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
           <Button
             // key={page}
             onClick={() => history.push('/Calendar')}
             sx={{ my: 2, color: 'white', display: 'block' }}
           >
             Calendar
           </Button>
         
       </Box>

       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
           <Button
             // key={page}
             onClick={() => history.push('/Home')}
             sx={{ my: 2, color: 'white', display: 'block' }}
           >
            Home
           </Button>
         
       </Box>
>>>>>>> 4d8f954917cc71f21658ee5a794d74f94682d2fd

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
           
              <Button
                // key={page}
                onClick={() => history.push('/Statistics')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Stats
              </Button>
            
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
           <Button
             // key={page}
             onClick={() => history.push('/Discussion')}
             sx={{ my: 2, color: 'white', display: 'block' }}
           >
             Discussion
           </Button>

           </Box>

           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
           <Button
             // key={page}
             onClick={() => history.push('/Matching')}
             sx={{ my: 2, color: 'white', display: 'block' }}
           >
             Matching
           </Button>
         
       </Box>

        </Toolbar>
      </Container>
    </AppBar>

    
  )
}

export default Appbar;