import * as React from 'react';
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
import { Link } from "react-router-dom";

{/* <ListItemButton button component="a" href="https://www.ebay.com/sch/i.html?_nkw=vintage+pogs&_sop=12" target="_blank"> */}


export const information = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Summary" />
    </ListItemButton>
    <ListItemButton >
      <ListItemIcon>
        <AutoStoriesIcon />
      </ListItemIcon>
      <ListItemText primary="Scores" />
    </ListItemButton>
    <ListItemButton >
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <ListItemText primary="Search" />
    </ListItemButton>
  </React.Fragment>
);
export const useturns = (
  <React.Fragment>
    <ListSubheader component="div" inset>
     Use Turns
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AgricultureIcon />
      </ListItemIcon>
      <ListItemText primary="Earn, Forage, or Loot" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ExploreIcon />
      </ListItemIcon>
      <ListItemText primary="Scout" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ConstructionIcon />
      </ListItemIcon>
      <ListItemText primary="Construct" />
    </ListItemButton>
  </React.Fragment>
);

export const finances = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Finances
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Mercenaries" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <StorefrontIcon />
      </ListItemIcon>
      <ListItemText primary="Market" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <ListItemText primary="Cluny's Hut" />
    </ListItemButton>
  </React.Fragment>
);

export const diplomacy = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Diplomacy
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <ShieldIcon />
      </ListItemIcon>
      <ListItemText primary="Clans / Aid" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LocalFireDepartmentIcon />
      </ListItemIcon>
      <ListItemText primary="Warlord's Hut" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AutoAwesomeIcon />
      </ListItemIcon>
      <ListItemText primary="General's Hut" />
    </ListItemButton>
  </React.Fragment>
);
export const management = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Management
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Manage Empire" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);