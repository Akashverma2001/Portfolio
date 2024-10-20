import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import { FaGithub } from "react-icons/fa"; 
import { SiCsharp, SiDotnet, SiWindows, SiMysql } from "react-icons/si"; 
import { GiCircuitry } from "react-icons/gi"; 
import { MdOutlineMemory } from "react-icons/md"; 

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiCircuitry /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineMemory /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows /> {}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet /> {}
      </Col>
    </Row>
  );
}

export default Techstack;
