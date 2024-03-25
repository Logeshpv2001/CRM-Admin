import React from "react";
import "./Admin.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import AddProduct from "../../Components/AddProduct/AddProduct";
import { Routes, Route } from "react-router-dom";
import ListProduct from "../../Components/ListProduct/ListProduct";
import LoginSignup from "../../Components/LoginSignup/LoginSignup";
// import LoginSignup from "../LoginSignup";


const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />

      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/login" element={<LoginSignup/>} />
      </Routes>
      
    </div>
  );
};

export default Admin;
