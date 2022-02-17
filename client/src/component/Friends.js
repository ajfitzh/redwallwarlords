import React, {useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Friend from "./Friend";

const Friends = ({ user }) => {
    const [friends, setFriends] = useState ([]);

    useEffect(() => {
        fetch("/users")
        .then((r) => r.json())
        .then(setFriends);
      }, []);

  return (
    <div>
        <h1> Friends List </h1>
      <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {friends.length > 0 ? (
        friends.map((friend) => (
         
           <Grid item xs={2} sm={4} md={4} key={friend.id}>
             <Link to={`/friends/${friend.id}`}>
               <Friend key={friend.id} user={user} friend={friend}/>
             </Link>
             
           </Grid>
         
        )))
       : (
        <>
        <h2> No Friend Found </h2>

          </>
      )}</Grid> 
    </div>
  )
}

export default Friends