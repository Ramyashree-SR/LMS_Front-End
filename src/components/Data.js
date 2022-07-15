import React from 'react'
import { Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Paper } from '@mui/material';
import {Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';


const Data = () => {
    // const labels = Utils.months({count: 7});
const mockratings = {
    labels:["Mock1","Mock2","Mock3","Mock4","Mock5"],
    datasets: [{
    label: 'Mock',
    // backgroundColor:"#FAA81D",
    data:[20,90,60,180,50],
    borderColor:"#FAA81D"
  },
  // {
  //      label:"Re-Mock",
  //       backgroundColor:"#075575",
  //       data:[20,90,60,180,50],
        
  //     }
],
}
  


  return (
    <div>
       
       <Paper className='p-5' style={{width:"1100px",height:"600px"}}>
        <div className='d-flex'>
        <Avatar
              size={80}
              icon={<UserOutlined />}
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <pre>
            <h5><b>Sharan</b></h5>
            <h5>#123456</h5>
           </pre>  
           <p style={{marginLeft:"600px"}}>NO. of Classess Attended:<b>20/25</b></p>
        </div>
        <Paper className='p-5' style={{width:"900px",height:"450px"}}>
        <Line data={mockratings}  style={{ width:"600px",heigth:"100px",color:"#FAA81D"}}/>
        </Paper>
        </Paper>
    </div>
  )

  }
export default Data