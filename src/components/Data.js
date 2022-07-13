import React from 'react'
import { Bar,Doughnut ,PolarArea,Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

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
        hoverOffset: 4,
        }],
    }
  


  return (
    <div>
   <>
        <div style={{width:"400px",}} >
        <Bar data={mockratings} />
        <Line data={mockratings} />
        </div>
        
        <div style={{width:"400px"}}>
        <Doughnut data={mockratings}/>
        <PolarArea data={mockratings}/>


        <div>
            <Doughnut data={gender}/>
        </div>
        </div>
        </>
    </div>
  )

  }
export default Data