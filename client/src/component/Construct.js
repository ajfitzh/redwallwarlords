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
import { Tooltip } from '@mui/material';
import { Grid } from '@mui/material';
import { unstable_ownerWindow } from '@mui/utils';
import TakeTurn from "./TakeTurn"

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



const Construct = ({user}) => {
  const [errors, setErrors] = useState([]);
  const [result, setResults] = useState();
  const [markets, setMarkets] = useState(0);
  const [tents, setTents] = useState(0);
  const [barracks, setBarracks] = useState(0);
  const [camps, setCamps] = useState(0);
  const [huts, setHuts] = useState(0);
  const [foragers, setForagers] = useState(0);
  const [towers, setTowers] = useState(0);
  const [totalbuildings, setTotalBuildings] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Construct button clicked!")
    setTotalBuildings((Number(markets) + Number(tents)+Number(barracks) + Number(camps) + Number(huts) + Number(foragers) + Number(towers)))
    setResults(true);
  }

  function handleMarketsChange(e){
    setMarkets(e.target.value);
  }
 function handleTentsChange(e){
    setTents(e.target.value)
  }
  function handleBarracksChange(e){
    setBarracks(e.target.value);
  }
  function handleCampsChange(e){
    setCamps(e.target.value)
  }
  function handleHutsChange(e){
    setHuts(e.target.value)
  }
  function handleForagersChange(e){
    setForagers(e.target.value)
  }
  function handleTowersChange(e){
    setTowers(e.target.value)
  }
  return (
    <React.Fragment>
      <Typography> Each structure consumes one acre of free land and costs $4,556 to build. <br></br>
                    You can build 146 structures per turn. <br></br>
                    With our resources, we can build on {user.warlord.freeland.toLocaleString()} acres.</Typography>
                    <Grid
container
spacing={0}
direction="column"
alignItems="center"
justifyContent="center"
style={{ minHeight: '10vh' }}
>
    <Grid item xs={3}>
      <Tooltip arrow placement="left-start" title="Constructing buildings grows your Warband immensely!">
        <Avatar sx={{ width: 128, height: 128 }} variant="square" src="https://img1.etsystatic.com/000/1/5819357/il_fullxfull.213780017.jpg"/>
      </Tooltip>
      </Grid>
      </Grid>
      {result ? <TakeTurn turns={Math.ceil((totalbuildings)/172)} construct={true} 
      user={user} action={0} warlord={user.warlord} newmarkets={markets} newtents={tents} newbarracks={barracks} newcamps={camps} newhuts={huts} newforagers={foragers} newtowers={towers}/> : <p>Turn Results Shown Here</p>}
    <Title>Construction</Title>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Structure</TableCell>
          <TableCell>Owned</TableCell>
          <TableCell>Can Build</TableCell>
          <TableCell>Build</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
     <TableRow>       
            <Tooltip arrow placement="left-start" title="MARKETS
                                                        Each market produces 85 workers.
                                                        Markets are used to produce money. These are the best building types if you want to make money, which is needed to fund your armies.">
  <TableCell>Markets</TableCell>
  </Tooltip>
            <TableCell>{user.warlord.markets ? user.warlord.markets.toLocaleString() : 0}</TableCell>
            <TableCell>{user.warlord.freeland.toLocaleString()}</TableCell>
            <TableCell><TextField onChange={handleMarketsChange} id="filled-number" label="Build" type="number" variant="filled"></TextField></TableCell>
          

          </TableRow>  
          <TableRow>
            <Tooltip arrow placement="left-start" title=" TENTS
>Each tent produces 120 workers
>Tents only make workers, however they produce more workers than any other building type. This makes them key to several strategies.
>Having more tents increases how quickly you can convert free land to buildings, and also increase your income through taxing workers.">
              <TableCell>Tents</TableCell>
            </Tooltip>
            <TableCell>{user.warlord.tents ? user.warlord.tents.toLocaleString() : 0}</TableCell>
            <TableCell>{user.warlord.freeland.toLocaleString()}</TableCell>
            <TableCell><TextField onChange={handleTentsChange}id="filled-number" label="Build" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
          <TableRow>
          <Tooltip arrow placement="left-start" title="BARRACKS
>Each barracks produces 100 workers
>Barracks convert workers to troops. This is good if you want to produce troops for attacking, defending, or just networth.">
              <TableCell>Barracks</TableCell>
            </Tooltip>
            <TableCell>{user.warlord.barracks ? user.warlord.barracks.toLocaleString() : 0}</TableCell>
            <TableCell>{user.warlord.freeland.toLocaleString()}</TableCell>
            <TableCell><TextField onChange={handleBarracksChange} id="filled-number" label="Build" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
          <TableRow>
          <Tooltip arrow placement="left-start" title="CAMPS
>Each camp produces 90 workers
>Camps increase how much money you get from selling goods to mercenaries, and decrease the cost of buying goods from mercenaries">
              <TableCell>Camps</TableCell>
            </Tooltip>
            <TableCell>{user.warlord.camps ? user.warlord.camps.toLocaleString() : 0}</TableCell>
            <TableCell>{user.warlord.freeland.toLocaleString()}</TableCell>
            <TableCell><TextField onChange={handleCampsChange} id="filled-number" label="Build" type="number" variant="filled"></TextField></TableCell>
            </TableRow>
            <TableRow>
            <Tooltip arrow placement="left-start" title="HUTS
>Each hut produces 60 workers
>Each hut produces 100 leaders, but can hold up to 175
>Huts are key to building leaders. These are used for defending your networth and increasing production (See: Learning Leaders).">
              <TableCell>Huts</TableCell>
            </Tooltip>
            <TableCell>{user.warlord.huts ? user.warlord.huts.toLocaleString() : 0}</TableCell>
            <TableCell>{user.warlord.freeland.toLocaleString()}</TableCell>
            <TableCell><TextField onChange={handleHutsChange} id="filled-number" label="Build" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
          <TableRow>
            <Tooltip arrow placement="left-start" title="FORAGERS
>Each forager holds 85 workers
>Foragers are used to produce food. This is a useful resource if you want to hold troops, or for selling on the market/mercenaries.">
             <TableCell>Foragers</TableCell>
            </Tooltip>
            <TableCell>{user.warlord.farms ? user.warlord.farms.toLocaleString() : 0}</TableCell>
            <TableCell>{user.warlord.freeland.toLocaleString()}</TableCell>
            <TableCell><TextField onChange={handleForagersChange} id="filled-number" label="Build" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
          <TableRow>
            <Tooltip arrow placement="left-start" title="TOWERS
>Each tower holds 50 workers
>Towers are useful for aiding in the defense of your land, but only if you have a strong army to begin with. It is only worth building towers at the very end of using turns.">
             <TableCell>Towers</TableCell>
            </Tooltip>
            <TableCell>{user.warlord.towers ? user.warlord.towers.toLocaleString() : 0}</TableCell>
            <TableCell>{user.warlord.freeland.toLocaleString()}</TableCell>
            <TableCell><TextField onChange={handleTowersChange} id="filled-number" label="Build" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
          <TableRow>
            <Tooltip arrow placement="left-start" title="FREE LAND
>Each acre holds 50 workers
>Free land is USELESS. Build on it!

">
               <TableCell>Free Land</TableCell>
            </Tooltip>
            <TableCell>{user.warlord.freeland.toLocaleString()}</TableCell>
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
            Construct
          </Button>
          <Button>Demolish</Button>
          <Typography>Error handling: Total: {totalbuildings} Markets: {markets} | Tents: {tents} | Barracks: {barracks} | Camps: {camps} | Huts: {huts} | Foragers:{foragers} | Towers: {towers}</Typography> 
          {errors ? <p>{errors}</p> : <p>Errors shown here</p>}
          <Copyright/>
  </React.Fragment>
  )
}

export default Construct