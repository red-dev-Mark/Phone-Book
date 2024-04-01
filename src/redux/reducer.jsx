let initialState = {
  contactList: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action; //구조분해할당

  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    default:
      return { ...state };
  }
}
