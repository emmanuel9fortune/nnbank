import React from 'react'
import { YAxis, XAxis, CartesianGrid, ResponsiveContainer, Tooltip, BarChart, Bar} from 'recharts'


function Otchart() {
  const data =[
    {month:'jan', income: 75},
    {month:'feb', income: 46},
    {month:'mar', income: 100},
    {month:'apr', income: 40},
    {month:'may', income: 67 },
    {month:'jun', income: 30 },
    {month:'jul', income: 73 },
    {month:'aug', income: 68},
    {month:'sep', income: 80},
    {month:'oct', income: 58},
    {month:'nov', income: 69},
    {month:'dec', income: 80},
  ]
  return (
    <ResponsiveContainer width={"100%"} height={200} >
        <BarChart data={data} width={'100%'} height={200}   barSize={20}>
          <XAxis dataKey='month' scale='point' padding={{left:10, right:10}} />
          <YAxis />
          <Tooltip/>
          <CartesianGrid strokeDasharray=' 3 3' stroke='transparent' />
          <Bar dataKey='income' fill='#3E3C61' background={{fill:'transparent'}} />
        </BarChart> 
    </ResponsiveContainer>
  )
}

export default Otchart