import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

export default function ContactList() {
  const contactList = useSelector((state) => state.contactList);
  const keyword = useSelector((state) => state.keyword);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      setFilterList(contactList.filter((item) => item.name.includes(keyword)));
    } else {
      setFilterList(contactList);
    }
  }, [contactList, keyword]); // 의존성 배열에 contactList와 keyword를 추가

  return (
    <div>
      <SearchBox />
      <h5>Profile Image</h5>
      <div className="contact-container">
        {filterList.length === 0 ? (
          <h3 className="contact-text">
            <strong className="no-text">No Result</strong>
          </h3>
        ) : (
          <>
          <h3 className="contact-text">
              <strong>{filterList.length}</strong> 개의 연락처
            </h3>
            {filterList.map((item, index) => (
              <ContactItem item={item} key={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
