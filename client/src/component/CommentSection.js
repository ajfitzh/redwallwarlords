import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import AddComment from "./AddComment"

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
  );

const CommentSection = ({user, blogpost }) => {
const [comments, setComments] = useState([])

function CommentAdded(data) {
  console.log(data)  
  setComments(...comments, data);
  };

    useEffect(() => {
        // console.log(blogpost.comments[0].user.username)
      }, []);

  return (
    (blogpost) ?
    <div>
        <h2> Comments</h2>
        <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {blogpost.comments.map((comment) =>
        <Grid item xs={2} sm={4} md={4} key={comment.id}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <CardHeader 
                    avatar={<Avatar src={comment.user.avatar_url}/>}
                    title={comment.user.username}
                    />
                <Typography variant="h5">
                    {comment.text}
                </Typography>
        </CardContent>
            </Card>   
        </Grid>
        )}
        </Grid>
        <AddComment blogpost={blogpost.id} user={user} CommentAdded={CommentAdded}/>
    </div> 
    : 
    <p> No Comments Loaded</p>
  )
} 

export default CommentSection