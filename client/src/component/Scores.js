import React, {useState, useEffect} from 'react'
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './dashboard/Title';
import { Avatar } from '@mui/material';

// Generate Order Data
function createData(id, rank, warlord, land, networth, clan,race,location) {
  return { id, rank, warlord, land, networth, clan, race, location };
}

function preventDefault(event) {
  event.preventDefault([]);
}


export default function Scores() {
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
            <>
              <TableRow key={warlord.id}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{warlord.name} (#{warlord.id})<Avatar  sx={{ width: 24, height: 24 }} src={warlord.coa_url} /></TableCell>
              <TableCell>{warlord.land.toLocaleString()}</TableCell>
              <TableCell>${warlord.networth.toLocaleString()}</TableCell>
              <TableCell>{warlord.clan.abbreviation} <Avatar  sx={{ width: 24, height: 24 }} src={warlord.clan.banner_url} /></TableCell>
              <TableCell>{warlord.race.name}</TableCell>
              <TableCell>{warlord.location.name}</TableCell>
            </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}