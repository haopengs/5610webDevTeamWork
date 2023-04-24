import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import AdminScreen from "./AdminScreen";
import CookScreen from "./CookScreen";
import WaiterScreen from "./WaiterScreen";
import UserScreen from "./UserScreen";
import { loginThunk } from "../../services/auth/auth-thunks";
import { isAuthenticated } from "../../services/auth/auth-service";


export default function ProfileScreen() {
  const { currentAccount } = useSelector((state) => state.accounts);
  const { isLogged } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentAccount) {
      const data = isAuthenticated();
      if (!data) {
        alert("Please Login");
        navigate("/login");
      } else {
        const username = data.username;
        const password = data.password;
        dispatch(loginThunk({ username, password }));
      }
    }
  }, [currentAccount, navigate]);

  return (
    <div>
      <div>
         {currentAccount && (
          currentAccount.role === "admin" && <AdminScreen />
        )}
        {currentAccount && (
          currentAccount.role === "user" && <UserScreen />
        )}
        {currentAccount && (
          currentAccount.role === "cook" && <CookScreen />
        )}
        {currentAccount && (
          currentAccount.role === "waiter" && <WaiterScreen />
        )}
      </div>
    </div>
  );
}
