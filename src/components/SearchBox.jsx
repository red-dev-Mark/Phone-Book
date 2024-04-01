import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function SearchBox() {
  return (
    <div>
      <Row>
        <Col>
          <Form.Label>Search Name</Form.Label>
        </Col>
      </Row>
      <Row>
        <Col lg={9}>
          <Form.Control type="text" placeholder="Name" />
        </Col>
        <Col lg={3}>
          <Button variant="warning" style={{ width: "100%" }}>
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
}
