import React from "react";
import { Routes, Route } from "react-router";
import RestaurantApp from "./components";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<RestaurantApp />} />
      </Routes>
    </div>
  );
}

export default App;
