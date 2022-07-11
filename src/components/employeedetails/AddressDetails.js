import { Col, Form, Input, Row } from "antd";
import { Collapse } from 'antd';
import React, { useState } from "react";
import { PlusCircleOutlined, DeleteFilled  } from '@ant-design/icons';
import './address.css';
const { Panel } = Collapse;

function AddressDetails() {
  const [address, setAddress] = useState({
    Address_Type: "",
    Door_No: "",
    Street: "",
    Locality: "",
    City: "",
    State: "",
    Pin_Code: "",
    Land_Mark: "",
  });
  const [isAdd, setisAdd] = useState(true);
  const [Double, setDouble] = useState([address]);
  let AddForm = () => {
    setisAdd(false);
    setDouble([...Double, setAddress]);
  };
  let DeleteForm = () => {
    setDouble([Double]);
  };
  return (
    <div>
      {Double.map((val, idx) => {
        return (
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Address Details">
              <Form layout="vertical">
                <Row>
                  <Col span={8} push={3}>
                    <Form.Item label="Address Type">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8} offset={4}>
                    <Form.Item label="Door No">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={8} push={3}>
                    <Form.Item label="Street">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8} offset={4}>
                    <Form.Item label="Locality">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={8} push={3}>
                    <Form.Item label="City">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8} offset={4}>
                    <Form.Item label="State">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={8} push={3}>
                    <Form.Item label="Pin Code">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8} offset={4}>
                    <Form.Item label="Land Mark">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                {isAdd ? (
                  <button className="addbutton" onClick={AddForm}>
                    <PlusCircleOutlined /> Add{" "}
                  </button>
                ) : idx > 0 ? (
                  <button className="addbutton" onClick={DeleteForm}>
                    <DeleteFilled/> Delete{" "}
                  </button>
                ) : (
                  <button className="addbutton" onClick={AddForm}>
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

export default AddressDetails;
