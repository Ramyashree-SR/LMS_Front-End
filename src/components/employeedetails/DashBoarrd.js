import React from 'react'
import { Bar,Doughnut ,PolarArea,Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const DashBoard=()=>{
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


return (
  <div style={{display:"flex"}}>
    
     <div  >
      <Bar data={mockratings} />
      </div>

     <div >
      <Line data={mockratings} />
      </div>
     
      
      <div>
      <Doughnut data={mockratings}/>
      </div>
      
      
       <div >
      <PolarArea data={mockratings}/>
      </div>
      
     
      

     
     
  </div>
)

}
export default DashBoard