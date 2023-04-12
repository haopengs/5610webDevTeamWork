import NavigationSidebar from "./Nag-sidebar";
import React from "react";
import { Routes, Route } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import HomePage from "./Home";
import ProfilePage from "./Profile";
import SearchPage from "./Search";
import LoginPage from "./Login";

const store = configureStore({
  reducer: {
    // Add your reducers here
  }
});


function RestaurantApp(){
  return (
    <Provider store={store}>
      <div>
        <NavigationSidebar/>
      </div>
        <Routes>
          <Route path="/home"    element={<HomePage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/search"  element={<SearchPage/>}/>
          <Route path="*"        element={<HomePage/>}/>
          <Route path="/login"  element={<LoginPage/>}/>
        </Routes>
    </Provider>
);
}

export default RestaurantApp;