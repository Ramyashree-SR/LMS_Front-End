import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import Chart from 'chart.js/auto';

import './mentorchart.css'

const MentorChart = () => {

    const gender={
        labels:["Male","Female"],
        
        datasets:[{
          label:"",
          backgroundColor:["#FAA81D","#075575"],
          data:[100,140,134,121,40],
          borderWidth:3,
          hoverBorderWidth:[10],
          borderColor:["#FAA81D","#075575"],
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

export default MentorChart