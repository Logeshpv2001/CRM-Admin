import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin/Admin";
// import LoginSignup from "./Components/LoginSignup/LoginSignup";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
    {/* <Router> */}
      
        <Navbar />
        {/* <Routes> */}
          
          {/* Add more routes here */}
        {/* </Routes> */}
        <Admin />
      
    {/* </Router> */}
    </div>
  );
};

export default App;
