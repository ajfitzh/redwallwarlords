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

const CreateWarlord = ({ user }) => {
    const [name, setTitle] = useState("My Awesome Post")
    const [content, setContent] = useState("I love Pogs.");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [race, setrace] = useState('');
    const [location, setlocation] = useState('');
    const navigate = useNavigate();

    function handleRaceChange(e){
        setrace(e.target.value);
        console.log("race changed!")
    }

    function handleLocationChange(e){
        setlocation(e.target.value);
        console.log("location changed!")
    }

    function handleSubmit(e) {
        e.preventDefault();
        let rval = {race}.race;
        let lval = {location}.location;
        let username = {user}.user.id;
        setIsLoading(true);
        const data = new FormData(e.currentTarget);
        console.log({
            user_id: {user}.user.id,
            name: data.get('name'),
            coa_url: data.get('coa_url'),
            race_id: rval,
            location_id: lval,
            clan_id: 1
        })
        fetch("/warlords", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: {user}.user.id,
            name: data.get('name'),
            coa_url: data.get('coa_url'),
            race_id: rval,
            location_id: lval,
            clan_id: 1,
            land: 1000,
            freeland: 1000,
            networth:625867,
            turns: 350,
            loyalty: 50000,
            leaders: 1000,
            cash: 2000000,
            food: 100000,
            health: 100,
            tax: 20, 
            workers: 1000,
            rats: 100,
            weasels: 50,
            stoats: 200,
            skiffs: 10,
            towers: 0,
            farms: 0,
            huts: 0,
            camps:0,
            barracks:0,
            tents:0,
            markets:0, 
            ind_skiff:25,
            ind_stoat:25,
            ind_weasel:25,
            ind_rat:25
          }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((r) => console.log(r));
            navigate("/summary");
            
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
          Create Your Warlord
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                label="Warlord Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="coa_url"
                label="Coat Of Arms URL"
                type="coa_url"
                id="coa_url"
                autoComplete="coa_url"
                />
            </Grid>
            <Grid item xs={12}>
            <Typography> Choose Your Starting Location: {location} </Typography>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={()=> { setlocation(1)}}>Southsward</Button>
                <Button onClick={()=> { setlocation(2)}}>Mossflower</Button>
                <Button onClick={()=> { setlocation(3)}}>Northlands</Button>
            </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
            <Typography> Choose Your Race: {race}</Typography>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={()=> { setrace(1)}}>Rat</Button>
                <Button onClick={()=> { setrace(2)}}>Painted One</Button>
                <Button onClick={()=> { setrace(3)}}>Stoat</Button>
                <Button onClick={()=> { setrace(4)}}>Fox</Button>
                <Button onClick={()=> { setrace(5)}}>Wildcat</Button>
                <Button onClick={()=> { setrace(6)}}>Lizard</Button>
                <Button onClick={()=> { setrace(7)}}>Wolf</Button>
                <Button onClick={()=> { setrace(8)}}>Marten</Button>
                <Button onClick={()=> { setrace(9)}}>Magpie</Button>
                <Button onClick={()=> { setrace(10)}}>Ferret</Button>

            </ButtonGroup>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Warlord
          </Button>
          {errors ? <p>{errors}</p> : <p>Errors shown here</p>}
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  </ThemeProvider>
  
);
    }

export default CreateWarlord