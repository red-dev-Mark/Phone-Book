import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function ContactForm() {
  //useDispatch() : 함수 안에서 사용 안 하게 주의!
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  let [imageSrc, setImageSrc] = useState(null);

  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber, email, imageSrc },
    });
    setName("");
    setPhoneNumber("");
    setEmail("");
    setImageSrc(null);
  };

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, ""); // 숫자가 아닌 모든 문자를 제거
    let formattedInput = "";

    // 숫자를 적절한 형식으로 변환
    if (input.length > 3 && input.length <= 7) {
      formattedInput = `${input.slice(0, 3)}-${input.slice(3)}`;
    } else if (input.length > 7) {
      formattedInput = `${input.slice(0, 3)}-${input.slice(3, 7)}-${input.slice(
        7,
        11
      )}`;
    } else {
      formattedInput = input;
    }
    // formattedInput = `${input.slice(0,3)}-${input.slice(3,7)}-${input.slice(7,11)}`

    setPhoneNumber(formattedInput); // 변환된 값을 상태에 저장
  };

  const convertURL = (event) => {
    const imageFile = event.target.files[0];

    if (imageFile && imageFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result); // 파일 내용을 읽은 결과(데이터 URL)를 상태에 저장
      };
      reader.readAsDataURL(imageFile); // 파일의 내용을 읽어 데이터 URL로 변환
    }
  };

  return (
    <div>
      {/* type이 submit인 버튼이 클릭되면, 폼에서 작동(onSubmit) */}
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <FormControl
            size="lg"
            type="text"
            placeholder="Mark Kwon"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            //  onChange : 타이핑될 때마다 값을 읽어와서 저장
          />
          <br />
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="010-0000-0000"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            maxLength={13} // 하이픈 포함 최대 길이
          />
          <br />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            size="sm"
            type="email"
            placeholder="mark@gmail.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Profile Image</Form.Label>
          <Form.Control
            type="file"
            controlid="formImage"
            className="mb-4"
            onChange={convertURL}
          />
        </Form.Group>

        <Button variant="danger" type="submit" style={{ width: "100%" }}>
          <strong>Add To Phone-Book</strong>
        </Button>
      </Form>
    </div>
  );
}
