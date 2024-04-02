import React from "react";
import { Col, Row } from "react-bootstrap";

export default function ContactItem({ item }) {
  return (
    <div>
      <Row>
        <Col lg={2}>
          <img
            // style={{ width: "50px" }}
            width={80} //두가지 방법
            src="https://img.allurekorea.com/allure/2017/04/style_58ff2afd89457-e1493117714656.jpg"
            alt=""
          />
        </Col>
        <Col lg={10}>
          <div>{item?.name}</div>
          <div>{item?.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  );
}
