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
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Link } from "react-router-dom";


export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton button component="a" href="https://www.ebay.com/sch/i.html?_nkw=vintage+pogs&_sop=12" target="_blank">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Buy More Pogs" />
    </ListItemButton>
    <ListItemButton button component="a" href="https://www.ranker.com/list/valuable-collectible-pogs/mick-jacobs" target="_blank">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="PogPraisals" />
    </ListItemButton>
    <ListItemButton button component="a" href="https://trends.google.com/trends/explore?date=all&geo=US&q=pogs" target="_blank">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Pogularity Trends" />
    </ListItemButton>
    <ListItemButton button component="a" href="https://www.pogcoin.gg/buy" target="_blank">
      <ListItemIcon>
        <CurrencyExchangeIcon />
      </ListItemIcon>
      <ListItemText primary="Convert To CryptoPog" />
      {/* model here */}
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end Assessment" />
    </ListItemButton>
  </React.Fragment>
);