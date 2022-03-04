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



const Market = () => {
  const [errors, setErrors] = useState([]);
  return (
    <React.Fragment>
    <Title>Public Market</Title>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Unit</TableCell>
          <TableCell>Owned</TableCell>
          <TableCell>Available</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Can Buy</TableCell>
          <TableCell>Buy</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
            <TableRow>
            <TableCell>Rats</TableCell>
            <TableCell>100</TableCell>
            <TableCell>30,000,000</TableCell>
            <TableCell>$672</TableCell>
            <TableCell>2,000</TableCell>
            <TableCell><TextField id="filled-number" label="Buy Rats" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Weasels</TableCell>
            <TableCell>50</TableCell>
            <TableCell>21,000,000</TableCell>
            <TableCell>$6,543</TableCell>
            <TableCell>1,000</TableCell>
            <TableCell><TextField id="filled-number" label="Buy Weasels" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Stoats</TableCell>
            <TableCell>20</TableCell>
            <TableCell>15,000,000</TableCell>
            <TableCell>$12,000</TableCell>
            <TableCell>500</TableCell>
            <TableCell><TextField id="filled-number" label="Buy Stoats" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Skiffs</TableCell>
            <TableCell>10</TableCell>
            <TableCell>297,000</TableCell>
            <TableCell>$3,000</TableCell>
            <TableCell>333</TableCell>
            <TableCell><TextField id="filled-number" label="Buy Skiffs" type="number" variant="filled"></TextField></TableCell>
            </TableRow>
            <TableRow>
            <TableCell>Food</TableCell>
            <TableCell>100,000</TableCell>
            <TableCell>7,500,000</TableCell>
            <TableCell>$1,000</TableCell>
            <TableCell>1,000</TableCell>
            <TableCell><TextField id="filled-number" label="Buy Food" type="number" variant="filled"></TextField></TableCell>
          </TableRow>
      </TableBody>
    </Table>
    <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Purchase
          </Button>
          {errors ? <p>{errors}</p> : <p>Errors shown here</p>}
          <Copyright/>
  </React.Fragment>
  )
}

export default Market