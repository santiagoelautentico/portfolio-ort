import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import Contact from "./pages/Contact";
import WorkDetail from "./pages/WorkDetail";
import Works from "./pages/Works";
import Navbar from "./components/Navbar";
import BackgroundBorder from "./components/Background";
import { WORKS } from "./works.js";
import { useLocation } from "react-router-dom";

function AppContent() {
  const location = useLocation();
  const isDetail = location.pathname.startsWith("/work/");

  return (
    <>
      {!isDetail && <BackgroundBorder />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <BackgroundBorder>
              <About />{" "}
            </BackgroundBorder>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/works"
          element={
            <BackgroundBorder>
              <Works />
            </BackgroundBorder>
          }
        />
        <Route
          path="/work/:id"
          element={
            <BackgroundBorder>
              <WorkDetail />
            </BackgroundBorder>
          }
        />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
