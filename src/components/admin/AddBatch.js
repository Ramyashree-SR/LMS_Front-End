import React from "react";
import {
  Button,
  Table,
  Modal,
  TreeSelect,
  DatePicker,
  Form,
  Input,
  Select,
  Breadcrumb,
} from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/lib/layout/layout";
import { Layout } from 'antd';

const { Option } = Select;

function AddBatch() {

  const children = [];

for (let i = 1; i < 10; i++) {
  children.push(<Option key={i.toString(10) + i}>{i.toString(10) + i}</Option>);
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

  const [isEditing, setIsEditing] = useState(false);
  const [editingBatch, setEditingBatch] = useState(null);
  const [dataSource, setDataSource] = useState([]);
  //   {

  //     No:"1",
  //     BatchId:"#12435",
  //     BatchName: 'Edward',
  //     MentorName:'john',
  //     Technologies:"Javascript",
  //     Startdate:"27-10-2012",
  //     Enddate:"10-03-2021",
  //     Status:"Completed",
  //     Action:""

  //   },
  //   {

  //     No:"2",
  //     BatchId:"#12569",
  //     BatchName: "JOHN",
  //     MentorName:"stieve",
  //     Technologies:"Java",
  //     Startdate:"24-10-2017",
  //     Enddate:"12-03-2024",
  //     Status:"In Progress",
  //     Action:""

  //   }
  // ])
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
      key:"technologies",
      title: "Technologies",
      dataIndex: "Technologies",
      render:() => (
        <>
          <Select
           mode="multiple"
           allowClear
           style={{
        width: '100%',
        backgroundColor:"#075575"
      }}
      placeholder="Please select"
      // defaultValue={['a10', 'c12']}
      onChange={handleChange}
    >
      {children}
      </Select>
      </>
      )},
    
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
    },
    {
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditBatch(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteBatch(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];
  const onDeleteBatch = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this batch record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((batch) => batch.id !== record.id);
        });
      },
    });
  };
  const onEditBatch = (record) => {
    setIsEditing(true);
    setEditingBatch({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingBatch(null);
  };

  const data = [];
  for (let i = 1; i <= 5; i++) {
    data.push({
      key: i,
      No: ` ${i}`,
      BatchId: "#567 ",
      BatchName: `Edward ${i}`,
      MentorName: `john ${i}`,
      Technologies: `Javascript ${i}`,
      Startdate: "27-10-2012",
      Enddate: "10-03-2021",
      Status: "In Progress",
      Action: "",
    });
  }
  // ])
  // for (let i = 1; i<=5; i++) {
  //   data.push({
  //     key: i,
  //     No:`${i}`,
  //     batchId:"",
  //     Batchname: ` ${i}`,
  //     mentorname:`${i}`,
  //     technologies:"",
  //     startdate:"",
  //     endstate:"",
  //     action:""

  //   });
  // }

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
        {/* <div
          style={{
            marginBottom: 12,
            display: "flex",
            marginLeft:"75px"
          }}
        > */}
         <Layout style={{ marginLeft: "10px" }}>
          <div style={{  background:"#FFFFFF",marginLeft: "10px",display:"flex"}}>
           <h6 style={{ color: "rgb(235, 200, 26)", marginLeft: "10px" }}>
            Batch List
          </h6>
         <input type="text" placeholder="Search" style={{background:"#FFFFFF", marginLeft:"650px"}}/>
           
          <Button
            type="button"
            onClick={showModal}
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
            onOk={handleOk}
             onCancel={handleCancel}
          >
            <Form layout="vertical">
              <Form.Item label="Batch Name">
                <Input />
              </Form.Item>
              <Form.Item label="Mentor Name">
                <Select>
                  <Select.Option value="name">Rohan</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Technologies">
                <TreeSelect
                  treeData={[
                    {
                      title: "Java",
                      value: "Java",
                      children: [
                        {
                          title: "core java",
                          value: "core java",
                        },
                      ],
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Start Date">
                <DatePicker />
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
        >
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
        </Modal>

            
        </Content>
        </Layout>
        </div>
    );
  }
}
export default AddBatch;
