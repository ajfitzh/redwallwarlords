import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const Navbar = ({user, setUser}) => {
 

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
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

  const handleClickNavMenu = (e) => {
    console.log("Hi")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <Button as={Link} to="/" color="inherit">Home </Button>
          <Button as={Link} to="/blogs" color="inherit"> Posts </Button>
          <Button as={Link} to="/new" color="inherit"> Create Post </Button> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Redwall: Warlords
            </Typography>
          

          {user ? <>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                <Avatar alt={user.username} src={user.avatar_url} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem as={Link} to="/dashboard" onClick={handleCloseUserMenu}>Dashboard</MenuItem>
              <MenuItem as={Link} to="/friends" onClick={handleCloseUserMenu}>Friends</MenuItem>
              <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>         
            </Menu>
            </> :
             
             <Button color="inherit">Login</Button> }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar