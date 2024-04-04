const initialStore = {
  keyword: "",
  contactList: [],
};

export default function reducer(state = initialStore, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name === "" ? "No Name" : payload.name,
            phoneNumber:
              payload.phoneNumber === ""
                ? "No Phone Number"
                : payload.phoneNumber,
            email: payload.email === "" ? "No Email" : payload.email,
            image: payload.imageSrc === "" ? "" : payload.imageSrc,
          },
        ],
      };
    case "SEARCH_NAME":
      return { ...state, keyword: payload.keyword };
    default:
      return { ...state };
  }
}
