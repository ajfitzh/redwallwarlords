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
import Tooltip from '@mui/material/Tooltip';


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

function handleSubmit(e) {
  e.preventDefault();
  console.log("nothing programmed yet")
}

const theme = createTheme();

const Construct = ({ user}) => {
  const [content, setContent] = useState("I love Pogs.");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [turnuse, setTurnUse] = useState('');
  const navigate = useNavigate();

  function handleTurnsChange(e){
    setTurnUse(e.target.value);
    console.log("turns changed!")
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
          Construction
        </Typography>
        <Typography component="h2" variant="h6">
          You have: {(user.warlord.turns) ? user.warlord.turns : 0} turns, and {(user.warlord.land) ? user.warlord.land : 0} free acres.
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Tooltip title="Markets are used to produce money, which is needed to fund your armies.">
              <Grid item xs={12} sm={6}>
                <TextField
                margin="normal"
                  fullWidth
                  id="filled-number"
                  label="Huts"
                  type="number"
                  variant="filled"
                />     
          </Grid>
          </Tooltip>
          <Tooltip title="Tents house your workers and peasants- it increases taxes and decreases construction time.">
              <Grid item xs={12} sm={6}>
                <TextField
                margin="normal"
                  fullWidth
                  id="filled-number"
                  label="Tents"
                  type="number"
                  variant="filled"
                />     
          </Grid>
          </Tooltip>
          <Tooltip title="Barracks convert workers to troops! You use these for attacking, defending, and increasing your networth.">
              <Grid item xs={12} sm={6}>
                <TextField
                margin="normal"
                  fullWidth
                  id="filled-number"
                  label="Barracks"
                  type="number"
                  variant="filled"
                />     
          </Grid>
          </Tooltip>
          <Tooltip title="Camps help curry favour with the Market (and Black Market!)- you get better prices in selling and in buying.">
              <Grid item xs={12} sm={6}>
                <TextField
                margin="normal"
                  fullWidth
                  id="filled-number"
                  label="Camps"
                  type="number"
                  variant="filled"
                />     
          </Grid>
          </Tooltip>
          <Tooltip title="Huts produces leaders, used for spying and secret missions of a magical nature. They can hold up to 175 each if they must, but produce naturally only to 100 per Hut.">
              <Grid item xs={12} sm={6}>
                <TextField
                margin="normal"
                  fullWidth
                  id="filled-number"
                  label="Huts"
                  type="number"
                  variant="filled"
                />     
          </Grid>
          </Tooltip>
          <Tooltip title="Foragers are used to produce food, for feeding your troops and leaders, or for selling on the marketplace.">
              <Grid item xs={12} sm={6}>
                <TextField
                margin="normal"
                  fullWidth
                  id="filled-number"
                  label="Foragers"
                  type="number"
                  variant="filled"
                />     
          </Grid>
          </Tooltip>
          <Tooltip title="Towers defend your land by augmenting the strength of your soldiers. Good for defense and little else.">
              <Grid item xs={12} sm={6}>
                <TextField
                margin="normal"
                  fullWidth
                  id="filled-number"
                  label="Towers"
                  type="number"
                  variant="filled"
                />     
          </Grid>
          </Tooltip>
          <Typography> Free Land: {user.warlord.freeland} </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
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

export default Construct