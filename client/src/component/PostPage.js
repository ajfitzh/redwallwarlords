import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import CommentSection from "./CommentSection"


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
        <Avatar 
        sx={{ width: 56, height: 56 }} 
                alt={blogpost.user.username} 
        src={blogpost.user.avatar_url}
        />
        <h1>{blogpost.title}</h1>
        <p>{blogpost.content}</p>
        <CommentSection user={user} blogpost={blogpost}/>
        </div>
        : 
    <p> No Post Loaded</p>


  )
}

export default PostPage