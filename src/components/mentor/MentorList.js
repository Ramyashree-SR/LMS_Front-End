import React from "react";
import { Avatar, Breadcrumb, Dropdown, Layout, Menu, Space } from "antd";
import { Button } from "antd";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import DashBoard from "./DashBoard";
import BatchList from "./BatchList";
// import "./mentorlist.css"

const { Header, Sider, Content } = Layout;
function MentorList() {
  let navigate = useNavigate();
  let navigateToDashBoard = () => {
    navigate("dashboard");
  };
  let navigateToBatchList = () => {
    navigate("batchlist");
  };
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <p className="dropdown">Profile</p>,
        },
        {
          key: "2",
          label: <p className="dropdown">Change Password</p>,
        },
        {
          key: "3",
          label: <p className="dropdown">Logout</p>,
        },
      ]}
    />
  );

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
            placeholder="Search Employee"
            style={{
              width: "500px",
              height: "10px",
              padding: "12px",
              backgroundColor: "white",
              fontSize: "small",
              marginLeft: "200px",
            }}
            prefix={<img src="./assets/searchbar.png" alt="no" />}
          />

          <div
            className="btn btn-rounded"
            style={{ marginLeft: "1000px", marginTop: "-130px" }}
          >
            <Avatar
              size={50}
              icon={<img src="./assets1/data/Avatar.png" alt="avatar" />}
            />
            &nbsp;
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <p style={{ color: "black" }}>
                    <b>Sahlini</b>
                  </p>
                  <DownOutlined style={{ color: "black" }} />
                </Space>
              </a>
            </Dropdown>
          </div>
          <Menu theme="light" />
        </Header>
        <Layout style={{ height: "550px" }}>
          <Sider
            width={80}
            style={{ backgroundColor: "#FFFFFF", marginLeft: "0px" }}
          >
            <div>
              <Link to={"./DashBoard"}>
                <button
                  className="bg-white"
                  id="dashboard"
                  onClick={navigateToDashBoard}
                >
                  <p id="db">
                    <b>DashBoard</b>
                  </p>
                </button>
              </Link>
              <Link to={"./BatchList"}>
                <button
                  className="bg-white"
                  id="batchlist"
                  onClick={navigateToBatchList}
                >
                  <p id="batch">
                    <b>Batch</b>
                  </p>
                </button>
              </Link>
            </div>
          </Sider>
          <Layout
            style={{
              padding: "0 12px 12px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "10px",
                padding: "0px 0px",
                maxHeight: 600,
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Request List</Breadcrumb.Item>
            </Breadcrumb>

            <Content>
              <Routes>
                <Route path="dashboard" element={<DashBoard />} />
                <Route path="batchlist" element={<BatchList />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default MentorList;
