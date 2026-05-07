import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import Navbar from "./components/Navbar";
import BackgroundBorder from "./components/Background";
export default function App() {
  return (
    <BrowserRouter>
    <BackgroundBorder />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}
