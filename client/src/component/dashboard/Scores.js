import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Avatar } from '@mui/material';

// Generate Order Data
function createData(id, rank, warlord, land, networth, clan,race,location) {
  return { id, rank, warlord, land, networth, clan, race, location };
}

const rows = [
  
  createData(1, '1', "StormClaw", '31,121', 900000000, 'Delor', 'Rat', 'Southsward'),
  createData(2, '2', "Daughters of Delor", '33,121', 30000000, 'Delor', 'Ferret', 'Northlands'),
  createData(3, '3', 'Northern Hordes', '20,121', 30000000, 'Northern', 'Ferret', 'Mossflower'),
  createData(4, '4', 'wolf bite', '4,323', 20000000, 'Cluny', 'Lizard', 'Mossflower'),
  createData(5, '5', 'Peace Alliance', '21,121', 10000000, 'Northern', 'Weasel', 'Northlands'),
  createData(6, '6', 'Yellow Eyes', '8,121', 4000000, 'None', 'Ferret', 'Southsward'),
  createData(7, '7', "Ereptor's Raiders", '15,221', 30000000, 'None', 'Ferret', 'Northlands'),
  createData(8, '8', "Orcrist's Raiders", '10,723', 15000000, 'Northern', 'Stoat', 'Mossflower'),
  createData(9, '9', 'Mtsenskovite Army', '4,323', 200000, 'Empire', 'Lizard', 'Mossflower'),
  createData(10, '10', 'Ragefur', '4,121', 150000, 'Empire', 'Lizard', 'Mossflower'),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Scores() {
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.rank}</TableCell>
              <TableCell>{row.warlord}</TableCell>
              <TableCell>{row.land}</TableCell>
              <TableCell>{`$${row.networth}`}</TableCell>
              <TableCell>{row.clan}</TableCell>
              <TableCell>{row.race}</TableCell>
              <TableCell>{row.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}