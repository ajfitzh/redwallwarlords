import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('1990', 0),
  createData('1991', 5),
  createData('1992', 10),
  createData('1993', 8000),
  createData('1994', 1500),
  createData('1995', 1200),
  createData('1996', 800),
  createData('1997', 700),
  createData('1998', 600),
  createData('1999', 500),
  createData('2000', 150),
  createData('2005', 100),
  createData('2010', 50),
  createData('2015', 10),
  createData('2022', 1),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>PogFolio Value Tracker</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Value ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}