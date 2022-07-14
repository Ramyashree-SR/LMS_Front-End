import React from "react";

import { Bar, Doughnut, Pie } from "react-chartjs-2";
// import Chart, { PieController } from "chart.js/auto";
import { Paper } from "@mui/material";


const DashBoard = () => {
  const gender = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: ["Male", "Female"],
        backgroundColor: ["#075575", "#FAA81D"],
        data: [70, 30],
        cutout: 80,
        borderWidth: 2,
        borderColor: ["#075575", "#FAA81D"],
        hoverBorderWidth: 15,
        
      },
    ],
  };

  return (
    <div >
      <Paper>
      <div className="d-flex p-6">
      <Paper style={{ width: "350px", height: "270px" ,padding:"20px"}}>
        <div style={{ width: "250px" }}>
          <Doughnut data={gender} />
        </div>
      </Paper>


       <Paper style={{ width: "400px", height: "270px" }} variant="outlined">
          <Bar
            data={{
              labels: ["2016", "2017","2018","2019","2020","2021","2022"],
              datasets: [
                {
                  label: "Year of Passing",
                  data: [1, 1, 5,10,10, 24, 24],
                  fill: false,
                  borderWidth: 1,
                  backgroundColor:["#3390FF "],
                  barThickness:10,
                  minBarLength: 2,
                  borderRadius:10
                }
              ],
            }}
            options={{
              indexAxis: "y",
              scales: {
                y: {
                  beginAtZero: true
                }},
                xAxes: [{
                  gridLines: {
                     display: false
                  }
               }],
               yAxes: [{
                gridLines: {
                   display: false
                }
             }]
            }}
            
             
              
             
            style={{ width: "400px",height:"300px" }}/>
        </Paper>

       <Paper style={{ width: "400px", height: "270px" }} variant="elevation">
          <Bar
            data={{
              labels: ["Fresher","1Year","2Year","3Year","4Year"],
              datasets: [
                {
                  label: "Experience",
                  data: [15,10,15,20,24],
                  fill: false,
                  borderWidth: 1,
                  backgroundColor:["#333FFF "],
                  barThickness:10,
                  minBarLength: 2,
                  borderRadius:10
                }
              ],
            }}
            options={{
              indexAxis: "y",
              scales: {
                y: {
                  beginAtZero: true
                }}
            }}
            style={{ width: "400px",height:"300px" }}/>
        </Paper>
        </div>

         <div className="h-25 d-inline-block d-flex p-3">
        <Paper style={{ width: "500px", height: "270px" }} variant="outlined">
          <Bar
            data={{
              labels: ["BE(CSE)","BE(Non-CSE)","Post Graduation","PhD"],
              datasets: [
                {
                  label: "Emplloyee Degree",
                  data: [15,10,2,24],
                  fill: false,
                  borderWidth: 1,
                  backgroundColor:["#FF33C4"],
                  barThickness:10,
                  minBarLength: 2,
                  borderRadius:10
                }
              ],
            }}
            options={{
            scales: {
                y: {
                  beginAtZero: true
                }},
                xAxes: [{
                  gridLines: {
                     display: false
                  }
               }],
               yAxes: [{
                gridLines: {
                   display: false
                }
             }] 
           }}
            style={{ width: "300px",height:"300px" }}/>
        </Paper>

        <Paper style={{ width: "300px", height: "310px" }} variant="outlined">
          <Pie data={{
            labels: ['Excellent','Below Average','Average','Above Average','Good',],
            datasets: [{
              label: 'Batch Performance',
              data: [20,20,20,15,20],
              backgroundColor: ['#008000', '#EE1445','#F96B49 ','#FFBF00','#09B0D8' ],
              borderColor:['#008000', '#EE1445' ,'#F96B49','#FFBF00','#09B0D8' ],
              hoverOffset: 10,
              hoverBorderWidth:6,
              offset:2
            }]

          }}
          style={{ width: "400px",height:"100px" }}
           />

        </Paper>



       </div>
           </Paper>
    </div>
  );
};

export default DashBoard;
