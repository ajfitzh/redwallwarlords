import React, {useState} from 'react'
import Button from '@mui/material/Button';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Typography } from '@mui/material';



const Missions = ({user}) => {
  const [mission, setMission] = useState('')

function handleMissionChange(e){
  setMission(e.target.value);
  console.log("mission changed!")
}
  return (
    <div>
        <Typography component="h2" variant="h6">
          You have: 0 leaders to perform missions, and 0 loyalty.
        </Typography>
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select Mission</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={mission}
    label="mission"
    onChange={handleMissionChange}
  >
    <MenuItem value={1}>Raise Defenses (Cost: 20,000 Loyalty) (1)</MenuItem>
    <MenuItem value={2}>Prepare Raiders (Cost: 40,000 Loyalty) (2)</MenuItem>
    <MenuItem value={3}>Recall Raiders (Cost: 40,000 Loyalty) (3)</MenuItem>
    <MenuItem value={4}>Feast (Cost: 15,000 Loyalty) (4)</MenuItem>
    <MenuItem value={5}>Loot  (Cost: 20,000 Loyalty) (5)</MenuItem>
    <MenuItem value={6}>Move Warband South (Cost: 100,000 Loyalty)  (6)</MenuItem>
    <MenuItem value={7}>Move Warband North (Cost: 100,000 Loyalty)  (7)</MenuItem>
  </Select>
</FormControl>
<Typography> Mission Chosen: {mission} </Typography>


<Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Perform Mission
          </Button>
    </div>
  )
}

export default Missions