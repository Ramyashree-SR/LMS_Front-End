import React, { useState } from "react";
import { Col, Collapse, Input, Row, Select } from "antd";
import "./edudetails.css"
import { Form } from "antd";
import {PlusCircleOutlined,DeleteFilled } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions';
const { Panel } = Collapse;

function EducationDetails() {
  const [Data, setData] = useState({
    Education_Type: "",
    YearOfPassing: "",
    Percentage: "",
    University_Name: "",
    Institute_Name: "",
    Specialization:"",
    State: "",
    
  });
  const [isAdd, setisAdd] = useState(true);
  const [Double, setDouble] = useState([Data]);
  let AddForm = () => {
    setisAdd(false);
    setDouble([...Double, setData]);
  };
  let DeleteForm = () => {
    setDouble([Double]);
  };
  return (
    <div>
      {Double.map((val, ind) => {
        return (
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Education Details" key="1" >
              <Form layout="vertical">
                <Row>
                  <Col span={8} push={3}>
                    <Form.Item label="Education Type">
                    <Select>
                     <Option value="1">Science</Option>
                     <Option value="2">Commerce</Option>
                     <Option value="3">Arts</Option>
                  </Select>
                      </Form.Item>
                  </Col>
                  <Col span={8} offset={4}>
                    <Form.Item label="Year Of Passing">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={8} push={3}>
                    <Form.Item label="Percentage (%)">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8} offset={4}>
                    <Form.Item label="University Name">
                    <Select>
                     <Option value="1">University of Mysore</Option>
                     <Option value="2">University of Mangalore</Option>
                     <Option value="3">University of Bangalore</Option>
                     <Option value="4">University of Maharastra</Option>
                     <Option value="5">University of Goa </Option>
                     </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={8} push={3}>
                    <Form.Item label="Institute Name">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8} offset={4}>
                    <Form.Item label="Specialization">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={8} push={3}>
                    <Form.Item label="State">
                    <Select>
                     <Option value="1">Andhra Pradesh</Option>
                     <Option value="2">Karnataka</Option>
                     <Option value="3">Telangana</Option>
                     <Option value="4">Maharastra</Option>
                     <Option value="5">Goa</Option>
                     <Option value="6">Madhya Pradesh</Option>
                     <Option value="7">Gujarat</Option>
                     <Option value="8">Rajasthan</Option>
                     <Option value="9">Kerala</Option>
                     <Option value="10">Tamil Nadu</Option>
                  </Select>
                    </Form.Item>
                  </Col>
                </Row>
                {isAdd ? (
                  <button className="Addbtn" onClick={AddForm} >
                    <PlusCircleOutlined /> Add{" "}
                  </button>
                ) : ind > 0 ? (
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

export default EducationDetails;
