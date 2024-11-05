import React from "react";
import LoginScreen from "./components/login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeScreen from "./components/homeScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
