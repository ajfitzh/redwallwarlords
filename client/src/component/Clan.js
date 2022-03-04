import React, {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SecurityIcon from '@mui/icons-material/Security';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PeopleIcon from '@mui/icons-material/People';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Redwall Warlords v2
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Clan({user}) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleCreateSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData(e.currentTarget);
    console.log({
      founder_id: {user}.user.id,
      title: data.get('title'),
      abbreviation:data.get('abbreviation'),
      password:data.get('password')
    })
    fetch("/clans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        founder_id: {user}.user.id,
        title: data.get('title'),
        abbreviation:data.get('abbreviation'),
        password:data.get('password')
      }),
    }).then((r) => {
      if (r.ok) {
        setIsLoading(false);
        navigate("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleJoinSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData(e.currentTarget);
    console.log({
      member_id: {user},
      title: data.get('title'),
      password:data.get('password')
    })
    fetch("/clans", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        member_id: {user}.user.id,
        title: data.get('title'),
        password:data.get('password')
      }),
    }).then((r) => {
      if (r.ok) {
        setIsLoading(false);
        navigate("/");
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <SecurityIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Clan
          </Typography>
          <Box component="form" onSubmit={handleCreateSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Clan Title"
              name="title"
              autoComplete="title"
              autoFocus
            />
            <TextField
              margin="normal"
              name="abbreviation"
              label="Clan Abbreviation"
              type="abbreviation"
              id="abbreviation"
              autoComplete="abbreviation"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Clan
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PeopleIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Join Clan
          </Typography>
          <Box component="form" onSubmit={handleJoinSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Clan Title"
              name="title"
              autoComplete="title"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Join Clan
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}