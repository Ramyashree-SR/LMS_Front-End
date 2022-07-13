import React from 'react'
import { Bar,Doughnut ,PolarArea,Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './Data.css'

const Data = () => {
    // const labels = Utils.months({count: 7});
const mockratings = {
    labels:["Mock1","Mock2","Mock3","Mock4","Mock5"],
    datasets: [{
    label: 'Mock',
    backgroundColor:"#FAA81D",
    data:[100,140,134,121,40],
  },
  {
       label:"Re-Mock",
        backgroundColor:"#075575",
        data:[20,90,60,180,50],
        
      }],
}


const gender={
      labels:["Male","Female"],
      
      datasets:[{
        label:"Mock",
        backgroundColor:["#FAA81D","#075575"],
        data:[100,140,134,121,40],
        borderWidth:3,
        hoverBorderWidth:[10],
        borderColor:["#FAA81D","#075575"],
        cutoutPercentage: 40
        }],
    }
  


  return (
    <div  id="chartData">
       <div id="chartbox" >
        <Bar data={mockratings} />
        </div>

        <div id="chartbox">
        <Line data={mockratings} />
        </div>
       
        
        <div id="chartbox" >
        <Doughnut data={mockratings}/>
        </div>

        <div id="chartbox">
        <PolarArea data={mockratings}/>
        </div>
        


       
    </div>
  )

  }
export default Data