import React from "react";

export default function ContactItem({ item }) {
  return (
    <div className="contact-item">
      <div className="contact-image-container">
        {item.image ? (
          <img
            className="contact-image"
            src={URL.createObjectURL(item.image)}
            alt={item.name}
          />
        ) : (
          <img
            className="contact-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TlXzUKhylNmPVwfITfk2l7TZDLf9BJAoyAFS7n7fEg&s"
            alt={item.name}
          />
        )}
      </div>

      <div className="contact-info-container">
        <h3 className="contact-name">{item?.name}</h3>
        <h5 className="contact-phone">{item?.phoneNumber}</h5>
        <p className="contact-email">{item?.email}</p>
      </div>
    </div>
  );
}
