import React from 'react' 

import { Bar, Doughnut } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import { Paper } from '@mui/material';


const DashBoard = () => {

    const gender={
      labels: ['Male','Female'],
      datasets: [{
      label: ['Male','Female'],
      backgroundColor:["#075575","#FAA81D"],
      data:[70,30],
      cutout:80,
      borderWidth:2,
      borderColor:["#075575","#FAA81D"],
      hoverBorderWidth:15
    }],
  }
   

    const yearOfPassing={
      labels:'year of passing',
      datasets: [{
        axis: 'y',
        label: 'My First Dataset',
        data: [100 ,200,300 ,500 ,240,690],
        fill: false,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    }
    
         
    return (
    <div Style={{display:"flex"}}>
      
          <Paper  style={{width:"270px",height:"270px"}}>
         <div style={{width:"250px"}}>
          <Doughnut data={gender}/>
            </div>
            </Paper>

            <Paper  style={{width:"270px",height:"270px"}}>
             <div style={{width:"250px"}}>
          <Bar data={yearOfPassing} />
            </div>
            </Paper>
       
    </div>
  )
}

export default DashBoard