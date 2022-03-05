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
import { Tooltip } from '@mui/material';
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



const Warlord = ({ user}) => {
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
      <Typography> Send forth your vermin army and attack Warlord:</Typography>
                    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Warlord</InputLabel>
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
    <Title>Warlord's Hut</Title>
    <Grid
container
spacing={0}
direction="column"
alignItems="center"
justifyContent="center"
style={{ minHeight: '10vh' }}
>
    <Grid item xs={3}>
      <Tooltip arrow placement="left-start" title="Each attack has its positives and negatives, and there's one for each situation. For the specialty attacks (Guerilla Strike, Bombardment, Frontal Assault, Naval Assault), the only troop types used in calculations are the troops for those attacks.">
        <Avatar sx={{ width: 128, height: 128 }} variant="square" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg12.deviantart.net%2Feb21%2Fi%2F2011%2F077%2Fe%2F4%2Fredwall_warlords___commission_by_killskerry-d3bw1ux.jpg&f=1&nofb=1"/>
      </Tooltip>
    
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Attack Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Select Warlord"
    value={aidtarget}
    onChange={(e)=>setAidTarget(e.target.value)}
  > 
  <Tooltip arrow placement="left-start" title="Standard
Pro: Beyond employing your full offensive power, a standard attack is the only one which captures buildings.
Con: It employs the enemy's full defensive power - which, if they have a good spread of defensive troops, can stop you in your tracks.">
    <MenuItem value={1}>Standard Attack (All Units)</MenuItem>
  </Tooltip>
    <Tooltip arrow placement="left-start" title="Surprise
Pro: It's a 25% bonus to your offensive power - you don't have to have a larger army than your opponent to win. Their allies can't help out.
Con: It employs their full defensive power, you loose more troops, and it takes 18% health.">
  <MenuItem value={2}>Surprise Attack (All Units)</MenuItem>
</Tooltip>
    <Tooltip arrow placement="left-start" title="Guerilla Strike
Pro: Rats have a 2:1 Offense to Defense ratio. You only need a little over half as many rats as your opponent.
Con: You need quite a lot of rats - and rats eat more, and cost more. it takes 250 rats to overpower each tower your enemy has.">
  <MenuItem arrow value={3}>Guerilla Strike (Rats)</MenuItem>
</Tooltip>
    <Tooltip placement="left-start" title="Bombardment
Pro: You can sometimes end up really surprising your enemy, who may not have built up a troop that they hardly attack with. You destroy lots of buildings.
Con: You need a lot more weasels to win, and weasels aren't very powerful.">
      <MenuItem value={4}>Bombardment (Weasels)</MenuItem>
    </Tooltip>
    <Tooltip arrow placement="left-start" title="Frontal Assault
Pro: Stoats have a favorable Offense to defense ratio. So you don't need quite as many as your opponent. They are also 250% more powerful than rats.
Con: Stoats are harder to build up quickly. You get less land than usual.">
      <MenuItem value={5}>Frontal Assault (Stoats)</MenuItem>
    </Tooltip>
    <Tooltip arrow placement="left-start" title="Naval Assault
Pro: Few people have large Skiff armies, and skiffs have more offensive points per unit than anything else.
Con: Skiffs are hard to build up, and you need many more skiffs than your opponent to hold an advantage.">
       <MenuItem value={6}>Naval Assault (Skiffs)</MenuItem>
    </Tooltip>
   


    {/* {warlords.map((warlord, index)=> {
        <MenuItem key={index} value={index}>Placeholder</MenuItem>
      })} */}
  </Select>
</FormControl>
</Grid></Grid>

    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Unit</TableCell>
          <TableCell>Can Send</TableCell>
          <TableCell>Send</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
            <TableRow>
            <TableCell>Rats</TableCell>
            <TableCell>{user.warlord.rats.toLocaleString()}</TableCell>
            <TableCell><TextField id="filled-number" label="Send" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Weasels</TableCell>
            <TableCell>{user.warlord.weasels.toLocaleString()}</TableCell>
            <TableCell><TextField id="filled-number" label="Send" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Stoats</TableCell>
            <TableCell>{user.warlord.stoats.toLocaleString()}</TableCell>
            <TableCell><TextField id="filled-number" label="Send" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Skiffs</TableCell>
            <TableCell>{user.warlord.skiffs.toLocaleString()}</TableCell>
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
            Attack
          </Button>
          {errors ? <p>{errors}</p> : <p>Errors shown here</p>}
          <Copyright/>
  </React.Fragment>
  )
}

export default Warlord