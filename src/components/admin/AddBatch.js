import React from "react";
import {
  Button,
  Table,
  Modal,
  DatePicker,
  Form,
  Input,
  Select,
  Breadcrumb,
} from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined ,DownOutlined} from "@ant-design/icons";
import { Content, Header } from "antd/lib/layout/layout";
import { Layout, Dropdown, Menu, Space, Typography } from "antd";

const { Option } = Select;

function AddBatch() {


  //status data
  const menu = (
    <Menu
      selectable
      defaultSelectedKeys={['3']}
      items={[
        {
          key: '1',
          label: 'In Progress',
        },
        {
          key: '2',
          label: 'Completed',
        },
        {
          key: '3',
          label: 'To be Started',
        },
      ]}
    />
  );

  //map the addnew data at new batch
  const mentorsList = ["Satyam", "Rohan", "Saayil", "Vihan"];
  const technologies = [
    "React",
    "Angular",
    "Java+Spring Boot",
    "Node Js+Express JS",
  ];


  const children = [];

  for (let i = 1; i < 10; i++) {
    children.push(
      <Option key={i.toString(10) + i}>{i.toString(10) + i}</Option>
    );
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const { RangePicker } = DatePicker;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  //Table Data
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      no: "1",
      BatchId: "#324",
      BatchName: "Chandan",
      MentorName: "Rohan",
      Technologies: "",
      Startdate: "27-10-2012",
      Enddate: "10-03-2021",
      Status: "In Progress",
    },
  ])
    // {

    //   No:"1",
    //   BatchId:"#12435",
    //   BatchName: 'Chandana',
    //   MentorName:'Sayil',
    //   Technologies:"Javascript",
    //   Startdate:"27-10-2012",
    //   Enddate:"10-03-2021",
    //   Status:"Completed",
    //   Action:""

    // },
  
    // {

    //   No:"2",
    //   BatchId:"#12569",
    //   BatchName: "JOHN",
    //   MentorName:"stieve",
    //   Technologies:"Java",
    //   Startdate:"24-10-2017",
    //   Enddate:"12-03-2024",
    //   Status:"In Progress",
    //   Action:""

    // }
  
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
      key: "technologies",
      title: "Technologies",
      dataIndex: "Technologies",
      render: () => (
        
          <Select
            mode="multiple"
            allowClear
            style={{
              width: "200px",
              backgroundColor: "#075575",
            }}
            // placeholder="Please select"
            onChange={handleChange}
          >
        {
          technologies.map((val, idx) => {
          return (
            <Select.Option key={idx} value={val}>
              <button
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#1f617b",
                  color: "#FFFFFF",
                }}
              >
                {val}
              </button>
            </Select.Option>
          );
        })}
      </Select>
      ),
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
      title: "Status",
      dataIndex: "Status",
      render: (record) => {
        return (
          <>
         <Select>
                  <Option value="1" style={{color:"#FAA81D"}}><b>In Progress</b></Option>
                  <Option value="2" style={{color:"green"}}><b>Completed</b></Option>
                  <Option value="3" style={{color:"#075575"}}><b>To Be Started</b></Option>
                </Select>
          </>
        );
      },
    
    },
    {
      title: "Actions",
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
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  // const data = [];
  // for (let i = 1; i <= 5; i++) {
  //   data.push({
  //     key: i,
  //     No: ` ${i}`,
  //     BatchId: "#567 ",
  //     BatchName: `Edward ${i}`,
  //     MentorName: `john ${i}`,
  //     Technologies: `Javascript ${i}`,
  //     Startdate: "27-10-2012",
  //     Enddate: "10-03-2021",
  //     Status: "In Progress",
  //     Action: "",
  //   });
  // }
  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      batch_name: "Name " + randomNumber,
      mentor_name: randomNumber + "Name",
      technologies: "Technologies " + randomNumber,
      start_date: "Date" + randomNumber,
      end_date: "Date" + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this batch record?",
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

  // const data = [];
  // for (let i = 1; i <= 5; i++) {
  //   data.push({
  //     key: i,
  //     No: ` ${i}`,
  //     BatchId: "#567 ",
  //     BatchName: `Edward ${i}`,
  //     MentorName: `john ${i}`,
  //     Technologies: `Javascript ${i}`,
  //     Startdate: "27-10-2012",
  //     Enddate: "10-03-2021",
  //     Status: "In Progress",
  //     Action: "",
  //   });
  // }
  // ])
  
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
      <div style={{ marginTop: "-50px" }}>
       
        <Layout style={{ marginLeft: "10px" }}>
          <div
            style={{
              background: "#FFFFFF",
              marginLeft: "10px",
              display: "flex",
            }}
          >
            <h6 style={{ color: "rgb(235, 200, 26)", marginLeft: "10px" }}>
              Batch List
            </h6>
            <input
              type="text"
              placeholder="Search"
              style={{ background: "#FFFFFF", marginLeft: "650px" }}
              autoFocus
            />

            <Button
              type="button"
              onClick={() => {
                showModal();
              }}
              style={{
                backgroundColor: "#ffc53d",
                color: "black",
                marginLeft: "50px",
              }}
            >
              + New Batch
            </Button>
            <Modal
              title="Add New Batch"
              visible={isModalVisible}
              onOk={() => {
                handleOk();
                onAddStudent();
              }}
              onCancel={handleCancel}
            >
              <Form layout="vertical">
                <Form.Item label="Batch Name">
                  <Input />
                </Form.Item>
                <Form.Item label="Mentor Name">
                  <Select>
                    {mentorsList.map((val, idx) => {
                      return (
                        <Select.Option key={idx} value={val}>
                          {val}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item label="Technologies">
                  <Select mode="multiple" >
                    {technologies.map((vaal, idx) => {
                      return (
                        <Select.Option key={idx} value={vaal}>
                          <button
                            style={{
                              
                              borderRadius: "5px",
                              backgroundColor: "#1f617b",
                              color: "#FFFFFF",
                            }}
                          >
                            {vaal}
                          </button>
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item label="Start Date">
                  <DatePicker
                    style={{ width: "100%" }}
                    dateFormat="dd/mm/yyyy"
                  />
                </Form.Item>
                <Form.Item label="End Date">
                  <DatePicker />
                </Form.Item>
              </Form>
            </Modal>
          </div>
          <Content>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={dataSource}
              style={{ marginLeft: "10px" }}
            />

            {/* <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
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
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
           <Input
            value={editingStudent?.email}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.address}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          />
        </Modal> */}
          </Content>
        </Layout>
      </div>
    );
  }
}
export default AddBatch;
