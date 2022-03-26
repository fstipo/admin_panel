import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContainerEl = () => {
  return (
    <Container fluid className="main__container">
      <Row>
        <Col className="section__sidebar col-2">1 of 1</Col>
        <Col className="section__main">2of2</Col>
      </Row>
    </Container>
  );
};

export default ContainerEl;
