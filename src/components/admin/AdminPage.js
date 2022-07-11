import React, { useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { Table } from "antd";
import { Button } from "antd";
import AddBatch from "./AddBatch";
import AddMentor from "./AddMentor";
import Request from "./Request";
import "./admin.css"
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;

function AdminPage() {
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
            style={{
              width: "500px",
              height: "0px",
              padding: "10px",
              backgroundColor: "white",
              fontSize: "small",
              marginLeft: "200px",
            }}
          />

          <Button
            type="button"
            style={{ background: "#FFFFFF", marginLeft: "200px" ,color:"black"}}
             className="submit">
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
            {/* <Button
                  style={{
                    height: "60px",
                    width: "60px",
                    marginLeft: "10px",
                  
                  }}
                >
                  <img
                    src="./assets/batch.png"
                    alt="batchimage"
                    style={{ marginLeft: "-4px" }}
                  />
                </Button>
                <h6
                  style={{
                    fontSize: "small",
                    marginLeft: "20px",
                   
                  }}
                >
                  Batch
                </h6>

               
                <Button
                  style={{
                    height: "60px",
                    width: "60px",
                    marginLeft: "10px",
                   
                  }}
                >
                  <img
                    src="./assets/Mentor.png"
                    alt="batchimage"
                    style={{ marginLeft: "-4px" }}
                  />
                </Button>
                <h6
                  style={{
                    fontSize: "small",
                    marginLeft: "15px",
                    
                  }}
                >
                  Mentor
                </h6>
              

                <Button
                  style={{
                    height: "60px",
                    width: "60px",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                >
                  {/* <img
                    src="./assets/Request.png"
                    alt="batchimage"
                    style={{ marginLeft: "-4px" }}
                  /> */}
            {/* </Button>
                <h6
                  style={{
                    fontSize: "small",
                    marginLeft: "15px",
                    marginTop: "15px",
                  }}
                >
                  Request
                </h6>  */}

            <div>
              <Link to={"./AddBatch"}>
                <Button id="sidebatch" className="bg-white"  style={{marginLeft:"5px"}}><br/>
                  <p id="addbatch"  style={{marginTop:"30px"}}><b>Batch</b></p>
                </Button>
              </Link>
              <br />
              <br/>
              <Link to={"./AddMentor"}>
                <Button className="bg-white" id="sidementor"style={{marginLeft:"5px"}}>
               <br/>
                  <p id="addmentor" style={{marginTop:"30px"}}><b>Mentor</b></p>
                </Button>
              </Link>
              <br />
              <br/>
              <Link to={"./Request"}>
                <Button className="bg-white" id="siderequest" style={{marginLeft:"5px"}}>
                  <br />
                 <p id="request"  style={{marginTop:"30px"}}><b >Request</b></p>
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

            <Content>
              <Button
                style={{
                  height: "60px",
                  width: "60px",
                  marginLeft: "10px",
                }}
              ></Button>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default AdminPage;
