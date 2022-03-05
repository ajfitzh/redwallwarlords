import React, {useState, useEffect} from 'react'
import { InputLabel, Select, MenuItem, Button } from '@mui/material'
import { Link } from "react-router-dom"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './dashboard/Title';
import { Avatar } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styled, { ThemeProvider } from "styled-components";

const useStyles = makeStyles(theme => ({
  marginAutoContainer: {
    width: 500,
    height: 80,
    display: 'flex',
    backgroundColor: 'gold',
  },
  marginAutoItem: {
    margin: 'auto'
  },
  alignItemsAndJustifyContent: {
    width: 500,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
}))


const Home = ({user }) => {
  const classes = useStyles()

  const [warlord, setWarlord] = useState({});
  
useEffect(() => {
fetch(`/warlords/${user.warlord.id}`)
  .then((r) => r.json())
  .then(warlord => {
    setWarlord(warlord)
    console.log(warlord)})
    
}, []) 
  function refreshButton(){
    fetch(`/warlords/${user.warlord.id}`)
    .then((r) => r.json())
    .then(warlord =>
      setWarlord(warlord))}
  return (
    <div>
        
        
        {{user}.user.warlord ? <><Typography variant='h3'>{user.warlord.name} (#{user.warlord.id})</Typography>
        <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '10vh' }}
>

  <Grid item xs={3}>
      <Avatar sx={{ width: 128, height: 128 }} variant="square" src={user.warlord.coa_url}/>
</Grid></Grid>
        
        <Grid container spacing={2}>
    <Grid item xs={4}>
               <Table size="small">
                   <TableHead>Warlord</TableHead>
                   <TableRow>
                       <TableCell>Turns: {user.warlord.turns.toLocaleString()}</TableCell>
                   </TableRow>
                   <TableRow>
                       <TableCell>Health: {user.warlord.health}%</TableCell>
                    </TableRow>    
                    <TableRow>
                        <TableCell>Networth: ${user.warlord.networth.toLocaleString()}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Population: {user.warlord.workers.toLocaleString()}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Race: {user.warlord.race_id}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Location: {user.warlord.location_id}</TableCell> 
                    </TableRow>
                </Table> 
        </Grid>
        <Grid item xs={4}>
               <Table size="small">
                   <TableHead>Agriculture</TableHead>
                   <TableRow>
                       <TableCell>Food Stores: {user.warlord.food.toLocaleString()}</TableCell>
                   </TableRow>
                   <TableRow>
                       <TableCell>Est. Production: <Typography variant='h7' style={{color: 'green'}}>+50</Typography> </TableCell>
                    </TableRow>    
                    <TableRow>
                       <TableCell>Est. Consumption:<Typography variant='h7' style={{color: 'red'}}>-30</Typography> </TableCell>
                    </TableRow>    
                    <TableRow>
                        <TableCell>Net: <Typography variant='h7' style={{color: 'green'}}>+20</Typography> </TableCell> 
                    </TableRow>
                </Table> 
        </Grid>
        <Grid item xs={4}>
               <Table size="small">
                   <TableHead>Relations</TableHead>
                   <TableRow>
                       <TableCell>Member of Clan: {warlord.clan ? warlord.clan.abbreviation : "No Clan Detected"} </TableCell>
                   </TableRow>
                   <TableRow>
                       <TableCell>Allies: None</TableCell>
                    </TableRow>    
                    <TableRow>
                        <TableCell>Enemies: None</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Offensive Action: 0 (0% Success Rate)</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Defenses: 0 (0% Success Rate)</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Kills: 0</TableCell> 
                    </TableRow>
                </Table> 
        </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={2}>
    <Grid item xs={4}>
               <Table size="small">
                   <TableHead>Land Division</TableHead>
                   <TableRow>
                       <TableCell>Markets: {user.warlord.markets.toLocaleString()}</TableCell>
                    </TableRow>    
                    <TableRow>
                       <TableCell>Tents: {user.warlord.tents.toLocaleString()}</TableCell>
                    </TableRow>   
                    <TableRow>
                       <TableCell>Barracks: {user.warlord.barracks.toLocaleString()}</TableCell>
                    </TableRow>    
                    <TableRow>
                       <TableCell>Camps: {user.warlord.camps.toLocaleString()}</TableCell>
                    </TableRow>  
                    <TableRow>
                       <TableCell>Huts: {user.warlord.huts.toLocaleString()}</TableCell>
                    </TableRow>      
                    <TableRow>
                       <TableCell>Farms: {user.warlord.farms.toLocaleString()}</TableCell>
                    </TableRow>    
                    <TableRow>
                       <TableCell>Towers: {user.warlord.markets.toLocaleString()}</TableCell>
                    </TableRow>    
                    <TableRow>
                       <TableCell>Unused Land: {user.warlord.freeland.toLocaleString()}</TableCell>
                    </TableRow>    
                    <TableRow>
                       <TableCell>Total Land Acres: {user.warlord.land.toLocaleString()}</TableCell>
                    </TableRow>    
                </Table> 
        </Grid>
        <Grid item xs={4}>
               <Table size="small">
                   <TableHead>Finances</TableHead>
                   <TableRow>
                       <TableCell>Money: ${user.warlord.cash.toLocaleString()}</TableCell>
                   </TableRow>
                   <TableRow>
                       <TableCell>Est. Income: <Typography variant='h7' style={{color: 'green'}}>+$25</Typography></TableCell>
                    </TableRow>  
                    <TableRow>
                       <TableCell>Est. Expenses: <Typography variant='h7' style={{color: 'red'}}>-$10</Typography></TableCell>
                    </TableRow>   
                    <TableRow>
                        <TableCell>Net: <Typography variant='h7' style={{color: 'green'}}>+$15</Typography> </TableCell> 
                    </TableRow>
                </Table> 
        </Grid>
        <Grid item xs={4}>
               <Table size="small">
                   <TableHead>Military</TableHead>
                    <TableRow>
                        <TableCell>Rats: {user.warlord.rats.toLocaleString()}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Weasels: {user.warlord.weasels.toLocaleString()}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Stoats: {user.warlord.stoats.toLocaleString()}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Skiffs: {user.warlord.skiffs.toLocaleString()}</TableCell> 
                    </TableRow>
                    <TableRow>
                       <TableCell>Leaders: {user.warlord.leaders.toLocaleString()}</TableCell>
                    </TableRow>    
                    <TableRow>
                    <TableCell>Offensive Power: {user.warlord.skiffs.toLocaleString()}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Defensive Power: {user.warlord.skiffs.toLocaleString()}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Loyalty: {user.warlord.loyalty.toLocaleString()}</TableCell> 
                    </TableRow>
                </Table> 
                <Button onClick={()=>refreshButton()}>Refresh</Button>
        </Grid>
        </Grid>
        </>
        : <><h2>Welcome to Redwall Warlords v2</h2><p> No warlord exists yet in the land of Redwall. </p><Link to='/createwarlord'>
          <Button>Create Your New Warlord</Button>
        </Link></>}
        

    </div>
  )
}

export default Home