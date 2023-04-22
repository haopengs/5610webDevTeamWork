import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import AdminScreen from "./AdminScreen";
import CookScreen from "./CookScreen";
import WaiterScreen from "./WaiterScreen";
import UserScreen from "./UserScreen";

export default function ProfileScreen() {
  const { currentAccount } = useSelector((state) => state.accounts);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentAccount) {
      alert("Please Login");
      navigate("/login");
    }
  }, [currentAccount, navigate]);

  return (
    <div>
      <div>
        {currentAccount.role === "admin" && <AdminScreen />}
        {currentAccount.role === "user" && <UserScreen />}
        {currentAccount.role === "cook" && <CookScreen />}
        {currentAccount.role === "waiter" && <WaiterScreen />}
      </div>
    </div>
  );
}
