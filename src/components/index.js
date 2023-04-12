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
        </Routes>
    </Provider>
);
}

export default RestaurantApp;