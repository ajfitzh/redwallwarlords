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
import { Avatar } from '@mui/material';


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
    const [locationpicture, setLocationPicture] = useState("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89a2a257-ae26-4830-a0e8-99190fbeb5c2/da5lqja-278a5e97-a355-431e-8ec0-9e036f769e5f.jpg/v1/fill/w_1280,h_1627,q_75,strp/redwall_map_by_mapmaster-da5lqja.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi84OWEyYTI1Ny1hZTI2LTQ4MzAtYTBlOC05OTE5MGZiZWI1YzIvZGE1bHFqYS0yNzhhNWU5Ny1hMzU1LTQzMWUtOGVjMC05ZTAzNmY3NjllNWYuanBnIiwid2lkdGgiOiI8PTEyODAiLCJoZWlnaHQiOiI8PTE2MjcifV1dfQ.O_INdBKzUoU_CmWl2fK6kzIoW3Fsx1tBmoLmItv882I")
    const [locationdescription, setLocationDescription] = useState("Select Your Location");
    const [racepicture, setRacePicture] = useState("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc05.deviantart.net%2Ffs70%2Ff%2F2011%2F045%2F1%2F2%2Fredwall_vermin_by_marsleader_aaron-d39kwjr.jpg&f=1&nofb=1")
    const [racedescription, setRaceDescription] = useState("Select Your Race");
    const navigate = useNavigate();


    function handleRaceChange(number, avatar, name){
        setrace(number);
        setRacePicture(avatar);
        setRaceDescription(name);
        console.log("race changed!")
    }

    function handleLocationChange(number, avatar, name){
        setlocation(number);
        setLocationPicture(avatar);
        setLocationDescription(name);
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
            <Typography variant="h6"> {locationdescription} </Typography>
            <Grid
container
spacing={0}
direction="column"
alignItems="center"
justifyContent="center"
style={{ minHeight: '10vh' }}
>
    <Grid item xs={3}>
    <Avatar sx={{ width: 200, height: 200 }} variant="square" 
    src={locationpicture}
    
    />

</Grid></Grid>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={()=> { handleLocationChange(1, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F13%2Fae%2F50%2F13ae50ee3da02b0753a4c01546d1381b.jpg&f=1&nofb=1", "Southsward")}}>Southsward</Button>
                <Button onClick={()=> { handleLocationChange(2, "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-7Nv5Ybzn5bE%2FU_5rb0n_tcI%2FAAAAAAAAB1U%2Fsc8RqCC2uB4%2Fs1600%2FMossflower%252Bfull%252Bcover.jpg&f=1&nofb=1", "Mossflower")}}>Mossflower</Button>
                <Button onClick={()=> { handleLocationChange(3, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdna.artstation.com%2Fp%2Fassets%2Fimages%2Fimages%2F003%2F284%2F264%2Flarge%2Fsergey-lameyko-l6-ce-cut-big-w.jpg%3F1471991670&f=1&nofb=1", "The Northlands")}}>Northlands</Button>
            </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h6"> {racedescription}</Typography>
            <Grid
container
spacing={0}
direction="column"
alignItems="center"
justifyContent="center"
style={{ minHeight: '10vh' }}
>
    <Grid item xs={3}>
    <Avatar sx={{ width: 200, height: 200 }} variant="square" 
    src={racepicture}
    
    />

</Grid></Grid>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={()=> { handleRaceChange(1, "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsullivanet.com%2Fredwall%2Fencyc%2Fscans%2Floamhedge%2Fragabol1.jpg&f=1&nofb=1", "Rat")}}>Rat</Button>
                <Button onClick={()=> { handleRaceChange(2, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F18%2F08%2F9e%2F18089e6a4ee5cfc51469de863afcea47.jpg&f=1&nofb=1", "Weasel")}}>Weasel</Button>
                <Button onClick={()=> { handleRaceChange(3, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpre00.deviantart.net%2F4e57%2Fth%2Fpre%2Fi%2F2016%2F028%2F4%2F2%2Fbadrang_the_tyrant_by_nicholaskole-d9poni9.jpg&f=1&nofb=1", "Stoat")}}>Stoat</Button>
                <Button onClick={()=> { handleRaceChange(4, "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.geocities.ws%2Fpl_marlfox%2Fmclub%2Fmarlfox.jpg&f=1&nofb=1", "Fox")}}>Fox</Button>
                <Button onClick={()=> { handleRaceChange(5, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fredwall%2Fimages%2Fc%2Fce%2FUblaz1.jpg%2Frevision%2Flatest%3Fcb%3D20051025024030&f=1&nofb=1", "Wildcat")}}>Wildcat</Button>
                <Button onClick={()=> { handleRaceChange(6, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fae%2F4d%2F6b%2Fae4d6bd88a511bfb7e92262204fc32f2--game-concept-character-concept.jpg&f=1&nofb=1", "Lizard")}}>Lizard</Button>
                <Button onClick={()=> { handleRaceChange(7, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.H3yfjjHn_GDmcghGZgZDrAHaKy%26pid%3DApi&f=1", "Wolf")}}>Wolf</Button>
                <Button onClick={()=> { handleRaceChange(8, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F474x%2Fa7%2F68%2F69%2Fa76869cf2948586f4e25967d2200936a--redwall-book-series.jpg&f=1&nofb=1", "Marten")}}>Marten</Button>
                <Button onClick={()=> { handleRaceChange(9, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F6d%2F94%2F52%2F6d9452c8d4b97000d913cb78467575bf--redwall-easter-bunny.jpg&f=1&nofb=1", "Crow")}}>Crow</Button>
                <Button onClick={()=> { handleRaceChange(10, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg15.deviantart.net%2Ffdce%2Fi%2F2014%2F153%2Fe%2F5%2Foutcast_of_redwall_by_nimirofox-d6nhz8d.jpg&f=1&nofb=1", "Ferret")}}>Ferret</Button>

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