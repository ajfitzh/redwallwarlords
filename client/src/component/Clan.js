import React, {useState, useEffect} from 'react'
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
import { ButtonGroup } from '@mui/material';

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
  const [clans, setClans] = useState([])
  const [clanjoin,setClanJoin] = useState('5')
  const navigate = useNavigate();

  let clancounter = 0;

 
  let clanid = 0;
  useEffect(() => {
    fetch("/clans")
    .then((r) => r.json())
    .then(setClans);    
  }, []);

  clans.map((clan, index) => {
    clancounter++; 
    })

  function handleCreateSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData(e.currentTarget);
    console.log({
      founder_id: {user}.user.id,
      title: data.get('title'),
      abbreviation:data.get('abbreviation'),
      banner_url:"https://cdn.imgbin.com/16/9/24/imgbin-red-fox-weasels-ferret-ferahgo-the-assassin-redwall-ferret-uhMyBcaWCsCVJ4dWAwJQxxgCL.jpg",
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
        password:data.get('password') }),
        banner_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fskjalden.com%2Fwp-content%2Fuploads%2F2018%2F10%2Fraven-banner.jpg&f=1&nofb=1"
    }).then((r) => {
      if (r.ok) {
        setIsLoading(false);
        r.json().then((r)=>console.log(r))
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    fetch(`/warlords/${user.warlord.id}`, {
      method: 'PATCH',
      
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      clan_id: (clanjoin)
    }),
  }).then((res) => {
    if(res.ok){
      res.json().then(console.log)
      setErrors('Warlord Patched!')
    } else {
      res.json().then(console.log)
      setErrors('Error: Patch unable to be sent')
    }
    })}


  function handleJoinSubmit(e) {
    e.preventDefault();
    console.log(clanjoin+1)
    fetch(`/warlords/${user.warlord.id}`, {
      method: 'PATCH',
      
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      clan_id: (clanjoin+1)
    }),
  }).then((res) => {
    if(res.ok){
      res.json().then(console.log)
      setErrors('Warlord Patched!')
      // navigate("/summary");
    } else {
      res.json().then(console.log)
      setErrors('Error: Patch unable to be sent')
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
            Join Clan {clanjoin}
          </Typography>
          <Typography>Total Clans: {clancounter}</Typography>
          
          <Box component="form" onSubmit={handleJoinSubmit} noValidate sx={{ mt: 1 }}>
            <ButtonGroup>
              {clans.map((clan, index) => <Button onClick={()=>setClanJoin(index)} key={index}>{clan.abbreviation}</Button>)}
            </ButtonGroup>
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