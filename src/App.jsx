import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./screens/dashboard.jsx";
import Favourite from "./screens/favourite.jsx";


function App(){
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/fav" element={<Favourite />} />

    </Routes>
  </BrowserRouter>
  );
}
export default App;