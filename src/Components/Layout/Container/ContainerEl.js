import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const ContainerEl = () => {
  return (
    <Container fluid className="main__container">
      <Row>
        <Col className="section__sidebar col-2 bg-dark ">
          <Sidebar />
        </Col>
        <Col className="section__main">2of2</Col>
      </Row>
    </Container>
  );
};

export default ContainerEl;
