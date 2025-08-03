import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import Budget from "../pages/Filters/Budget";
import Bodytype from "../pages/Filters/Bodytype";
import Transmission from "../pages/Filters/Transmission";
import SeatingC from "../pages/Filters/SeatingC";
import Fueltype from "../pages/Filters/Fueltype";
import Login from "../pages/Login";
import Signup from "../pages/SIgnup";
import AboutSection from "../components/UI/AboutSection";
import Search from "../components/Header/Search";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutSection />} /> 
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cars/Budget" element={<Budget />} />
      <Route path="/cars/FuelType" element={<Fueltype />} />
      <Route path="/cars/Bodytype" element={<Bodytype />} />
      <Route path="/cars/Transmission" element={<Transmission />} />
      <Route path="/cars/SeatingCapacity" element={<SeatingC />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/search" element={<Search/>}/>

    </Routes>
  );
};

export default Routers;
