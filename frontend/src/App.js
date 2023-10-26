import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Addproduct from "./Components/Addproduct";
import Product from "./Components/Product";
import Updateproduct from "./Components/Updateproduct";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/updateproduct/:id" element={<Updateproduct />} />
          <Route path="/" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
