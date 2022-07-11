import React from 'react';
import { Button, Table, Input, DatePicker, Layout } from "antd";
import { useState } from "react";
import { WarningFilled } from "@ant-design/icons";
import { Content, Header } from "antd/lib/layout/layout";
import { Dropdown, Menu, Space } from "antd";
// import {DownOutlined} from '@ant-design/icons';
import Attendence from "./Attendence";
import "./batchlist.css"
import { useNavigate } from "react-router-dom";

function BatchList() {

  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => {
    setLgShow(false);
  };

   //Navigate to nextpage
   let navigate=useNavigate()
   let navigateToEmployeeList=()=>{
     navigate("/EmployeeList")
   }
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <p className="dropDownName">Initial Strength: 100</p>,
        },

        {
          key: "2",
          label: <p className="dropDownName">Dropout :10</p>,
        },
        {
          key: "3",
          label: <p className="dropDownName">Terminated: 10</p>,
        },
        {
          key: "4",
          // danger: true,
          label: <p className="dropDownName">Absconding :10</p>,
        },
        {
          key: "5",
          label: <p className="dropDownName">Present Strenght: 70</p>,
        },
      ]}
    />
  );

  const { RangePicker } = DatePicker;

  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  const [isEditing, setIsEditing] = useState(false);
  const [editingBatch, setEditingBatch] = useState(null);

  const columns = [
    {
      title: "No",
      dataIndex: "No",
    },
    {
      title: "BatchId",
      dataIndex: "BatchId",
    },
    {
      title: "BatchName",
      dataIndex: "BatchName",
    },
    {
      title: "MentorName",
      dataIndex: "MentorName",
    },
    {
      title: "Technologies",
      dataIndex: "Technologies",
    },
    {
      title: "Startdate",
      dataIndex: "Startdate",
    },
    {
      title: "Enddate",
      dataIndex: "Enddate",
    },
    {
      title: "BatchStatus",
      render: (record) => {
        return (
          <>
            <Dropdown overlay={menu} >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <WarningFilled
                    onClick={() => {
                      onEditBatchStatus(record);
                    }}
                    style={{ fontSize: "30px", color: "#ffc53d" }}
                  />
                  {/* <DownOutlined /> */}
                </Space>
              </a>
            </Dropdown>
            <button
              onClick={() => {
                setLgShow(true);
              }}
              style={{
                marginLeft: "40px",
               
              }}
              className="attendence"
            >
              Attendence
            </button>
            &nbsp;&nbsp;
            
              
              <img 
               onClick={navigateToEmployeeList}
                src="./assets1/data/Xnix-Line-Right Arrow.png"
                alt="rightarrow"
              />
            
          </>
        );
      },
    },
  ];

  const onEditBatchStatus = (record) => {
    setIsEditing(true);
    setEditingBatch({ ...record });
  };

  // const onEditRating = (record) => {
  //   setIsEditing(true);
  //   setEditingBatch({ ...record });
  // };

  // const resetEditing = () => {
  //   setIsEditing(false);
  //   setEditingBatch(null);
  // };

  const data = [];

  for (let i = 1; i <= 5; i++) {
    data.push({
      key: i,
      No: `${i}`,
      batchId: "",
      Batchname: ` ${i}`,
      mentorname: `${i}`,
      technologies: "",
      startdate: "",
      endstate: "",
      action: "",
    });
  }

  {
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
        <Layout style={{ marginLeft: "10px", marginBottom: "1px", }}>
          <div
            style={{
              background: "#FFFFFF",
              marginLeft: "80px",
              display: "flex",
            }}
          >
            <h6 style={{ color: "rgb(235, 200, 26)", marginLeft: "10px" }}>
              Batch List
            </h6>
            <Input
              type="text"
              size="small"
              placeholder="search"
              style={{
                marginLeft: "790px",
                width:"25%"
              }}
              prefix={<img src="./assets/searchbar.png" alt="no"/>} />
          </div>

          <Content>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              style={{
                marginLeft: "80px",
              }}
            />

            {/* <Modal
              title="Attendence(20 mar 2020)"
              visible={isEditing}
              okText="Submit"
              onCancel={() => {
                resetEditing();
              }}
              onOk={() => {
                setDataSource((pre) => {
                  return pre.map((batch) => {
                    if (batch.id === editingBatch.id) {
                      return editingBatch;
                    } else {
                      return batch;
                    }
                  });
                });
                resetEditing();
              }}
            > */}
            {/* <Input
            value={editingStudent.BatchName}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, BatchName: e.target.value };
              });
            }}
          />
           <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, MentorName: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, Technologies: e.target.value };
              });
            }}
          /> */}
            {/* </Modal> */}
          </Content>
        </Layout>
        <Attendence lgShow={lgShow} handleClose={handleClose} />
      </div>
    );
  }
}

export default BatchList;
