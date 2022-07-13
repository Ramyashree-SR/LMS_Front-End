import React from 'react'

import { Doughnut } from 'react-chartjs-2'
import Chart from 'chart.js/auto';

const DashBoard = () => {

    const gender={
        labels:["Male","Female"],
        
        datasets:[{
          label:"",
          backgroundColor:["#075575","#FAA81D"],
          data:[75,20],
          borderWidth:3,
          cutout:140,
          hoverBorderWidth:[20],
          borderColor:["#075575","#FAA81D"],
          cutoutPercentage: 40
          }],
          
          }
      

  return (
    <div  id="charts">

         <div id="chartboxes" >
            <Doughnut data={gender} 
            options={{
            title: {
            text: "Gender"
            },
           
        }}
            />
        </div>
      
       
    </div>
  )
}

export default DashBoard