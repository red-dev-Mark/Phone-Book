import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

export default function ContactList() {
  // const { contactList, keyword } = useSelector((state) => state.contactList); //이건 왜 안될까?
  const contactList = useSelector((state) => state.contactList);
  const keyword = useSelector((state) => state.keyword);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (contactList && keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList || []);
    }
  }, [keyword, contactList]);

  return (
    <div>
      <SearchBox className="search-area" />
      {/* 연락처가 없는 경우에는 "연락처가 없습니다." 문구 표시 */}
      {filteredList.length === 0 ? (
        <strong className="no-text">연락처가 없습니다.</strong>
      ) : (
        <>
          <strong>{filteredList.length}</strong>개의 연락처
          {filteredList.map((item, index) => (
            <ContactItem item={item} key={index} />
          ))}
        </>
      )}
    </div>
  );
}
