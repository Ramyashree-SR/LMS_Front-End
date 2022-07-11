import React from "react";
import { Col, Form, Input, Row, Select } from "antd";
import { Option } from 'antd/lib/mentions';


function SecondaryInfo() {
  return (
    <div>
      <Form layout="vertical">
        <Row>
          <Col span={8} push={3}>
            <Form.Item label="Pan No">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} offset={4}>
            <Form.Item label="Aadhar No">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8} push={3}>
            <Form.Item label="Father Name">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} offset={4}>
            <Form.Item label="Mother Name">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8} push={3}>
            <Form.Item label="Spouse Name">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} offset={4}>
            <Form.Item label="Passport No">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8} push={3}>
            <Form.Item label="Marital Status">
            <Select>
                  <Option value="1">Married</Option>
                  <Option value="2">UnMarried</Option>
                  </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SecondaryInfo;
