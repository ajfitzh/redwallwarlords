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
  const [race, setRace] = useState({})
  const [location, setLocation] = useState({})
  
useEffect(() => {
fetch(`/warlords/13`)
  .then((r) => r.json())
  .then(warlord => {
    setWarlord(warlord)
    console.log(warlord)
    setRace(warlord.race)
    console.log(race)
    setLocation(warlord.location)
    console.log(location)
})
    
}, []) 
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
      <Avatar sx={{ width: 200, height: 150 }} variant="square" src={user.warlord.coa_url}/>
</Grid></Grid>
        
        <Grid container spacing={2} sx={{p:2}} >
    <Grid sx={{ border: 1, backgroundColor:'lightgrey' }} item xs={4}>
               <Table size="small">
                   <TableHead><Typography variant="h5">Warlord</Typography></TableHead>
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
                        <TableCell>Race: {race.name}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Location: {location.name}</TableCell> 
                    </TableRow>
                </Table> 
        </Grid>
        <Grid sx={{ border: 1, backgroundColor:'lightgrey' }} item xs={4} >
               <Table size="small">
                   <TableHead><Typography variant="h5">Agriculture</Typography></TableHead>
                   <TableRow>
                       <TableCell>Food Stores: {user.warlord.food.toLocaleString()}</TableCell>
                   </TableRow>
                   <TableRow>
                       <TableCell>Est. Production: <Typography variant='h7' style={{color: 'green'}}>+{(65 * (user.warlord.farms ? user.warlord.farms : 1)).toLocaleString()}</Typography> </TableCell>
                    </TableRow>    
                    <TableRow>
                       <TableCell>Est. Consumption:<Typography variant='h7' style={{color: 'red'}}>-{((10+(30 * Math.floor((user.warlord.rats + user.warlord.stoats + user.warlord.weasels + user.warlord.skiffs)/500)))).toLocaleString()}</Typography> </TableCell>
                    </TableRow>    
                    <TableRow>
                        <TableCell>Net: <Typography variant='h7' >{((65 * (user.warlord.farms ? user.warlord.farms : 1))-((10+(30 * Math.floor((user.warlord.rats + user.warlord.stoats + user.warlord.weasels + user.warlord.skiffs)/500))))).toLocaleString()}</Typography> </TableCell> 
                    </TableRow>
                </Table> 
        </Grid>
        <Grid sx={{ border: 1, backgroundColor:'lightgrey' }} item xs={4}>
               <Table size="small">
                   <TableHead><Typography variant="h5">Relations</Typography></TableHead>
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
    <Grid sx={{ border: 1, backgroundColor:'lightgrey' }} item xs={4}>
               <Table  size="small">
                   <TableHead><Typography variant="h5">Land Division</Typography></TableHead>
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
                       <TableCell>Towers: {user.warlord.towers.toLocaleString()}</TableCell>
                    </TableRow>    
                    <TableRow>
                       <TableCell>Unused Land: {user.warlord.freeland.toLocaleString()}</TableCell>
                    </TableRow>    
                    <TableRow>
                       <TableCell>Total Land Acres: {user.warlord.land.toLocaleString()}</TableCell>
                    </TableRow>    
                </Table> 
        </Grid>
        <Grid sx={{ border: 1, backgroundColor:'lightgrey' }} item xs={4}>
               <Table size="small">
                   <TableHead><Typography variant="h5">Income</Typography></TableHead>
                   <TableRow>
                       <TableCell>Money: ${user.warlord.cash.toLocaleString()}</TableCell>
                   </TableRow>
                   <TableRow>
                       <TableCell>Est. Income: <Typography variant='h7' style={{color: 'green'}}>+${((35 * (user.warlord.markets ? user.warlord.markets : 1))).toLocaleString()}</Typography></TableCell>
                    </TableRow>  
                    <TableRow>
                       <TableCell>Est. Expenses: <Typography variant='h7' style={{color: 'red'}}>-${(10 * Math.floor((user.warlord.rats + user.warlord.stoats + user.warlord.weasels + user.warlord.skiffs)/100)).toLocaleString()}</Typography></TableCell>
                    </TableRow>   
                    <TableRow>
                        <TableCell>Net: <Typography variant='h7'>${(((35 * (user.warlord.markets ? user.warlord.markets : 1))) - (10 * Math.floor((user.warlord.rats + user.warlord.stoats + user.warlord.weasels + user.warlord.skiffs)/100))).toLocaleString()}</Typography> </TableCell> 
                    </TableRow>
                </Table> 
        </Grid>
        <Grid sx={{ border: 1, backgroundColor:'lightgrey' }} item xs={4}>
               <Table  size="small">
                   <TableHead><Typography variant="h5">Military</Typography></TableHead>
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
                    <TableCell>Offensive Power: {((user.warlord.rats*2)+(user.warlord.weasels*3)+(user.warlord.stoats*5)+(user.warlord.skiffs*5)).toLocaleString()}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Defensive Power: {((user.warlord.rats*1)+(user.warlord.weasels*5)+(user.warlord.stoats*3)+(user.warlord.skiffs*8)).toLocaleString()}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Loyalty: {user.warlord.loyalty.toLocaleString()}</TableCell> 
                    </TableRow>
                </Table> 
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