import React, { useEffect } from "react";
import { Layout, Button, Form, Modal, Input, Select, Space, Breadcrumb } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { Table } from "antd";
import { useState } from "react";
import { Option } from "antd/lib/mentions";

function Request() {

  //approve function modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };
  
  //reject modal function
  const [isModelVisible, setIsModelVisible] = useState(false);

  const showModel = () => {
    setIsModelVisible(true);
  };

  const handleSubmit = () => {
    setIsModelVisible(false);
  };

  const handleCancel = () => {
    setIsModelVisible(false);
  };

  const [form] = Form.useForm();

  const [dataSource,setDataSource] = useState([])
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
      title: "YOP",
      dataIndex: "YOP",
    },
    {
      title: "Percentage",
      dataIndex: "Percentage",
    },
    {
      title: "Experience",
      dataIndex: "Experience",
    },
    {
      title: "ContactNo",
      dataIndex: "ContactNo",
    },
    {
      title: "Action",
      render: () => {
        return (
          <>
            <Button
              type="button"
              onClick={showModal}
              style={{
                backgroundColor: "#d9f7be",
                color: "#73d13d",
              }}
            >
              <b>Approve</b>
            </Button>
            <Modal
              title="Change Status"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleClose}
            >
              <Form layout="vertical">
                <Form.Item label="Batch ID">
                  <Form.Item>
                    <Select>
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                    </Select>
                  </Form.Item>
                </Form.Item>
                <Form.Item label="Batch Name">
                  <Form.Item>
                    <Select>
                      <Option value="1">Rohan</Option>
                      <Option value="2">Charvi</Option>
                      <Option value="3">Riya</Option>
                    </Select>
                  </Form.Item>
                </Form.Item>
              </Form>
            </Modal>
            <Button
              type="button"
              onClick={showModel}
              style={{
                backgroundColor: "#ffccc7",
                color: "#f5222d",
                marginLeft: "10px",
              }}
            >
              <b>Reject</b>
            </Button>
            <Modal
              title="Reason for Rejection"
              visible={isModelVisible}
              onOk={handleSubmit}
              onCancel={handleCancel}
            >
              <Form layout="vertical">
                <Form.Item label="Reason">
                  <Input />
                </Form.Item>
              </Form>
            </Modal>
          </>
        );
      },
    },
  ];

  // const [dataSource, setDataSource] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const data = [];
  useEffect(() => {
    const data = [];
    for (let i = 1; i <= 2; i++) {
      data.push({
        key: i,
        No: ` ${i}`,
        EmployeeId: "",
        EmployeeName: "",
        YOP: "",
        Percentage: "",
        Experience: "",
        ContactNo: "",
        Action: "",
      });
    }
    setDataSource(data);
  }, [data]);

  
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
      <div style={{marginTop:"-50px"}}>
        <Layout style={{ marginLeft: "10px" }}>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              marginLeft: "10px",
              display: "flex",
            }}
          >
            <h6 style={{ color: "rgb(235, 200, 26)", marginRight: "600px" }}>
              Request List
            </h6>
            <input
              type="text"
              placeholder="Search"
              style={{ marginLeft: "100px" ,width:"300px"}}
            />
          </div>
          <Content>
            {/* <div
              style={{
                marginBottom:-5,
              }}
            ></div> */}
             
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={dataSource}
              style={{ marginLeft: "10px" }}
            />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Request;
