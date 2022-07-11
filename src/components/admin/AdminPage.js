import React, { useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { Table } from "antd";
import { Button } from "antd";
import AddBatch from "./AddBatch";
import AddMentor from "./AddMentor";
import Request from "./Request";
import "./admin.css"
import { Link, Route, Routes, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

function AdminPage() {

 let navigate=useNavigate()

 const handleLogout=()=>{
  navigate('/')
}
  let navigateToAddBatch=()=>{
    navigate("addbatch")
  }
  let navigateToAddMentor=()=>{
    navigate("addmentor")
  }
  let navigateToRequest=()=>{
    navigate("request")
  }

  return (
    <div>
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <img
            className="p-2 justify-center "
            width="160px"
            height="60px"
            src="./assets/logo1.png"
            alt="tc"
            style={{ marginLeft: "-30px" }}
          />
          <input
            type="text"
            placeholder="Search Mentor/Employee"
            // style={{
            //   width: "500px",
            //   height: "10px",
            //   padding: "10px",
            //   backgroundColor: "white",
            //   fontSize: "small",
            //   marginLeft: "200px",
            // }} 
            prefix={<img src="./assets/searchbar.png" alt="no" />}
             className="mainsearch"
          />

          <Button
            type="button"
            style={{ background: "#FFFFFF", marginLeft: "250px" ,color:"black"}}
             className="submit" onClick={handleLogout}>
            Logout
          </Button>

          <Menu theme="light" />
        </Header>
        <Layout>
          <Sider
            width={80}
            style={{
              backgroundColor: "#FFFFFF",
             
              height: "500px",
            }}
          >
           
            <div>
              <Link to={"./AddBatch"}>
                <Button id="sidebatch" className="bg-white"  style={{marginLeft:"5px"}} onClick={navigateToAddBatch}><br/>
                  <p id="addbatch"  style={{marginTop:"20px"}}><b>Batch</b></p>
                </Button>
              </Link>
              <br />
              <br/>
              <Link to={"./AddMentor"}>
                <Button className="bg-white" id="sidementor"style={{marginLeft:"5px"}} onClick={navigateToAddMentor}>
               <br/>
                  <p id="addmentor" style={{marginTop:"20px"}}><b>Mentor</b></p>
                </Button>
              </Link>
              <br />
              <br/>
              <Link to={"./Request"}>
                <Button className="bg-white" id="siderequest" style={{marginLeft:"5px"}}>
                  <br />
                 <p id="request"  style={{marginTop:"20px"}}  onClick={navigateToRequest}><b >Request</b></p>
                </Button>
              </Link>
              <br />
              <br/>
            </div>
          </Sider>
          <Layout
          // style={{
          //   padding: "0 12px 12px",
          // }}
          > 
          <Content>
            <Breadcrumb
              style={{
                margin: "10px",
                // padding: "0px 0px",
                // maxHeight: 600,
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Batch</Breadcrumb.Item>
              </Breadcrumb>
            
              <Button
                style={{
                  height: "60px",
                  width: "60px",
                  marginLeft: "10px",
                }}
              ></Button>

              <Routes>
                 <Route path='addbatch' element={<AddBatch/>}/>
                 <Route path='addmentor' element={<AddMentor/>}/>
                 <Route path='request' element={<Request/>}/>
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default AdminPage;
