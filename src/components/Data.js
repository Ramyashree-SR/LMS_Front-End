import React from 'react'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Data = () => {
    // const labels = Utils.months({count: 7});
const data = {
    labels:["Mock1","Mock2","Mock3","Mock4","Mock5"],
    datasets: [{
    label: 'Mock',
    data: [65, 59, 80, 81, 56, 55, 40],
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
    <div>
    <Bar data={data}/>
    </div>
  )
}

export default Data