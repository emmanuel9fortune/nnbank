import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'jan',
    pec: 75,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'feb',
    pec: 46,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'mar',
    pec: 63,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'apr',
    pec: 40,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'may',
    pec: 44,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'jun',
    pec: 30,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'jul',
    pec: 38,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'aug',
    pec: 68,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'sep',
    pec: 45,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'oct',
    pec: 20,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'nov',
    pec: 39,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'nov',
    pec: 19,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pec" stroke="cadetblue" fill="cadetblue" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
