import React from 'react'
import { InputLabel, Select, MenuItem, Button } from '@mui/material'
import { Link } from "react-router-dom"


const Home = ({user }) => {
  console.log({user})
  return (
    <div id= "home">
      <div id= "welcome" >
        <h2>Welcome to Redwall Warlords v2</h2>
        
        {{user}.user.warlord ? <><p>Warlord exists!</p></> : <><p> No warlord exists yet in the land of Redwall. </p><Link to='/createwarlord'>
          <Button>Create Your New Warlord</Button>
        </Link></>}
        
      </div>

    </div>
  )
}

export default Home