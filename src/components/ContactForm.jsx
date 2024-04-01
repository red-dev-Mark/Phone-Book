import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch(); //useDispatch() : 함수 안에서 사용 안 하게 주의!

  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      //액션을 던져!
      type: "ADD_CONTACT",
      payload: { name, phoneNumber }, //{ name: name, phoneNumber: phoneNumber }
    });
  };

  return (
    <div>
      <Form onSubmit={addContact}>
        {/* type이 submit인 버튼이 클릭되면, 폼에서 작동(onSubmit) */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            onChange={(event) => setName(event.target.value)}
          />
          {/* onChange : 타이핑될 때마다 값을 읽어와서 저장 */}
          <Form.Text className="text-muted" style={{ marginLeft: "10px" }}>
            ex. James Cook
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone Number"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="warning" type="submit" style={{ width: "50%" }}>
          Add To Phone-Book
        </Button>
      </Form>
    </div>
  );
}
