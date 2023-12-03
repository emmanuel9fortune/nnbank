import React from 'react'
import { YAxis, XAxis, CartesianGrid, ResponsiveContainer, Tooltip, Line, LineChart} from 'recharts'


function Barchat() {
  const data =[
    {month:'jan', income: 70, outcome: 75},
    {month:'feb', income: 65, outcome: 46},
    {month:'mar', income: 82, outcome: 63},
    {month:'apr', income: 25, outcome: 40},
    {month:'may', income: 32, outcome: 44 },
    {month:'jun', income: 48, outcome: 30 },
    {month:'jul', income: 75, outcome: 38 },
    {month:'aug', income: 46, outcome: 68},
    {month:'sep', income: 80, outcome: 45},
    {month:'oct', income: 71, outcome: 20},
    {month:'nov', income: 92, outcome: 39},
    {month:'dec', income: 95, outcome: 10},
  ] 
  return (
    <ResponsiveContainer width={'100%'} height={'100%'}>
        <LineChart data={data} width={300} height={300} barSize={20}>
          <XAxis dataKey='month' scale='point' padding={{left:15, right: 15}} />
          <YAxis />
          <Tooltip/>
          <CartesianGrid strokeDasharray=' 3 3' stroke='green' />
          <Line type="monotone" dataKey='income' fill='greenyellow' background={{fill:'grey'}} />
          <Line type="monotone" dataKey='outcome' fill='skyblue' background={{fill:'orange'}} />
        </LineChart>  
    </ResponsiveContainer>
  )
}

export default Barchat