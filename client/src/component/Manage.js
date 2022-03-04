import React, {useState, useEffect} from 'react'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
const Manage = ({user}) => {
const [errors, setErrors] = useState('')
  function handleDelete(){
    fetch(`/warlords/${user.warlord.id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if(res.ok){
        res.json().then(console.log)
        setErrors('Warlord Successfully Deleted!')
      } else {
        res.json().then(console.log)
        setErrors('Error: Warlord unable to be deleted')
      }
    })
  }

  function handleAddTurns(){
    fetch(`/warlords/${user.warlord.id}/addtenturns`, {
      method: 'PATCH'
    })
    .then(res => {
    if(res.ok){
      res.json().then(console.log)
      setErrors('Ten Turns Successfully Added!')
    } else {
      res.json().then(console.log)
      setErrors('Error: Turns unable to be deleted')
    }
    })
  }

  return (
    <div>Manage My Account
      <Typography> Your Current Account Name: {user.username}</Typography>
      <Typography> Your Current Warlord ID: {user.warlord ? user.warlord.id : "None"} </Typography>
      <Typography> Your Current Warlord: {user.warlord ? user.warlord.name : "None"}
      </Typography>
    <Button onClick={handleDelete}> Delete Warlord </Button>

    <Typography> Cheat Menu </Typography>
    <Button onClick={handleAddTurns}>Add Ten Turns</Button><br></br>
    {errors}
    </div>
  )
}

export default Manage