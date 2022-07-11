import React from "react";
import { Col, Form, Input, Row, Select } from "antd";
import { Option } from "antd/lib/mentions";

function BankDetails() {
  return (
    <div>
      <Form layout="vertical">
        <Row>
          <Col span={8} push={2}>
            <Form.Item label="Account No">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} offset={6}>
            <Form.Item label="Bank Name">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8} push={2}>
            <Form.Item label="Account Type">
              <Select>
                     <Option value="1">Savings Account</Option>
                     <Option value="2">Current Account</Option>
                    </Select>
            </Form.Item>
          </Col>
          <Col span={8} offset={6}>
            <Form.Item label="IFSC Code">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8} push={2}>
            <Form.Item label="Branch">
              <Select>
                    <Option value="1">Banglore</Option>
                     <Option value="2">Mysore</Option>
                     <Option value="3">Belgum</Option>
                     <Option value="4">Kolar</Option>
                     <Option value="5">Mangalore</Option>
                     </Select>
            </Form.Item>
          </Col>
          <Col span={8} offset={6}>
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
      </Form>
    </div>
  );
}

export default BankDetails;
