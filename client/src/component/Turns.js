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
import ButtonGroup from '@mui/material/ButtonGroup';
import TakeTurn from "./TakeTurn"


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
Redwall Warlords v2        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const theme = createTheme();

const Turns = ({ user}) => {
  const [turns, setTurns] = useState();
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [turnuse, setTurnUse] = useState('');
  const [result, setResults] = useState(false);
  const navigate = useNavigate();


function handleSubmit(e) {
  e.preventDefault();
  setResults(true);
    fetch(`/warlords/${user.warlord.id}`, {
      method: 'PATCH',
    
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // turns: turns
    }),
  }).then((res) => {
    if(res.ok){
      res.json().then(console.log)
      setResults('Warlord Patched!')
    } else {
      res.json().then(console.log)
      setErrors('Error: Turns Patch unable to be sent')
    }
    })
}
  function handleTurnsChange(e){
    setTurnUse(e.target.value);
    console.log("turns changed!")
}

function handleInputChange(e){
  setTurns(e.target.value);
}

  return (
<ThemeProvider theme={theme}>
    <Container component="main">
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
          Use Turns
        </Typography>
        {result ? <TakeTurn turns={turns} user={user} /> : <p>Turn Results Shown Here</p>}
        
        <Typography component="h2" variant="h6">
          You have: {(user.warlord.turns) ? user.warlord.turns : null} turns left.
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography> How Do You Want To Use Your Turns?: {turnuse} </Typography>
            <Grid item xs={12}>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={()=> { setTurnUse(1)}}>Forage (1)</Button>
                <Button onClick={()=> { setTurnUse(2)}}>Scout (2)</Button>
                <Button onClick={()=> { setTurnUse(3)}}>Earn Loyalty (3)</Button>
                <Button onClick={()=> { setTurnUse(4)}}>Loot (4)</Button>
            </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="turns"
                label="How Many Turns?"
                type="turns"
                id="turns"
                autoComplete="turns"
                // onChange={handleInputChange}
                // value={turns}
                />
                </Grid>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={()=>handleInputChange}
          >
            Use Turns
          </Button>
          {errors ? <p>{errors}</p> : <p>Errors shown here</p>}
          
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  </ThemeProvider>
  )
}

export default Turns