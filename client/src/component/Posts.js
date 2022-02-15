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
      <h1>Posts</h1>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {posts.length > 0 ? (
        posts.map((post) => (
           <Grid item xs={2} sm={4} md={4}>
             <Post key={post.id} post={post}/>
           </Grid>
        )) )
       : (
        <>
        <h2> No Posts Found </h2>

          </>
      )}
      </Grid>
              <Button as={Link} to="/new">
          Make A New Post
          </Button>
    </div>
  )
}

export default Posts