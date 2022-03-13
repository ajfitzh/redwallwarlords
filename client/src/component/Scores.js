import React, {useState, useEffect} from 'react'
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './dashboard/Title';
import { Avatar } from '@mui/material';
import { Card } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

// Generate Order Data
function createData(id, rank, warlord, land, networth, clan,race,location) {
  return { id, rank, warlord, land, networth, clan, race, location };
}

function preventDefault(event) {
  event.preventDefault([]);
}


export default function Scores({ user }) {
  const [warlords, setWarlords] = useState([]);

useEffect(() => {
  fetch("/warlords")
  .then((r) => r.json())
  .then(warlords => {
    
    warlords.sort(function(a,b){
      if(a.networth < b.networth) {return 1}
      if(a.networth > b.networth) {return -1}
      else {return 1};
    });
    setWarlords(warlords)
    console.log(warlords)})
  
}, []);

let counter = 1;
  return (
    <React.Fragment>
      <Title>Scores Listing</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Warlord</TableCell>
            <TableCell>Land</TableCell>
            <TableCell>Networth</TableCell>
            <TableCell>Clan</TableCell>
            <TableCell>Race</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {warlords.map((warlord, index) => (
            (warlord.id == user.warlord.id) ?
              <>
              <TableRow key={warlord.id} style={{backgroundColor:'lightblue'}}>
              <TableCell>{(index+1) == 1 ? <EmojiEventsIcon/> : <p></p>}{index+1}</TableCell>
              <TableCell><CardHeader avatar={<Avatar src={warlord.coa_url}/>} title={index == 0 ? "Emperor" : ""} subheader={warlord.name}/> </TableCell>
              <TableCell>{warlord.land.toLocaleString()}</TableCell>
              <TableCell>${warlord.networth.toLocaleString()}</TableCell>
              <TableCell><CardHeader avatar={<Avatar src={(warlord.clan.id != 1) ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHLB1.cYTbjzuK1RjSsppq6xz0XXaT%2FThe-King-of-Scots-Scottish-Royal-Flag-Banner-Royal-Standard-of-Scotland-Flag-Banner-New-3x5ft.jpg&f=1&nofb=1" : ""}/>} title={warlord.clan.abbreviation}/></TableCell>
              <TableCell>{warlord.race.name}</TableCell>
              <TableCell>{warlord.location.name}</TableCell>
            </TableRow>
            </>
            :
            <>
              {(warlord.id == 1) ? 
              <TableRow key={warlord.id} style={{backgroundColor:'green'}}>
              <TableCell>{(index+1) == 1 ? <EmojiEventsIcon/> : <p></p>}{index+1}</TableCell>
              <TableCell><CardHeader avatar={<Avatar src={warlord.coa_url}/>} title={index == 0 ? "Emperor" : ""} subheader={warlord.name} />   </TableCell>
              <TableCell>{warlord.land.toLocaleString()}</TableCell>
              <TableCell>${warlord.networth.toLocaleString()}</TableCell>
              <TableCell><CardHeader avatar={<Avatar src={warlord.clan.banner_url}/>} title={warlord.clan.abbreviation} /></TableCell>
              <TableCell>{warlord.race.name}</TableCell>
              <TableCell>{warlord.location.name}</TableCell>
            </TableRow>
            : 
            <>
            <TableRow key={warlord.id}>
              <TableCell>{(index+1) == 1 ? <EmojiEventsIcon/> : <p></p>}{index+1}</TableCell>
              <TableCell><CardHeader avatar={<Avatar src={warlord.coa_url}/>} title={index == 0 ? "Emperor" : ""} subheader={warlord.name}/>   </TableCell>
              <TableCell>{warlord.land.toLocaleString()}</TableCell>
              <TableCell>${warlord.networth.toLocaleString()}</TableCell>
              <TableCell><CardHeader avatar={<Avatar src={warlord.clan.banner_url}/>} title={warlord.clan.abbreviation} /></TableCell>
              <TableCell>{warlord.race.name}</TableCell>
              <TableCell>{warlord.location.name}</TableCell>
            </TableRow>
            </>}
            </>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}