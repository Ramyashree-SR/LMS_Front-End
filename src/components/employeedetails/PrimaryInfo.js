import React from "react";
import { Col, DatePicker, Form, Input, Row, Select } from 'antd';


function PrimaryInfo() {
    
  return (
    <div >
      <Form layout="vertical" style={{marginTop:"0px"}}>
        <Row>
          <Col span={8} push={3}>
            <Form.Item label="Employee ID">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} offset={4}>
            <Form.Item label="Employee Name">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8} push={3}>
            <Form.Item label="Date Of Join">
              <DatePicker
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col span={8} offset={4}>
            <Form.Item label="Date Of Birth">
              <DatePicker
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8} push={3}>
            <Form.Item label="E-mail ID">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} offset={4}>
            <Form.Item label="Blood Group">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8} push={3}>
            <Form.Item label="Designation">
            <Select>
                  <Select.Option value="search" >Search</Select.Option>
                  <Select.Option value="system enginneer ">System Enginneer</Select.Option>
                  <Select.Option value="Associate Engineer">Associate Engineer</Select.Option>
                  <Select.Option value="Software Engineer">Software Engineer</Select.Option>
                </Select>
            </Form.Item>
          </Col>
          <Col span={8} offset={4}>
            <Form.Item label="Gender">
            <Select>
                  <Select.Option value="0" >Search</Select.Option>
                  <Select.Option value="1">Male</Select.Option>
                  <Select.Option value="2">Female</Select.Option>
                  </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8} push={3}>
            <Form.Item label="Nationality">
            <Select>
                  <Select.Option value="search" >Search</Select.Option>
                  <Select.Option value="system enginneer ">Hindu</Select.Option>
                  <Select.Option value="Associate Engineer">Muslim</Select.Option>
                  <Select.Option value="Software Engineer">Christian</Select.Option>
                </Select>
            </Form.Item>
          </Col>
          <Col span={8} offset={4}>
            <Form.Item label="Employee Status">
            <Select>
                  <Select.Option value="search" >Search</Select.Option>
                  <Select.Option value="1">Excellent</Select.Option>
                  <Select.Option value="2">Good</Select.Option>
                  <Select.Option value="3">Average</Select.Option>
                </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
     
    </div>
  );
}

export default PrimaryInfo;
