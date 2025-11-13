import {BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "./navigation/AppRoutes";
import { FavouriteProvider } from "./context/FavouriteContext";

function App(){
  return (
    <FavouriteProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </FavouriteProvider>
  );
}
export default App;