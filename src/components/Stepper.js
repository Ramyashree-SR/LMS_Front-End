import React from 'react'
import {Bar, Line,Doughnut,PolarArea} from "react-chartjs-2"
import {Chart} from 'chart.js/auto';

const Stepper = () => {
    const mockdata={
      labels:["Mock1","Mock2","Mock3","Mock4","Mock5"],
      datasets:[{
        label:"Mock",
        backgroundColor:"#FAA81D",
        data:[100,140,134,121,40],
        
        },
      {
        label:"Re-Mock",
        backgroundColor:"#075575",
        data:[20,90,60,180,50],
        // data:["avg","above avg","good","Excellent"]
      }
    
    ]
  
    }
    return (
      <div >
        <>
        <div style={{width:"400px",}} >
        <Bar data={mockdata} />
        <Line data={mockdata} />
        </div>
        
        <div style={{width:"400px"}}>
        <Doughnut data={mockdata}/>
        <PolarArea data={mockdata}/>
        </div>
        </>
      </div>
    )
  }
  
  export default Stepper