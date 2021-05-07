export const setEmail = (email) => {
  return {
    type: "email",
    payload: email,
  };
};

export const setPassword = (password) => {
  return {
    type: "password",
    payload: password,
  };
};
