import React from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contactList = useSelector((state) => state.contactList);

  return (
    <div>
      <SearchBox />
      {contactList.map((item, index) => (
        <ContactItem key={index} item={item} img={index}/>
      ))}
    </div>
  );
}
