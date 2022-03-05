import React, {useState, useEffect} from 'react'
import { InputLabel, Select, MenuItem, Button } from '@mui/material'
import { Link } from "react-router-dom"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './dashboard/Title';
import { Avatar } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styled, { ThemeProvider } from "styled-components";

const Bank = ({user}) => {
  return (
    <>
<Typography variant='h3'>Bank Of Cluny</Typography>
    <Grid
container
spacing={0}
direction="column"
alignItems="center"
justifyContent="center"
style={{ minHeight: '10vh' }}
>
    <Grid item xs={3}>
    <Avatar sx={{ width: 128, height: 128 }} variant="square" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fae%2F71%2Fb1%2Fae71b16cda95855247b8a7c95ee9609b.jpg&f=1&nofb=1"/>
</Grid></Grid>
      
      <Grid container spacing={2}>
  <Grid item xs={6}>
             <Table size="small">
                 <TableHead>Savings</TableHead>
                 <TableRow>
                     <TableCell>Interest APR: 3.015%</TableCell>
                 </TableRow>
                 <TableRow>
                     <TableCell>Maximum Balance:	$91,168,100</TableCell>
                  </TableRow>    
                  <TableRow>
                      <TableCell>Current Balance:	$0</TableCell> 
                  </TableRow>
                  <TableRow>
                      <TableCell>Est. Interest Gain:	$0</TableCell> 
                  </TableRow>
              </Table> 
      </Grid>
      <Grid item xs={6}>
             <Table size="small">
                 <TableHead>Loan</TableHead>
                 <TableRow>
                     <TableCell>Interest APR:	8.485%</TableCell>
                 </TableRow>
                 <TableRow>
                     <TableCell>Maximum Balance:	$45,584,050</TableCell>
                  </TableRow>    
                  <TableRow>
                     <TableCell>Current Balance:	$0</TableCell>
                  </TableRow>    
                  <TableRow>
                      <TableCell>Est. Interest Loss:	$0</TableCell> 
                  </TableRow>
              </Table> 
      </Grid>
      </Grid>
      <br></br>
      <Grid
container
spacing={2}
direction="column"
alignItems="center"
justifyContent="center"
style={{ minHeight: '10vh' }}
>
      <Grid item xs={12}>
             <Table size="small">
                 <TableRow>
                     <TableCell>   <TextField
          id="standard-number"
          label="Take Out A Loan"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        /><Button>Take Out Loan</Button></TableCell>
                  </TableRow>    
                  <TableRow>
                     <TableCell>   <TextField
          id="standard-number"
          label="Pay Toward A Loan"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        /><Button>Pay Towards Loan</Button></TableCell>
                  </TableRow>    
                  <TableRow>
                      <TableCell>   <TextField
          id="standard-number"
          label="Deposit Into Savings"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        /><Button>Deposit</Button></TableCell> 
                  </TableRow>
                  <TableRow>
                      <TableCell>   <TextField
          id="standard-number"
          label="Withdraw From Savings"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        /><Button>Withdraw</Button></TableCell> 
                  </TableRow>
              </Table> 
      </Grid>
      </Grid>
  </>
  )}

export default Bank;