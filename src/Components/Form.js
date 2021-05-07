import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword } from "../Redux/actions/setLogin";

const Form = ({ email, passowrd }) => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("LOGEANDO");
    console.log("DATOS:", login);
  }

  function handleChangeEmail(e) {
    dispatch(setEmail(e.target.value));
  }

  function handleChangePassword(e) {
    dispatch(setPassword(e.target.value));
  }

  const login = useSelector((store) => store.login);
  const dispatch = useDispatch();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ingrese su email
          <input
            type="email"
            value={login.email}
            onChange={handleChangeEmail}
          ></input>
        </label>
        <br />
        <br />
        <label>
          Ingrese su password
          <input
            type="password"
            value={login.passowrd}
            onChange={handleChangePassword}
          ></input>
        </label>
        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Form;
