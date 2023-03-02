import "./App.css";
import { SafeArea } from "antd-mobile";
import { Route, Routes } from "react-router-dom";
import AppNavigation from "./AppNavigation";
import HomePage from "./page/HomePage";
import OrderPage from "./page/OrderPage";
import MenuPage from "./page/MenuPage";
import ProfilePage from "./page/ProfilePage/index";
import Profile from "./page/ProfilePage/component/Profile/Profile";

function App() {
  return (
    <div>
      <AppNavigation />
      {/* <Routes> */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes> */}
      <Profile />
    </div>
  );
}

export default App;
