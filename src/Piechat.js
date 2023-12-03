import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'



ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

function Piechat() {
    const data ={
        datasets : [{
            label:'poll',
            data: [3,8, 2],
            backgroundColor:['skyblue' , 'cadetblue', 'whitesmoke'],
            borderColor : ['skyblue', 'skyblue', 'skyblue']
        }],
        labels : [],
    }
  return (
    <div style={{width:'100%', height:'100%', display:'flex', justifyContent:'center'}} >
        <Doughnut
            data={data}
        >
        </Doughnut>
    </div>
  )
}

export default Piechat