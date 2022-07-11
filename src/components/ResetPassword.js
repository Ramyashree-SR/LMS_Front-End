import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Form, Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "./Resetpassword.css";

function ResetPassword(props) {
  const [show, setShow] = useState(false);

  const handleHide = () =>{
    props.setShow(false);
  }
  const handleShow = () =>setShow(true);

  return (
    <div>
      <Modal show={ true}  onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title id="data">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          Reset your Password <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to continue
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Space direction="vertical">
              <Input.Password
                placeholder="Enter existing password"
                id="reset"
              />
              <br/>
              <Input.Password
                placeholder="Enter New password (must be atleast 6 characters)"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <br/>
              <Input.Password
                placeholder="Re-Confirm Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Space>
            </Form>
          
        </Modal.Body>
        <Modal.Footer>
            <div>
            <Button id="changestate" onClick={handleHide} style={{alignItems:"center"}}>
            Change
          </Button>
          </div>  
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ResetPassword;
