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
import { ButtonGroup } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import TakeTurn from "./TakeTurn"
import Attack from "./Attack"

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



const Warlord = ({ user}) => {
  const [errors, setErrors] = useState([]);
  const [attackwarlords, setAttackWarlords] = useState([]);
  const [result, setResults] = useState(false)
  const [attacktarget, setAttackTarget] = useState(0)
  const [attacktype, setAttackType] = useState(0);
  const [rats, setRats] = useState(0);
  const [weasels, setWeasels] = useState(0);
  const [stoats, setStoats] = useState(0);
  const [skiffs, setSkiffs] = useState(0);

  function handleRatsChange(e){
    e.preventDefault();
    setRats(e.target.value);
  }
  function handleWeaselsChange(e){
    e.preventDefault();
    setWeasels(e.target.value);
  }
  function handleStoatsChange(e){
    e.preventDefault();
    setStoats(e.target.value);
  }
  function handleSkiffsChange(e){
    e.preventDefault();
    setSkiffs(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Attack Button Clicked!");
    setResults(true);
  }

  useEffect(() => {
    fetch(`/warlords/`)
      .then((r) => r.json())
      .then(attackwarlords => {
        setAttackWarlords(attackwarlords)
        console.log(attackwarlords)})
        
    }, []) 

  return (
    <React.Fragment>

      {/* <Typography> Send forth your vermin army and attack Warlord #: {attacktarget}</Typography> */}
    <Title>Warlord's Hut</Title>
    {result ? <><TakeTurn turns={2} user={user} action={0} warlord={user.warlord} newmarkets={0} newtents={0} newbarracks={0} newcamps={0} newhuts={0} newforagers={0} newtowers={0}/>
    <Attack attackwarlords={attackwarlords} user={user} attacktype={attacktype} enemy={attacktarget}/></> : <Typography>Turn Results Shown Here</Typography>}
    
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
    
</Grid><Grid item xs={12}>
<ButtonGroup>
    {attackwarlords.map((warlord, index) => {
      console.log(warlord.name);
      if(warlord.id == 2)
      return <><Button key={warlord.id} size="small" variant="outlined"  onClick={(e)=>setAttackTarget(index)}>{warlord.name}</Button></>
      if(warlord.id == 3)
      return <Button key={warlord.id} size="small" variant="outlined"  onClick={(e)=>setAttackTarget(index)}>{warlord.name}</Button>
    })}
  </ButtonGroup>
  </Grid>
<Grid item xs={12}>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Tooltip arrow='true' placement="top-start" title="Standard
Pro: Beyond employing your full offensive power, a standard attack is the only one which captures buildings.
Con: It employs the enemy's full defensive power - which, if they have a good spread of defensive troops, can stop you in your tracks.">
    <Button disabled onClick={()=> { setAttackType(1)}}>Standard Assault</Button>
  </Tooltip>
  <Tooltip arrow='true' placement="top-start" title="Surprise
Pro: It's a 25% bonus to your offensive power - you don't have to have a larger army than your opponent to win. Their allies can't help out.
Con: It employs their full defensive power, you loose more troops, and it takes 18% health.">
   <Button disabled onClick={()=> { setAttackType(2)}}>Surprise Attack</Button>
  </Tooltip>  
  
  <Tooltip arrow='true' placement="top-start" title="Guerilla Strike
Pro: Rats have a 2:1 Offense to Defense ratio. You only need a little over half as many rats as your opponent.
Con: You need quite a lot of rats - and rats eat more, and cost more. it takes 250 rats to overpower each tower your enemy has.">
  <Button onClick={()=> { setAttackType(3)}}>Guerilla Strike (Rats)</Button>
  </Tooltip>
  <Tooltip placement="top-start" title="Bombardment
Pro: You can sometimes end up really surprising your enemy, who may not have built up a troop that they hardly attack with. You destroy lots of buildings.
Con: You need a lot more weasels to win, and weasels aren't very powerful.">
       <Button disabled onClick={()=> {setAttackType(4)}}>Bombardment (Weasels)</Button>
  </Tooltip>
    <Tooltip arrow='true' placement="top-start" title="Frontal Assault
Pro: Stoats have a favorable Offense to defense ratio. So you don't need quite as many as your opponent. They are also 250% more powerful than rats.
Con: Stoats are harder to build up quickly. You get less land than usual.">
      <Button disabled onClick={()=> {setAttackType(5)}}>Frontal Assault (Stoats)</Button>
    </Tooltip> 
   <Tooltip arrow='true' placement="top-start" title="Naval Assault
Pro: Few people have large Skiff armies, and skiffs have more offensive points per unit than anything else.
Con: Skiffs are hard to build up, and you need many more skiffs than your opponent to hold an advantage.">
       <Button disabled onClick={()=> {setAttackType(6)}}>Naval Assault (Skiffs)</Button>
    </Tooltip>
            </ButtonGroup>
            </Grid></Grid>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Unit</TableCell>
          <TableCell>Can Send</TableCell>
          <TableCell>Send</TableCell>
          <TableCell>Send All?</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
            <TableRow>
            <TableCell>Rats</TableCell>
            <TableCell>{user.warlord.rats.toLocaleString()}</TableCell>
            <TableCell><TextField id="filled-number" onChange={(e)=>handleRatsChange(e)} label="Send" type="number" variant="filled"></TextField></TableCell>
            <TableCell><Checkbox ></Checkbox></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Weasels</TableCell>
            <TableCell>{user.warlord.weasels.toLocaleString()}</TableCell>
            <TableCell><TextField id="filled-number" onChange={(e)=>handleWeaselsChange(e)} label="Send" type="number" variant="filled"></TextField></TableCell>
            <TableCell><Checkbox></Checkbox></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Stoats</TableCell>
            <TableCell>{user.warlord.stoats.toLocaleString()}</TableCell>
            <TableCell><TextField id="filled-number" onChange={(e)=>handleStoatsChange(e)} label="Send" type="number" variant="filled"></TextField></TableCell>
            <TableCell><Checkbox></Checkbox></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Skiffs</TableCell>
            <TableCell>{user.warlord.skiffs.toLocaleString()}</TableCell>
           <TableCell><TextField id="filled-number" onChange={(e)=>handleSkiffsChange(e)} label="Send" type="number" variant="filled"></TextField></TableCell>
           <TableCell><Checkbox ></Checkbox></TableCell>
          </TableRow>
      </TableBody>
    </Table>
    <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={(e)=>handleSubmit(e)}
          >
            Attack
          </Button>
          <Typography>
          Our Spies have found the Warlord's troop counts: {result ? attackwarlords[attacktarget-1].name : 0} 
           | Rats: {result ? attackwarlords[attacktarget-1].rats.toLocaleString() : 0} 
           | Weasels: {result ? attackwarlords[attacktarget-1].weasels.toLocaleString() : 0} 
           | Stoats: {result ? attackwarlords[attacktarget-1].weasels.toLocaleString() : 0} 
           | Skiffs: {result ? attackwarlords[attacktarget-1].skiffs.toLocaleString() : 0} <br></br>
            Our Attack Force: Rats: {rats} Weasels: {weasels} Stoats: {stoats} Skiffs: {skiffs}
          </Typography>
          {errors ? <p>{errors}</p> : <p>Errors shown here</p>}
          <Copyright/>
  </React.Fragment>
  )
}

export default Warlord