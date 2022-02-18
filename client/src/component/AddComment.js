import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const AddComment = ({ user, blogpost, CommentAdded }) => {
    const [text, setText] = useState("I love Pogs.");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const theme = createTheme();

    const id = blogpost

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = new FormData(e.currentTarget);
        setText(data.get('text'));
        console.log({
            text: data.get('text'),
            post_id: id
            
        })
        fetch("../comments/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: data.get('text'),
            post_id: id
          }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            // const text = e.currentTarget.get('text');
            CommentAdded(data.get('text'));
            navigate(`/blogs/${id}`);
            window.location.reload();
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Add Your Own Comment
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="text"
                label="Write Your Comment Here"
                type="text"
                id="text"
                autoComplete="text"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit Post
          </Button>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
);
    }

export default AddComment