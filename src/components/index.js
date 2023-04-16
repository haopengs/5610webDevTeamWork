import NavigationSidebar from "./Nag-sidebar";
import React from "react";
import { Routes, Route,  } from "react-router";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./Home";
import SearchPage from "./Search";
import store from "../reducers/store";
import Profile from "./screens/Profile";
import AdminScreen from "./screens/AdminScreen"
import UserScreen from "./screens/UserScreen"
import DishesScreen from "./admin/Dishes"
import Login from "./screens/Login"
import SignUp from "./screens/SignUp";
import CookScreen from "./screens/CookScreen";
import WaiterScreen from "./screens/WaiterScreen";
import MakeAppointments from "./user/MakeAppointments";
import OrderDishes from "./user/OrderDishes";
import OrderHistory from "./user/OrderHistory"
import EditProfile from "./screens/EditProfile";
import DishDetial from "./Detail/DishDetial";
import UserDetail from "./Detail/UserDetail";


function RestaurantApp(){
  return (
    <Provider store={store}>
        <NavigationSidebar/>
        <Routes>
            <Route path="/home"    element={<HomePage/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/search"  element={<SearchPage/>}/>
            <Route path="*"        element={<HomePage/>}/>
            <Route path="/login"  element={<Login/>}/>
            <Route path="/register" element={<SignUp/>} />
            <Route path="/admin" element={<AdminScreen/>} />
            <Route path="/user" element={<UserScreen/>} />
            <Route path="/dishes" element={<DishesScreen/>} />
            <Route path="/cook" element={<CookScreen/>} />
            <Route path="/waiter" element={<WaiterScreen/>} />
            <Route path="/user/makeAppointment" element={<MakeAppointments/>} />
            <Route path="/user/orderDishes" element={<OrderDishes/>} />
            <Route path="/user/orderHistory" element={<OrderHistory/>} />
            <Route path="/user/editProfile" element={<EditProfile/>} />
            <Route path="/user" element={<UserScreen/>} />
            <Route path="/dishes" element={<DishesScreen/>} />
            <Route path="/dish/:dishId" element={<DishDetial/>} />
        </Routes>
    </Provider>
);
}

export default RestaurantApp;