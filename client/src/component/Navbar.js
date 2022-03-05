import React, {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
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
import { createSvgIcon } from '@mui/material/utils';
import SvgIcon from '@mui/material/SvgIcon';
import { makeStyles } from "@material-ui/core/styles";
import Badge from '@mui/material/Badge';
import { CircularProgress } from '@material-ui/core';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ConstructionIcon from '@mui/icons-material/Construction';
import ExploreIcon from '@mui/icons-material/Explore';
import BuildIcon from '@mui/icons-material/Build';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import SearchIcon from '@mui/icons-material/Search';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AlbumIcon from '@mui/icons-material/Album';
import ShieldIcon from '@mui/icons-material/Shield';
import LogoutIcon from '@mui/icons-material/Logout';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  menuInfo: {
    marginRight: theme.spacing(2),
    flexGrow: 1
  },

   

  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: (76, 76, 76)
  },
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));

const Navbar = ({user, setUser}) => {
  const classes = useStyles();
  const options = ["apple", "orange", "grape"];

  let messages = 0;
  let turns = 10;
  let cash = 10000000;
  let land = 13242;
  let loyalty = 1543000;
  let food = 23000000;
  let health = 93;
  let networth = (user.warlord? user.warlord.networth : 0) 

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

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

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          {user ? <>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="navmenu"
            sx={{ mr: 2 }}
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Tooltip title="How many turns you have- spend them wisely!">
            <Typography className={classes.menuInfo} sx={{border: 1}}>Turns <br></br><br></br>{(user.warlord) ? user.warlord.turns : 0}</Typography>
          </Tooltip>
          <Tooltip title="Cash is used to pay for upkeep of your nation, and to buy things from the market">
            <Typography className={classes.menuInfo} sx={{border: 1}} >Cash <br></br><br></br>${(user.warlord) ? user.warlord.cash.toLocaleString() : 0}</Typography>
          </Tooltip>
          <Tooltip title="Land can be built upon to provide bonuses for your empire- the more land, the better!">
            <Typography className={classes.menuInfo} sx={{border: 1}} >Land<br></br> <br></br>{(user.warlord) ? user.warlord.land.toLocaleString() : 0}</Typography>
          </Tooltip>
          <Tooltip title="Spend loyalty to perform missions against rivals, or boost your own warband!">
            <Typography className={classes.menuInfo} sx={{border: 1}} >Loyalty<br></br><br></br> {(user.warlord) ? user.warlord.loyalty.toLocaleString() : 0}</Typography>
          </Tooltip>
          <Tooltip title="Food is used to feed your leaders, workers, and soldiers">
            <Typography className={classes.menuInfo} sx={{border: 1}} >Food<br></br><br></br>{(user.warlord) ? user.warlord.food.toLocaleString() : 0}</Typography>
          </Tooltip>
          <Tooltip title="Your warband's health determines the effectiveness of your attacks and defenses">
                      <Typography className={classes.menuInfo} sx={{border: 1}} >Health <br></br>
              <CircularProgressWithLabel variant='determinate' color='success' value={(user.warlord) ? user.warlord.health : 0} />
          </Typography>
          </Tooltip>
          <Tooltip title="Your networth is determined by your cash, land, food, troops, and other resources">
            <Typography className={classes.menuInfo} sx={{border: 1}} >Networth <br></br><br></br>${networth.toLocaleString()}</Typography>
          </Tooltip>

          
            <Tooltip title="Open settings">
              <Badge badgeContent={messages} color="error">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                  <Avatar  alt={user.username} src={user.avatar_url} />
                </IconButton>
              </Badge>
              
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
              {/* <MenuItem><Link style={{ textDecoration: 'none' }} to="/messages">Messages ({messages})</Link></MenuItem> */}
              <MenuItem><Link style={{ textDecoration: 'none' }} to="/manage">Manage</Link></MenuItem>
              <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>         
            </Menu>
            <StyledMenu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to="/summary"><DashboardIcon />Summary</Link></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to="/scores"><AutoStoriesIcon />Scores</Link></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to="/search"><SearchIcon />Search</Link></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to="/turns"><AgricultureIcon />Use Turns</Link></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to="/construct"><ConstructionIcon />Construct</Link></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to="/mercenaries"><AttachMoneyIcon />Mercenaries</Link></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to="/market"><StorefrontIcon />Market</Link></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to="/bank"><AccountBalanceIcon />Cluny's Hut</Link></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to="/aid"><ShieldIcon />Aid</Link></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to="/clan"><PeopleIcon />Clans</Link></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to="/warlord"><LocalFireDepartmentIcon />Warlord's Hut</Link></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to="/missions"><AutoAwesomeIcon />General's Hut</Link></MenuItem>
            </StyledMenu>
            </> :
             <Button color="inherit">Login</Button> }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar