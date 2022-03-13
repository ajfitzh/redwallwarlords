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
import Construct from './Construct';



const TakeTurn = ({turns, user, action, warlord, newmarkets, newtents, newbarracks, newcamps, newhuts, newforagers, newtowers}) => {
const [results, setResults] = useState([])
const [errors, setErrors] = useState([])

    function patchWarlord() {
        let newturns = warlord.turns - turns;
        
          fetch(`/warlords/${user.warlord.id}`, {
            method: 'PATCH',
            
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            turns: newturns,
            cash: user.warlord.cash + cashgained,
            food: user.warlord.food + foodgained,
            rats: user.warlord.rats + totalbonks,
            weasels: user.warlord.weasels + totalweasels,
            stoats: user.warlord.stoats + totalstonks,
            skiffs: user.warlord.skiffs + totalskonks,
            land: Number(user.warlord.land + totallandgain),
            freeland: freelandupdate,
            loyalty: user.warlord.loyalty + totalloyaltonks,
            leaders: user.warlord.leaders + totallonks,
            workers: user.warlord.workers + popgained,
            networth: Math.abs((user.warlord.food+foodgained) * (user.warlord.cash + cashgained) * (user.warlord.land + totallandgain) / 10000000),
            markets: Number(user.warlord.markets) + Number(newmarkets),
            tents: Number(user.warlord.tents) + Number(newtents),
            barracks: Number(user.warlord.barracks) + Number(newbarracks),
            camps: Number(user.warlord.camps) + Number(newcamps),
            huts: Number(user.warlord.huts) + Number(newhuts),
            farms: Number(user.warlord.farms) + Number(newforagers),
            towers: Number(user.warlord.towers) + Number(newtowers),
        }),
        }).then((res) => {
          if(res.ok){
            res.json().then(console.log)
            setResults('Warlord Patched!')
          } else {
            res.json().then(console.log)
            setErrors('Error: Patch unable to be sent')
          }
          })
      }

    if(turns > user.warlord.turns){
        return "ERROR- Can't use more turns than you have!";
    }
    if(turns < 0){
        return "ERROR- Can't use negative turns!"
    }
    warlord = (user.warlord);
    let turnstaken = 0;
    let income = 0;
    let expenses = 0;
    let money = 0;
    let cashgained = 0;
    let landgained, totallandgain = 0;
    let foodproduction =0;
    let totalfoodproduction = 0;
    let foodconsumption = 0;
    let totalfoodconsumption = 0;
    let totalfood = 0;
    let foodgained = 0;
    let freelandupdate = 0;

    let workers, leaders, loyalty, rats, weasels, totalweasels = 0;
    let stoats, skiffs, totalloyalty = 0;
    let totalbonks = 0;
    let totalstonks = 0;
    let totalskonks =0;
    let totallonks = 0;
    let totalloyaltonks = 0;
    let totalexpenses = 0;
    let totalincome =0;
    let popbase = 0;
    let popgained = 0;

  
    while(turnstaken < turns){
        turnstaken++;
        let Trouble = 0; //1 for out of cash, 2 for refused loan, 4 for no food

        if(action == 1){
            let locationmultiplier = 0;
            if(warlord.location === 1){
                locationmultiplier = 1;
            }
            else if(warlord.location === 2){
                locationmultiplier = 1.4;
            }
            else if(warlord.location === 3){
                locationmultiplier = 1.8;
            }
            /// Remember to add racial bonus in later
            /// Equation should be something like: Math.ceil((1 / warlord.land * .00022 + 0.25) * 20 * locationmultiplier);
            landgained = 25;
            totallandgain +=landgained;
            // warlord.freeland += landgained;
            // warlord.land += landgained;
        }
        //Income Section
        ///round(((25*1(markets/land ( racialbonus) * taxrate * health * workers * markets * 500/size))))
        income = 35 * (user.warlord.markets ? user.warlord.markets : 1);
        if(action == 2){
            income = Math.round(income*1.25);
        }
        totalincome += income;

        //Expenses
        ///expenses = Math.round((rat*1) + (weasels * 2.5) + (stoats * 4) + (skiffs * 7) + (land *  8) + (leaders * 0.5) + (food * 0.01))
        ///add in expensesbonus = (1-racialcostbonus) + (camps/land)
        /// if (expensesbonus > 0.5) {expensesbonus = 0.5}
        expenses= (10 * Math.floor((user.warlord.rats + user.warlord.stoats + user.warlord.weasels + user.warlord.skiffs)/100));
        totalexpenses += expenses;

        //Net Income
        money = income - expenses;
        cashgained += money;
        // warlord.cash += money;

        //Build units
        rats = 25 * (user.warlord.barracks ? user.warlord.barracks : 1);
        totalbonks += rats;
        weasels = 25 * (user.warlord.barracks ? user.warlord.barracks : 1);
        // warlord.weasels += weasels;
        totalweasels += weasels;
        stoats = 10 * (user.warlord.barracks ? user.warlord.barracks : 1);
        // warlord.stoats += stoats;
        totalstonks += stoats;
        skiffs = 5 * (user.warlord.barracks ? user.warlord.barracks : 1);
        // warlord.skiffs += skiffs;
        totalskonks += skiffs;
        leaders = 20 * (user.warlord.huts ? user.warlord.huts : 1);
        // warlord.leaders += leaders;
        totallonks += leaders;


        //update Food production
        foodproduction = 65 * (user.warlord.farms ? user.warlord.farms : 1);
        
        foodconsumption = ((10+(30 * Math.floor((user.warlord.rats + user.warlord.stoats + user.warlord.weasels + user.warlord.skiffs)/500))));
        totalfoodconsumption += foodconsumption;
        if(action === 3) {
            foodproduction = foodproduction * 1.25
        }
        totalfoodproduction += foodproduction;
        totalfood = foodproduction - foodconsumption;
        // warlord.food +=totalfood;
        foodgained += totalfood;

        //Update Health (not tested yet)
        if(warlord.health < 100){
            warlord.health++;
        }
        //Add Taxes (not implemented yet)
        //Update Population
        popbase = 500 + (user.warlord.tents ? user.warlord.tents : 1);
        popgained += popbase;
        //Check to make sure population doesn't outgrow land (not implemented yet)
        
        loyalty = 100;

        if(action === 4) {
            loyalty = loyalty * 1.5;
        } 
        // warlord.loyalty += loyalty;
        totalloyaltonks += loyalty;
        //Add Wizards function (not implemented yet)
        //Send PATCH to server
        console.log("Turns Used:")
        console.log(turns)
        if(action===1) {
             freelandupdate = Number(user.warlord.freeland + totallandgain)
            }
        else{
            freelandupdate = Number(user.warlord.land - newtowers - newforagers 
            - newhuts - newcamps - newbarracks
            - newtents - newmarkets)
        };
    }
    
        
    return (
    <React.Fragment>
        <Typography variant='h5'> After {turns} turns spent...</Typography>
    <Grid container spacing={2}>
    <Grid item xs={4}>
               <Table size="small">
                   <TableHead>Economic Status</TableHead>
                   <TableRow>
                       <TableCell>Income: <Typography variant='h7' style={{color:'green'}}>+${totalincome.toLocaleString()}</Typography></TableCell>
                   </TableRow>
                   <TableRow>
                       <TableCell>Expenses: <Typography variant='h7' style={{color:'red'}}>-${totalexpenses.toLocaleString()}</Typography></TableCell>
                    </TableRow>    
                    <TableRow>
                        <TableCell>Net: <Typography variant='h7' >${cashgained.toLocaleString()}</Typography></TableCell> 
                    </TableRow>
                </Table> 
        </Grid>
        <Grid item xs={4}>
               <Table size="small">
                   <TableHead>Agricultural Status</TableHead>
                   <TableRow>
                       <TableCell>Produced: <Typography variant='h7' style={{color:'green'}}>+{totalfoodproduction.toLocaleString()}</Typography></TableCell>
                   </TableRow>
                   <TableRow>
                       <TableCell>Consumed: <Typography variant='h7' style={{color:'red'}}>-{totalfoodconsumption.toLocaleString()}</Typography></TableCell>
                    </TableRow>    
                    <TableRow>
                        <TableCell>Net: <Typography variant='h7'>{foodgained.toLocaleString()}</Typography> </TableCell> 
                    </TableRow>
                </Table> 
        </Grid>
        <Grid item xs={4}>
               <Table size="small">
                   <TableHead>Population and Military Status</TableHead>
                   <TableRow>
                       <TableCell>Workers: <Typography variant='h7' style={{color: 'green'}}>+{popgained.toLocaleString()}</Typography> </TableCell>
                   </TableRow>
                   <TableRow>
                       <TableCell>Leaders: <Typography variant='h7' style={{color: 'green'}}>+{totallonks.toLocaleString()}</Typography></TableCell>
                    </TableRow>    
                    <TableRow>
                        <TableCell>Loyalty: <Typography variant='h7' style={{color: 'green'}}>+{totalloyaltonks.toLocaleString()}</Typography></TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Rats: <Typography variant='h7' style={{color: 'green'}} >+{totalbonks.toLocaleString()}</Typography></TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Weasels: <Typography variant='h7' style={{color: 'green'}}>+{totalweasels.toLocaleString()}</Typography></TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Stoats: <Typography variant='h7' style={{color: 'green'}}>+{totalstonks.toLocaleString()}</Typography></TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>Skiffs: <Typography variant='h7' style={{color: 'green'}}>+{totalskonks.toLocaleString()}</Typography></TableCell> 
                    </TableRow>
                </Table> 
        </Grid>
        </Grid>
        <Button onClick={()=>patchWarlord()}> Send Info To Rails/Ruby</Button>
    <Typography> {totallandgain ? <><br></br><Typography variant="h4">You have gained {totallandgain} acres!</Typography></>  : <p></p>}</Typography>
    </React.Fragment>
  )
}
// {turns ? turns : 0} turns, Action: 
//     {action ? action : "No Action"} passed into TakeTurn function. 
//     Your warlord's location is {warlord ? warlord.location_id : "None"},
//      you have {totallandgain} land gained
//      your income is ${income}, expenses are {expenses} and your total cashgained is {cashgained}
export default TakeTurn