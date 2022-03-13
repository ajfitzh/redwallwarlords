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
import { Avatar } from '@mui/material';
import { Tooltip } from '@mui/material';


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
  const [turns, setTurns] = useState(0);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [turnuse, setTurnUse] = useState('');
  const [result, setResults] = useState(false);
  const [newwarlorddata, setWarlord] = useState({})
  const navigate = useNavigate();
  const [description, setDescription] = useState("https://legendsofredwall.com/wp-content/uploads/2018/09/Villians-2-Web.jpg")
  const [turndescription, setTurnDescription] = ("Use Turns")

  function handleSubmit(e) {
    e.preventDefault();
    setResults(true);
  }

  function handleWarlordChange(number, avatar){
    setDescription(avatar);
    setTurnUse(number);
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
            <Grid item xs={12}>
            <Typography variant="h6"> Use Turns </Typography>
            </Grid>
        {result ? <TakeTurn turns={turns} user={user} action={turnuse} warlord={user.warlord} newmarkets={0} newtents={0} newbarracks={0} newcamps={0} newhuts={0} newforagers={0} newtowers={0}/> : <p>Turn Results Shown Here</p>}
        <Grid
container
spacing={0}
direction="column"
alignItems="center"
justifyContent="center"
style={{ minHeight: '10vh' }}
>
    <Grid item xs={3}>
    <Avatar sx={{ width: 128, height: 128 }} variant="square" 
    src={description}
    
    />
    

</Grid></Grid>
        
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container
spacing={0}
direction="column"
alignItems="center"
justifyContent="center"
style={{ minHeight: '10vh' }}>
            <Grid item xs={12} sm={6} sx={{p:2}}>
              
              <Grid item xs={3}>
      </Grid>
            <Grid item xs={12} sx={{p:2}}>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Tooltip title="Every turn produces a small amount of new land for your Warband">
              <Button key={1} onClick={()=> {handleWarlordChange(1, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fcartoon-medieval-knight-items-flat-flag-family-coat-arms-hanging-wooden-stick-white-backdrop-battle-ax-sword-shield-169366101.jpg&f=1&nofb=1")}}>Scout</Button>
              </Tooltip>
              <Tooltip title="Looting produces 25% more cash per turn than average">
                <Button key={2} onClick={()=> {handleWarlordChange(2, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fgold-coins-on-open-full-bag-isolated-on-white-vector-id1135451702%3Fk%3D6%26m%3D1135451702%26s%3D612x612%26w%3D0%26h%3DQoRraqqgOZgbfRx270R6gQ859cOAJA2VDkI810IKWMg%3D&f=1&nofb=1")}}>Loot</Button>
              </Tooltip>
              <Tooltip title="Foraging produces 25% more food per turn than average">
              <Button key={3} onClick={()=> {handleWarlordChange(3, "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.kja-artists.com%2Fassets%2Fmedieval_food_jc.jpg&f=1&nofb=1")}}>Forage</Button>
              </Tooltip>
                <Tooltip title="Earning Loyalty produces 25% more loyalty for your leaders per turn than average">
                <Button key={4} onClick={()=> {handleWarlordChange(4, "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg3.wikia.nocookie.net%2F__cb20111119193910%2Fredwallwars%2Fimages%2Fthumb%2F9%2F9b%2FRedwall_races_hedgehog_by_chichapie-d31xqwx.jpg%2F500px-Redwall_races_hedgehog_by_chichapie-d31xqwx.jpg&f=1&nofb=1")}}>Earn Loyalty</Button>
                </Tooltip>
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
                onChange={handleInputChange}
                value={turns}
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