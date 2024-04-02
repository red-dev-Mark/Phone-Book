import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function SearchBox() {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const searchName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_NAME", payload: { keyword } });
  };

  return (
    <div>
      <Form onSubmit={searchName}>
        <Row>
          <Col>
            <Form.Label>Search Name</Form.Label>
          </Col>
        </Row>
        <Row>
          <Col lg={9} md={6} sm={12} xs={12}>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(event) => setKeyword(event.target.value)}
            />
          </Col>
          <Col lg={3} md={6} sm={12} xs={12}>
            <Button type="submit" variant="warning" className="Add-Button">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
