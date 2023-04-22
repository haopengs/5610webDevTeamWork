import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateAccountThunk } from "../../services/accounts/accounts-thunks";

export default function EditProfileScreen() {
  const { currentAccount } = useSelector((state) => state.accounts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState(currentAccount.username);
  const [password, setPassword] = useState(currentAccount.password);
  const [firstname, setFirstname] = useState(currentAccount.firstname);
  const [lastname, setLastname] = useState(currentAccount.lastname);
  const [birthday, setBirthday] = useState(currentAccount.birthday);
  const [phone, setPhone] = useState(currentAccount.phone);
  const [email, setEmail] = useState(currentAccount.email);

  const handleSave = async () => {
    const newAccount = {
      ...currentAccount,
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      birthday: birthday,
      phone: phone,
      email: email,
    };
    await dispatch(updateAccountThunk(newAccount));
    navigate("/profile");
  };

  return (
    <div className="p-5">
      <div className="row">
        <h4 className={""}>
          <b>Edit profile</b>
        </h4>
      </div>
      <div>
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
            type="text"
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
            value={new Date(birthday).toISOString().substr(0, 10)}
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
            value={phone}
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
            value={email}
            className="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="row">
        <button
          onClick={handleSave}
          className={"rounded-pill btn border mt-4 font-weight-bold"}
        >
          <b>Save</b>
        </button>
        <Link
          to="/profile"
          className={"rounded-pill btn border  mt-4 font-weight-bold"}
        >
          <b>Cancel</b>
        </Link>
      </div>
    </div>
  );
}
