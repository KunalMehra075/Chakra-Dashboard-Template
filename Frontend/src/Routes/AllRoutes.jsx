import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import UserLogin from "../Pages/UserLogin";

import PrivateAdminRoute from "../Components/Helpers/PrivateAdmin";
import PrivateUserRoute from "../Components/Helpers/PrivateUser";
import WebsiteLayout from "../Components/WebsiteComponents/WebsiteLayout";
import Homepage from "../Pages/Homepage";

import ForgotPassword from "../Components/Extra/ForgotPassword";
import MainAdminDashboard from "../Components/AdminComponents/MainAdminDashboard";
import MainUserDashboard from "../Components/UserComponents/MainUserDashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<Homepage />} />
      </Route>
      <Route path="/admin-login" element={<Login />} />
      <Route
        path="/admin/*"
        element={
          <PrivateAdminRoute>
            <MainAdminDashboard />
          </PrivateAdminRoute>
        }
      />
      <Route path="/user-login" element={<UserLogin />} />
      <Route
        path="/user/*"
        element={
          <PrivateUserRoute>
            <MainUserDashboard />
          </PrivateUserRoute>
        }
      />
      <Route path="/user/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default AllRoutes;
