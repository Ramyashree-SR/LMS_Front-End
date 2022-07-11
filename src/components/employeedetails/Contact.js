import { Col, Collapse, Form, Input, Row } from "antd";
import React, { useState } from "react";
import './edudetails.css';
import { PlusCircleOutlined, DeleteFilled } from "@ant-design/icons";

const { Panel } = Collapse;
function Contact() {
  const [Copy, setCopy] = useState({
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
  const [Double, setDouble] = useState([Copy]);
  let AddForm = () => {
    setisAdd(false);
    setDouble([...Double, setCopy]);
  };
  let DeleteForm = () => {
    setDouble([Double]);
  };
  return (
    <div>
      {Double.map((val, idx) => {
        return (
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Contact" key="1">
              <Form layout="vertical">
                <Row>
                  <Col span={8} push={3}>
                    <Form.Item label="Contact Type">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8} offset={4}>
                    <Form.Item label="Contact Number">
                      <Input onkeydown="phoneNumberFormatter()" id="phone-number"/>
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

export default Contact;
