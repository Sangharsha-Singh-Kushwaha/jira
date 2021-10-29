import React from "react";
import { Col, Container, Row } from "reactstrap";
import CardBoard from "../components/board/CardBoard";

const Board = () => {
  return (
    <Container>
      <Row style={{ marginTop: 20, marginBottom: 50 }}>
        <Col sm={12} md={6} lg={3}>
          <CardBoard text="Card text 1" />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <CardBoard text="Card text 1" />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <CardBoard text="Card text 1" />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <CardBoard text="Card text 1" />
        </Col>
      </Row>
    </Container>
  );
};
export default Board;
