import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>PogFolio Value</Title>
      <Typography component="p" variant="h4">
        $24.33
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        as of 18 Feb, 2022
      </Typography>
      <div>
      <Typography component="p" variant="h4" color="red">
        $-30,723.42
      </Typography>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Value History
        </Link>
      </div>
    </React.Fragment>
  );
}