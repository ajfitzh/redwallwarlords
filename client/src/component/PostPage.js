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
    const [blogpost, setBlogPost] = useState()

    useEffect(() => {
        fetch(`/posts/${id}`)
        .then((r) => r.json())
        .then( setBlogPost);
      }, []);


  return (
    (blogpost) ?
    <div> 
          <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={blogpost.user.avatar_url} alt={blogpost.user.username} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >

            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                <Avatar 
        sx={{ width: 56, height: 56 }} 
                alt={blogpost.user.username} 
        src={blogpost.user.avatar_url}
        />
        {blogpost.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              By {blogpost.user.username}: {blogpost.user.bio}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      elevation={8}
      >
    <Typography>{blogpost.content}</Typography>
    </Paper>
        <CommentSection user={user} blogpost={blogpost}/>
        </div>
        : 
    <p> No Post Loaded</p>


  )
}

export default PostPage