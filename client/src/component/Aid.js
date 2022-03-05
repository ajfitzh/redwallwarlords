import React, {useState, useEffect} from 'react'
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './dashboard/Title';
import { Avatar } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
Redwall Warlords v2        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  console.log("nothing programmed yet")
}



const Aid = ({ user}) => {
  const [errors, setErrors] = useState([]);
  const [warlords, setWarlords] = useState([]);
  const [aidtarget, setAidTarget] = useState({})

  useEffect(() => {
    fetch(`/warlords/`)
      .then((r) => r.json())
      .then(warlords => {
        setWarlords(warlords)
        console.log(warlords)})
        
    }, []) 

  return (
    <React.Fragment>
      <Typography> Sending aid requires 2 turns and at least 1,302 Skiffs. <br></br>
                    We have 6 aid credits available. <br></br>
                    We will receive an additional aid credit every hour.</Typography>
                    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select Warlord</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Select Warlord"
    value={aidtarget}
    onChange={(e)=>setAidTarget(e.target.value)}
  >
    <MenuItem value={2}>Orcrist's Raiders</MenuItem>
    <MenuItem value={3}>StormClaw</MenuItem>
    <MenuItem value={4}>Daughters of Delor</MenuItem>
    <MenuItem value={5}>wolf bite</MenuItem>
    <MenuItem value={6}>Peace Alliance</MenuItem>
    <MenuItem value={7}>windhounds</MenuItem>
    <MenuItem value={8}>Ereptor's Raiders</MenuItem>
    <MenuItem value={9}>Blood Wake's Scorchers</MenuItem>
    <MenuItem value={10}>Mtsenskovite Army</MenuItem>
    <MenuItem value={11}>Ragefur's Band</MenuItem>
    <MenuItem value={12}>The Hounds of Ulster</MenuItem>

    {/* {warlords.map((warlord, index)=> {
        <MenuItem key={index} value={index}>Placeholder</MenuItem>
      })} */}
  </Select>
</FormControl>
    <Title>Aid</Title>
    <Grid
container
spacing={0}
direction="column"
alignItems="center"
justifyContent="center"
style={{ minHeight: '10vh' }}
>
    <Grid item xs={3}>
    <Avatar sx={{ width: 128, height: 128 }} variant="square" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.sullivanet.com%2Fredwall%2Fencyc%2Fscans%2Ftriss%2Fseascab1.jpg&f=1&nofb=1"/>

</Grid></Grid>
{/* {warlords.map((warlord, index)=> <p>{warlord.name}</p>)} */}

    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Unit</TableCell>
          <TableCell>Owned</TableCell>
          <TableCell>Can Send</TableCell>
          <TableCell>Send</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
            <TableRow>
            <TableCell>Rats</TableCell>
            <TableCell>{user.warlord.rats.toLocaleString()}</TableCell>
            <TableCell>{(user.warlord.rats * 0.2).toLocaleString()}</TableCell>
            <TableCell><TextField id="filled-number" label="Send" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Weasels</TableCell>
            <TableCell>{user.warlord.weasels.toLocaleString()}</TableCell>
            <TableCell>{(user.warlord.weasels * 0.2).toLocaleString()}</TableCell>
            <TableCell><TextField id="filled-number" label="Send" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Skiffs</TableCell>
            <TableCell>{user.warlord.skiffs.toLocaleString()}</TableCell>
            <TableCell>{(user.warlord.skiffs * 0.2).toLocaleString()}</TableCell>
            <TableCell><TextField id="filled-number" label="Send" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Food</TableCell>
            <TableCell>{user.warlord.food.toLocaleString()}</TableCell>
            <TableCell>{(user.warlord.food * 0.2).toLocaleString()}</TableCell>
            <TableCell><TextField id="filled-number" label="Send" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cash</TableCell>
            <TableCell>${user.warlord.cash.toLocaleString()}</TableCell>
            <TableCell>${(user.warlord.cash * 0.2).toLocaleString()}</TableCell>
            <TableCell><TextField id="filled-number" label="Send" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
      </TableBody>
    </Table>
    <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Aid
          </Button>
          {errors ? <p>{errors}</p> : <p>Errors shown here</p>}
          <Copyright/>
  </React.Fragment>
  )
}

export default Aid