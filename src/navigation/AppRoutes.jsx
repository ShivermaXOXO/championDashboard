import { Routes, Route } from "react-router-dom";
import Dashboard from "../screens/dashboard.jsx";
import Favourite from "../screens/favourite.jsx";

const AppRoutes = () => {
    return(
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/fav" element={<Favourite />} />

    </Routes>
    )
}
export default AppRoutes