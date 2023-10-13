import React from "react";
import { Col, Row, Divider } from "antd";
const GridTest = () => (
  <>
    <Divider orientation="left">Responsive</Divider>
    <Row style={{ background: "blue", color: "white" }}>
      <Col span={24}>This is 24 space grid</Col>
    </Row>
    <Row style={{ background: "silver", color: "white" }}>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>
);
export default GridTest;
