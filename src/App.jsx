<<<<<<< HEAD
// App.jsx - Fixed version
import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
=======
import React from "react";
>>>>>>> origin/main
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SampleWebsiteDesign from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

<<<<<<< HEAD
function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<SampleWebsiteDesign />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
=======
function App() {
  return (
    <div>
      <Navbar />
      <SampleWebsiteDesign />
>>>>>>> origin/main
      <Footer />
    </div>
  );
}

<<<<<<< HEAD
function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

=======
>>>>>>> origin/main
export default App;
