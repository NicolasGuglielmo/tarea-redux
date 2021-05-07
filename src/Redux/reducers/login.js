const defaultState = {
  email: "example@example.com",
  password: "",
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };

    case "password":
      return { ...state, password: action.payload };

    default:
      return state;
  }
}

export default reducer;
