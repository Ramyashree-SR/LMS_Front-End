import React from "react";
import { Layout, Input, Button, Modal, Form, Select, Popover } from "antd";
import { Table } from "antd";
import { useState } from "react";
import { WarningFilled } from "@ant-design/icons";
import { Option } from "antd/lib/mentions";
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./employeelist.css";
import { useNavigate } from "react-router-dom";
import GiveRatingModel from "./GiveRating";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import GiveRating from "./GiveRating";
// import { Form }from 'react-bootstrap';
// import { Modal} from 'react-bootstrap';

const { Content } = Layout;

function EmployeeList() {

  const [isModelVisible, setIsModelVisible] = useState(false);

  const showModel = () => {
    setIsModelVisible(true);
  };

  const handleSubmit = () => {
    setIsModelVisible(false);
  };

  const handleClose = () => {
    setIsModelVisible(false);
  };
   
  const [lgShow, setLgShow] = useState(false);
  const handleLgClose = () => {
    setLgShow(false);
  };


  console.log();
  const content=(
    <div>
    <table>
    <tr>
    <th>Mock 1</th>
    <th id="emp1" className="ps-5">Excellent</th>
    </tr>
    <tr>
    <th>Mock 2</th>
    <th id="emp2" className="ps-5">Good</th>
    </tr>
    <tr>
    <th>Mock 3</th>
    <th id="emp3" className="ps-5">Above Average</th>
    </tr>
    <tr>
    <th>Mock 4</th>
    <th id="emp4" className="ps-5">Average</th>
    </tr>
    <tr>
    <th>Mock 5</th>
    <th id="emp5" className="ps-5">Below Average</th>
    </tr>
    </table>
    </div>
  )
  const [isEditing, setIsEditing] = useState(false);
  const [editingBatch, setEditingBatch] = useState(null);

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <p className="dropdownName">Abscond</p>
        },
        {
          key: "2",
          label: (
            <>
              <p onClick={showModel} className="dropdownName">
            <a>Terminated</a>
            </p>
            </>
          ),
        },
        {
          key: "3",
          label: "Active",
        },
      ]}
    />
  );

  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCreate = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onEditRating = (record) => {
    setIsEditing(true);
    setEditingBatch({ ...record });
  };

 

  const columns = [
    {
      title: "No",
      dataIndex: "No",
    },
    {
      title: "EmployeeId",
      dataIndex: "EmployeeId",
    },
    {
      title: "EmployeeName",
      dataIndex: "EmployeeName",
    },
    {
      title: "MocksTaken",
      dataIndex: "MocksTaken",
    },
    {
      title: "MockRatings",
      render: (record) => {
        return  (
        <>
        <Popover content={content} placement="bottom" className="bg-white"> 
           <WarningFilled style={{ fontSize: "30px", color: "#ffc53d" }} />
        </Popover>
        </>
        )
      },
    },
    {
      title: "Attendance",
      dataIndex: "Attendence",
    },
    {
      title: "Status",
      render: (record) => {
        return (
          <>
            <p>
              <Dropdown overlay={menu} target="_blank">
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Active
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>{" "}
            </p>
            <Modal
              title="Reason for Rejection"
              visible={isModelVisible}
              onOk={handleSubmit}
              onCancel={handleClose}
            >
              <Form layout="vertical">
                <Form.Item label="Reason">
                  <Input type="textarea" rows={3} style={{height:"100px"}}/>
                </Form.Item>
              </Form>
            </Modal>
            </>
            )
            }
            },
          {
             title: "",
             render: (record) => {
               return (
                 <>
                 <Button
              type="link"
              onClick={()=>setLgShow(true)}
              className="rating"
              style={{
                marginLeft: "30px",
              }}
            >
              Give Rating
            </Button>
            

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img
              src="./assets1/data/Xnix-Line-Right Arrow.png"
              alt="rightarrow"
              onClick={() => {
                onEditRating(record);
              }}/>

                </>
               )
             }
            }
  ];
  const data = [];

  for (let i = 0; i < 5; i++) {
    data.push({
      key: i,
      No: "",
      EmployeeId: `#${i}`,
      EmployeeName: `Edward King ${i}`,
      MocksTaken: "2/5",
      MockRatings: " ",
      Attendence: "13/25",
      Status: "",
    });
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div style={{marginTop:"-500px"}}>
      <Layout>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            marginLeft: "90px",
            display: "flex",
          }}
        >
          <h6 style={{ color: "rgb(235, 200, 26)", marginLeft: "0px" }}>
            Employee List
          </h6>
          <Input
            type="text"
            placeholder="Search"
            style={{
              marginLeft: "425px",
              width: "25%",
            }}
            prefix={<img src="./assets/searchbar.png" alt="no" />}
          />

          <Button
            type="button"
            onClick={showModal}
            style={{
              backgroundColor: "#ffc53d",
              color: "black",
              marginLeft: "230px",
            }}
          >
            Create Mock
          </Button>
          <Modal
            title="Add Mock"
            visible={isModalVisible}
            onOk={handleCreate}
            onCancel={handleCancel}
          >
            <Form layout="vertical">
              <Form.Item label="Batch Id">
                <Select>
                  <Select.Option value="id">1</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Mentor Name">
                <Input />
              </Form.Item>
              <Form.Item label="Technologies">
                <Select>
                  <Option value="1">Java</Option>
                  <Option value="2">Javascript</Option>
                  <Option value="3">React</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Start Date">
                <Input type="datetime-local" />
              </Form.Item>
            </Form>
          </Modal>
        </div>

        <Content>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            style={{
              marginLeft: "90px",
            }}
          />
        </Content>
        <GiveRating lgShow={lgShow} handleClose={handleLgClose}/>
      </Layout>
    </div>
  );
}

export default EmployeeList;
