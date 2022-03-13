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
///Rats: 2:1
//Weasels: 3:5
////Stoats: 5:3
//Skiffs: 6:8

const Attack = ({turns, user, enemy, attacktype, attackwarlords}) => {
    const [results, setResults] = useState('')
    const [errors, setErrors] = useState('')
    let enemylandlosses = 0;
    let userlandgain = 0;
    let enemycashlosses = 0;
    let usercashgain = 0;
    let enemyfoodlosses = 0;
    let userfoodgain = 0;
    let ratlosses = 0;
    let weasellosses = 0;
    let stoatlosses = 0;
    let skifflosses = 0;
    let enemyratlosses = 0;
    let enemyweasellosses = 0;
    let enemystoatlosses = 0;
    let enemyskifflosses = 0;

    function patchWarlords(){
        patchUserWarlord();
        // patchEnemy();
    }

    if(attacktype==1){
        return <>
        <Typography>"Attack 1 (Standard Attack) against {attackwarlords[enemy].name}"</Typography>
        <Button onClick={()=>patchWarlords()}> Send Attack Info To Rails/Ruby</Button>
        </>
    }
    else if(attacktype==2){
        return <>
        <Typography>"Attack 2 (Surprise Attack) against {attackwarlords[enemy].name}!"</Typography>
        <Button onClick={()=>patchWarlords()}> Send Attack Info To Rails/Ruby</Button></>
    }
    else if(attacktype==3){
      <Typography> Guerrilla Strike!</Typography>
        if(user.warlord.rats*2 > attackwarlords[enemy].rats) {
        ratlosses = Math.ceil(user.warlord.rats * 0.05);
        userlandgain = Math.ceil(attackwarlords[enemy].land * 0.05);
        enemylandlosses = Math.ceil(attackwarlords[enemy].land * 0.05);
        enemyratlosses = Math.ceil(attackwarlords[enemy].rats * 0.05);

        return (<><Typography>"Guerilla Strike against {attackwarlords[enemy].name}!"</Typography>
                <Grid
container
spacing={0}
direction="column"
alignItems="center"
justifyContent="center"
style={{ minHeight: '10vh' }}
>
    <Grid item xs={3}>
    <Avatar sx={{ width: 700, height: 175 }} variant="square" 
    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F13%2F8e%2Ff6%2F138ef62261572a59f6604e09783ef4b0.jpg&f=1&nofb=1"
    />
    

</Grid></Grid>
 <Typography variant="h5" color='green'>Breakthrough!</Typography><Typography> You captured {userlandgain} land and lost {ratlosses} rats! You killed {enemyratlosses} of your enemy's rats in the Assault!</Typography><Button onClick={()=>patchWarlords()}> Send Attack Info To Rails/Ruby</Button> </>)}
         else if(user.warlord.rats*2 <= attackwarlords[enemy].rats) {
          ratlosses = Math.ceil(user.warlord.rats * 0.10);
          userlandgain = 0;
          enemylandlosses= 0;
          enemyratlosses = Math.ceil(attackwarlords[enemy].rats * 0.00015)
          
          return <>
          <Typography>"Attack 3 (Guerilla Strike) against {attackwarlords[enemy].name}!"</Typography>
          <Grid
container
spacing={0}
direction="column"
alignItems="center"
justifyContent="center"
style={{ minHeight: '10vh' }}
>
    <Grid item xs={3}>
    <Avatar sx={{ width: 700, height: 200 }} variant="square" 
    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-Qr5Yn7OrsDg%2FTVVBmnXbwTI%2FAAAAAAAADRI%2F5umb6Mm8oiI%2Fs1600%2FRedwall_Detail_1.jpg&f=1&nofb=1"
    />
    

</Grid></Grid>
          <Typography variant='h5' color='red'>Failure!</Typography><Typography> You lost {ratlosses.toLocaleString()} rats! You killed {enemyratlosses.toLocaleString()} of your enemy's rats in the Assault!</Typography><Button onClick={()=>patchWarlords()}> Send Attack Info To Rails/Ruby</Button></>}
    }
    else if(attacktype==4){
        return <>
        <Typography>"Attack 4 (Bombardment) against {attackwarlords[enemy].name}!"</Typography>
        {user.warlord.weasels *3 > attackwarlords[enemy].weasels *5 ? <Typography>Breakthrough! You captured land!</Typography> : <Typography>Failure! You suck!</Typography>}
        <Button onClick={()=>patchWarlords()}> Send Attack Info To Rails/Ruby</Button></>
    }
    else if(attacktype==5){
        return <>
        <Typography>"Attack 5 (Frontal Assault) against {attackwarlords[enemy].name}!"</Typography>
        {user.warlord.stoats*5 > attackwarlords[enemy].stoats*3 ? <Typography>Breakthrough! You captured land!</Typography> : <Typography>Failure! You suck!</Typography>}
        <Button onClick={()=>patchWarlords()}> Send Attack Info To Rails/Ruby</Button></>
    }
    else if(attacktype==6){
        return <>
        <Typography>"Attack 6 (Naval Assault) against {attackwarlords[enemy].name}"</Typography>
        {user.warlord.skiffs*6 > attackwarlords[enemy].skiffs*8 ? <Typography>Breakthrough! You captured land!</Typography> : <Typography>Failure! You suck!</Typography>}
        <Button onClick={()=>patchWarlords()}> Send Attack Info To Rails/Ruby</Button>
        </>
    }

    function patchUserWarlord() {
          fetch(`/warlords/${user.warlord.id}`, {
            method: 'PATCH',
            
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            health: user.warlord.health-1,
            cash: user.warlord.cash + usercashgain,
            food: user.warlord.food + userfoodgain,
            rats: user.warlord.rats + ratlosses,
            weasels: user.warlord.weasels + weasellosses,
            stoats: user.warlord.stoats + stoatlosses,
            skiffs: user.warlord.skiffs + skifflosses,
            land: Number(Number(user.warlord.land) + Number(userlandgain)),
            freeland: Number(user.warlord.freeland) + Number(userlandgain),
          
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
      function patchEnemy() {
          fetch(`/warlords/${enemy}`, {
            method: 'PATCH',
            
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cash: enemy.cash - enemycashlosses,
            food: enemy.food - enemyfoodlosses,
            rats: enemy.rats - enemyratlosses,
            weasels: enemy.weasels - enemyweasellosses,
            stoats: enemy.stoats - enemystoatlosses,
            skiffs: enemy.skiffs - enemyskifflosses,
            land: Number(enemy.land - enemylandlosses),
            networth: Number(enemy.networth) - 1000000
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
  return (
    <div>Attack: {attacktype} on Warlord: {attackwarlords[enemy].id}</div>
  )
}

export default Attack