import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAccountThunk } from "../../services/accounts/accounts-thunks";

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const register = () => {
    dispatch(
      createAccountThunk({
        firstname,
        lastname,
        username,
        password,
        birthday,
        phone,
        email,
        role,
      })
    );
    navigate("/login");
  };

  return (
    <div className="p-5">
      <h1>Register</h1>
      <div className="mt-4">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
      </div>
      <div className="mt-4">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
      </div>
      <div className="mt-4">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="mt-4">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="mt-4">
        <label>Birthday</label>
        <input
          type="date"
          className="form-control"
          onChange={(e) => {
            setBirthday(e.target.value);
          }}
        />
      </div>
      <div className="mt-4">
        <label>Phone Number</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
      <div className="mt-4">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="mt-4">Role</div>
      <div className="form-group">
        <input
          type="radio"
          className=""
          name="role"
          onChange={() => {
            setRole("user");
          }}
        />{" "}
        User
        <input
          type="radio"
          className="ms-5"
          name="role"
          onChange={() => {
            setRole("cook");
          }}
        />{" "}
        Cook
        <input
          type="radio"
          className="ms-5"
          name="role"
          onChange={() => {
            setRole("waiter");
          }}
        />{" "}
        Waiter
      </div>
      <button onClick={register} className="btn btn-warning mt-4 ">
        Register
      </button>
      <button
        onClick={() => navigate("/login")}
        className="btn btn-warning mt-4 ms-4"
      >
        Login
      </button>
    </div>
  );
}
