import NavigationSidebar from "./Nag-sidebar";
import React from "react";
import { Routes, Route } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import HomeComponent from "./Home";

const store = configureStore({
  reducer: {
    // Add your reducers here
  }
});


function RestaurantApp(){
  return (
    <Provider store={store}>
    <div className="row mt-2">
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="explore"/>
      </div>
      <div className="col-10 col-md-10 col-lg-7 col-xl-6"
           style={{"position": "relative"}}>
        <Routes>
          <Route path="/home"    element={<HomeComponent/>}/>
          {/* <Route path="/explore" element={<ExlporePage/>}/>
          <Route path="/ProfileScreen" element={<ExlporePage/>}/> */}
        </Routes>
      </div>
    </div>
    </Provider>
);
}

export default RestaurantApp;