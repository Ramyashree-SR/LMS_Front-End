import React from 'react'
import { Button, Table, Modal, Form, Input, Select, Layout, Breadcrumb } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Typography } from 'antd';
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Header, Content, } from 'antd/lib/layout/layout';

function AddMentor() {

    const { Option } = Select;
    const children = [];
    for (let i = 1; i < 36; i++) {
        children.push(<Option key={i.toString(10) + i}>{i.toString(10) + i}</Option>);
      }
      
      const handleChange = (value) => {
        console.log(`Selected: ${value}`);
      };
     
     
 
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


  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([])
  const columns = [
    {
      title: "No",
      dataIndex: "No",
    },
    {
      title: "MentorName",
      dataIndex: "MentorName",
    },
    {
      title: "EmployeeID",
      dataIndex: "EmployeeID",
    },
    {
      title: "EmailID",
      dataIndex: "EmailID",
    },
    {
      title: "Skills",
      dataIndex: "Skills",
    },
    {
      title: "Action",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "black", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  const data = [];

  for (let i = 1; i <= 5; i++) {
    data.push({
      key: i,
      No: ` ${i}`,
      MentorName: ` Ramya${i}`,
      BatchName: `Uplift ${i}`,
      EmployeeID: ` No.12456${i}`,
      EmailID: `reghfrjfn123@gmail.com ${i}`,
      Skills: "react,java",
      Action: "",
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
    // const hasSelected = selectedRowKeys.length > 0;
    return (
      <div stle={{marginTop:"50px"}}>
        <Layout style={{ marginLeft: "10px" }}>
          <div style={{ backgroundColor: "#FFFFFF", marginLeft: "10px" ,display:"flex"}}>
        <h6 style={{ color: "rgb(235, 200, 26)", marginLeft: "10px" }}>
            Mentor List
          </h6>
          <input
            type="text"
            placeholder="search"
            style={{
              marginLeft: "650px",
            }}
          />

          <Button
            type="primary"
            onClick={showModal}
            style={{
              backgroundColor: "#ffc53d",
              color: "black",
              marginLeft: "50px",
            }}
          >
            + New Mentor
          </Button>
          <Modal
            title="Add New Mentor"
            visible={isModalVisible}
            onCreate={handleCreate}
            onCancel={handleCancel}
          >
            <Form layout="vertical">
              <Form.Item label="Mentor Name">
                <Input />
              </Form.Item>
              <Form.Item label="Employee ID">
                <Input />
              </Form.Item>
              <Form.Item label="E-Mail ID">
                <Input />
              </Form.Item>
              <Form.Item label="Skills">
              <br />
           <Select
             mode="multiple"
        // size={size}
        placeholder="select"
        // defaultValue={['java', 'java2','python','c','c++']}
        onChange={handleChange}
        // style={{
        //   width: '100%',
        // }}
      >
        {children}
      </Select>
      </Form.Item>
            </Form>
          </Modal>
            </div>
          
        <Content>

        
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          style={{marginLeft:"10px"}}
        />

<Modal
      title="Edit Student"
          visible={isEditing}
          okText="Create"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
</Modal>
    
      </Content>
      </Layout>
      </div>
    );
  }
}
export default AddMentor;
