import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
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
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Label>Search Name</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Mark Kwon"
            onChange={(event) => {
              setKeyword(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-5" controlId="formBasicSearchButton">
          <Button variant="danger" type="submit" style={{ width: "100%" }}>
            <strong>Search</strong>
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
