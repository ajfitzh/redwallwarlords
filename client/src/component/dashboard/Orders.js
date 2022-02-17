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
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Aug, 1997',
    'Elvis Presley Holographic Pog',
    'Tupelo, MS',
    '1',
    0.23,
  ),
  createData(
    1,
    '16 Mar, 1993',
    'Paul McCartney 1st Edition',
    'London, UK',
    '1',
    1.99,
  ),
  createData(2, '16 Mar, 1992', 'The Hulk 1st. ed.', 'Boston, MA', '10', 0.21),
  createData(
    3,
    '1 Dec, 2021',
    'Michael Jackson Holographic',
    'Virginia Beach, VA',
    '1',
    .01,
  ),
  createData(
    4,
    '24 Feb, 1995',
    "PokePog (Knockoff)",
    'Long Branch, NJ',
    '20,000',
    0.001,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>My PogFolio</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Acquired</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Origin</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell align="right">Current Market Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" onClick={preventDefault} sx={{ mt: 3 }}>
        See more of your Pogs          
      </Link>
    </React.Fragment>
  );
}