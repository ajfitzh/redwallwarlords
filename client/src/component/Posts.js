import React, {useEffect, useState} from 'react'
import Post from "./Post"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
    .then((r) => r.json())
    .then(setPosts);
  }, []);

  return (
    <div>
      
      {posts.length > 0 ? (
        posts.map((post) => (
         <Grid container space={8} container spacing={4}>
           <Grid item xs={4}>
             <Post key={post.id} post={post}/>
           </Grid>
         </Grid> 
        )))
       : (
        <>
        <h2> No Posts Found </h2>

          </>
      )}
              <Button as={Link} to="/new">
          Make A New Post
          </Button>
    </div>
  )
}

export default Posts