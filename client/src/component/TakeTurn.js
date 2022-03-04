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

const TakeTurn = ({turns, user}) => {
  
    return (
    <React.Fragment>
    <Grid container spacing={2}>
    <Grid item xs={4}>
               <Table size="small">
                   <TableHead>Economic Status</TableHead>
                   <TableRow>
                       <TableCell>Income: $81,361</TableCell>
                   </TableRow>
                   <TableRow>
                       <TableCell>Consumed: $6,049</TableCell>
                    </TableRow>    
                    <TableRow>
                        <TableCell>Net: <Typography variant='h7' style={{color: 'green'}}>+$75,312</Typography></TableCell> 
                    </TableRow>
                </Table> 
        </Grid>
        <Grid item xs={4}>
               <Table size="small">
                   <TableHead>Agricultural Status</TableHead>
                   <TableRow>
                       <TableCell>Produced: 18635</TableCell>
                   </TableRow>
                   <TableRow>
                       <TableCell>Consumed: 143</TableCell>
                    </TableRow>    
                    <TableRow>
                        <TableCell>Net: <Typography variant='h7' style={{color: 'green'}}>+18,492</Typography> </TableCell> 
                    </TableRow>
                </Table> 
        </Grid>
        <Grid item xs={4}>
               <Table size="small">
                   <TableHead>Population and Military Status</TableHead>
                   <TableRow>
                       <TableCell>Peasants: <Typography variant='h7' style={{color: 'green'}}>+567</Typography> </TableCell>
                   </TableRow>
                   <TableRow>
                       <TableCell></TableCell>
                    </TableRow>    
                    <TableRow>
                        <TableCell></TableCell> 
                    </TableRow>
                </Table> 
        </Grid>
        </Grid>
    <Typography>{turns} passed into TakeTurn function. </Typography>
    </React.Fragment>
  )
}

export default TakeTurn