import { Col, Collapse, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";
import { PlusCircleOutlined, DeleteFilled } from '@ant-design/icons';
import { Option } from "antd/lib/mentions";
import './edudetails.css'
const { Panel } = Collapse;

function Experience() {
  const [exp, setExp] = useState({
    Company_Name: "",
    YearOfExperience: "",
    DateofJoining: "",
    DateOfReliving: "",
    Designation: "",
    Location: "",
    
  });
  const [isAdd, setisAdd] = useState(true);
  const [Double, setDouble] = useState([exp]);
  let AddForm = () => {
    setisAdd(false);
    setDouble([...Double, setExp]);
  };
  let DeleteForm = () => {
    setDouble([Double]);
  };
  return (
    <div>
      {
      Double.map((val, idx) => {
        return (
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Experience" key="1">
              <Form layout="vertical">
                <Row>
                  <Col span={8} push={3}>
                    <Form.Item label="Company Name">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8} offset={4}>
                    <Form.Item label="Year Of Experience">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={8} push={3}>
                    <Form.Item label="Date Of Join">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8} offset={4}>
                    <Form.Item label="Date of Relieving">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={8} push={3}>
                    <Form.Item label="Designation">
                      <Select>
                    <Option value="1">Associate Software Engineer</Option>
                     <Option value="2">Data Scientist</Option>
                     <Option value="3">Programmer</Option>
                     </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8} offset={4}>
                    <Form.Item label="Location">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                {isAdd ? (
                  <button className="Addbtn" onClick={AddForm}>
                    <PlusCircleOutlined /> Add{" "}
                  </button>
                ) : idx > 0 ? (
                  <button className="Addbtn" onClick={DeleteForm}>
                    <DeleteFilled /> Delete{" "}
                  </button>
                ) : (
                  <button className="Addbtn" onClick={AddForm}>
                    <PlusCircleOutlined /> Add{" "}
                  </button>
                )}
              </Form>
            </Panel>
          </Collapse>
        );
      })}
    </div>
  );
}

export default Experience;
