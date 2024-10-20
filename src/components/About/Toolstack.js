import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiEclipseide, SiMysql } from "react-icons/si"; 
import { FaWindows } from "react-icons/fa"; 
import { DiCode } from "react-icons/di"; 

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCode /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {}
      </Col>
    </Row>
  );
}

export default Toolstack;
