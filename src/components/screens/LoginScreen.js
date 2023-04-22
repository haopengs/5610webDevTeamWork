import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../services/auth/auth-thunks";

export default function LoginScreen() {
  useSelector((state) => state.accounts.error);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const check = await dispatch(loginThunk({ username, password }));
    if (check.error == null) {
      navigate("/profile");
    } else {
      alert("Please enter a correct username or password");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto mt-5">
          <div className="form-group">
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
          <div className="form-group mt-4">
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
          <button onClick={handleLogin} className="btn btn-warning mt-4">
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="btn btn-warning mt-4 float-end"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
