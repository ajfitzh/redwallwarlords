import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Friend = ({ friend, user }) => {
     return (
         
        (friend.username != user.username) ? 
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={friend.username}
            height="140"
            image={friend.avatar_url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {friend.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {friend.bio}
            </Typography>
          </CardContent>
        </Card> : null
      );
}

export default Friend