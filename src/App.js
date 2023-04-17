import React from "react";
import { Routes, Route } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import RestaurantApp from "./components";

function App() {
  return (
        <div>
            <Routes>
                <Route path="/*"    element={<RestaurantApp/>}/>
                {/* <Route path="/login" element={<LoginComp/>}/>
            <Route path="/profile" element={<ProfileCom/>}/>
            <Route path="/search" element={<SearchCom/>}/> */}
            </Routes>
        </div>
);
}

export default App;