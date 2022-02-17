import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import CommentSection from "./CommentSection";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { outlinedInputClasses } from '@mui/material';


const PostPage = ({user}) => {
    const { id } = useParams()
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch(`/users/`)
        .then((r) => r.json())
        .then((r) => 
        console.log(r.find(friend => friend.id === `${id}`)));
      }, []);

      

  return (
    (id) ?
    <div> 
       <Typography>{id}</Typography>
        </div>
        : 
    <p> No Friend Loaded</p>


  )
}

export default PostPage