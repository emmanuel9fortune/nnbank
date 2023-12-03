import React from 'react'
import { YAxis, XAxis, CartesianGrid, ResponsiveContainer, Tooltip, BarChart, Bar} from 'recharts'


function Inchart() {
  const data =[
    {month:'jan', income: 70},
    {month:'feb', income: 65},
    {month:'mar', income: 82},
    {month:'apr', income: 25},
    {month:'may', income: 32 },
    {month:'jun', income: 48 },
    {month:'jul', income: 75 },
    {month:'aug', income: 46},
    {month:'sep', income: 80},
    {month:'oct', income: 71},
    {month:'nov', income: 92},
    {month:'dec', income: 95},
  ] 
  return (
    <ResponsiveContainer width={"100%"} height={'100%'}>
        <BarChart data={data} width={'100%'} height={300} barSize={20}>
          <XAxis dataKey='month' scale='point' padding={{left:15, right: 15}} />
          <YAxis />
          <Tooltip/>
          <CartesianGrid strokeDasharray=' 3 3' stroke='ghostwhite' />
          <Bar dataKey='income' fill='skyblue' background={{fill:'ghostwhite'}} />
        </BarChart> 
    </ResponsiveContainer>
  )
}

export default Inchart