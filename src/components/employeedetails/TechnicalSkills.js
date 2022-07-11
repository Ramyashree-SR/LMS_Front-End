import { Form, Input, Row ,Collapse, Col, Select} from "antd";
import React, { useState } from "react";
import {PlusCircleOutlined,DeleteOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions';
import './edudetails.css';
const { Panel } = Collapse;

function TechanicalSkills() {
  const [tech, setTech] = useState({
    Skill_Type: "",
    Skill_Rating: "",
    YearOfExperience: "",
   });
  const [isAdd, setisAdd] = useState(true);
  const [Double, setDouble] = useState([tech]);
  let AddForm = () => {
    setisAdd(false);
    setDouble([...Double, setTech]);
  };
  let DeleteForm = () => {
    setDouble([Double]);
  };
  return (
    <div>
      {Double.map((val, ind) => {
        return (
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Skills" key="1">
              <Form layout="vertical">
                <Row>
                  <Col span={8} push={2}>
                    <Form.Item label="Skill Type">
                      <Input/>
                    </Form.Item>
                  </Col>
                  <Col span={8} offset={6}>
                    <Form.Item label="Skill Rating">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={8} push={2}>
                    <Form.Item label="Year Of Experience(over skill)">
                    <Select>
                  <Option value="1">0</Option>
                  <Option value="2">1</Option>
                  <Option value="3">2</Option>
                  <Option value="4">3</Option>
                  </Select>
                    </Form.Item>
                  </Col>
                </Row>
                {isAdd ? (
                  <button className="Addbtn" onClick={AddForm}>
                    <PlusCircleOutlined /> Add{" "}
                  </button>
                ) : ind > 0 ? (
                  <button className="Addbtn" onClick={DeleteForm}>
                    <DeleteOutlined /> Delete{" "}
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

export default TechanicalSkills;
