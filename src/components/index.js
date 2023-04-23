import NavigationSidebar from "./navigation";
import React from "react";
import { Routes, Route } from "react-router";
import { Provider } from "react-redux";
import store from "../reducers/store";
import HomePage from "./Home";
import SearchPage from "./Search";
import FoodSearch from "./explore";
import ProfileScreen from "./screens/ProfileScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import AdminScreen from "./screens/AdminScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
// import CookScreen from "./screens/CookScreen";
// import WaiterScreen from "./screens/WaiterScreen";
import MakeAppointments from "./user/MakeAppointments";
import AppointmentHistory from "./user/AppointmentHistory";
import OrderDishes from "./user/OrderDishes";
import OrderHistory from "./user/OrderHistory";
import EditDishesScreen from "./screens/EditDishesScreen";
import DishDetail from "./Detail/DishDetail";
import AccountDetail from "./Detail/AccountDetail";
import BookingSystem from "./screens/AppointmentScreen";
import UserScreen from "./screens/UserScreen";
import ManageCooks from "./admin/ManageCooks";
import ManageWaiters from "./admin/ManageWaiters.js";
import ManageUsers from "./admin/ManageUsers";

function RestaurantApp() {
  return (
    <Provider store={store}>
      <NavigationSidebar />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/profile/:profileId" element={<AccountDetail />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:searchItem" element={<SearchPage />} />
        <Route path="/explore" element={<FoodSearch />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        {/* <Route path="/cook" element={<CookScreen />} /> */}
        <Route path="/user" element={<UserScreen />} />
        <Route path="/user/edit-profile" element={<EditProfileScreen />} />
        <Route path="/user/order-dishes" element={<OrderDishes />} />
        <Route path="/user/order-history" element={<OrderHistory />} />
        <Route path="/user/make-appointments" element={<MakeAppointments />} />
        <Route
          path="/user/appointment-history"
          element={<AppointmentHistory />}
        />
        <Route path="/dishes" element={<EditDishesScreen />} />
        <Route path="/details/dish/:dishId" element={<DishDetail />} />
        <Route path="/appointment" element={<BookingSystem />} />
        <Route path="/manage-cooks" element={<ManageCooks />} />
        <Route path="/manage-waiters" element={<ManageWaiters />} />
        <Route path="/manage-users" element={<ManageUsers />} />
      </Routes>
    </Provider>
  );
}

export default RestaurantApp;
