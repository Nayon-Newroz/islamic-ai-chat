import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import ForgotPassword from "../user-forms/ForgotPassword";
import Login from "../user-forms/Login";
import ResetPassword from "../user-forms/ResetPassword";
import Verify from "../user-forms/Verify";
import { AuthContext } from "../../context/AuthContext";
// import Dashboard from "../dashboard/Dashboard";
import { Box } from "@mui/material";
import LoginOTPVarify from "../user-forms/LoginOTPVarify";
import Chat from "../chat/Chat";
import Signup from "../user-forms/Signup";

// import NoMatch from "../NoMatch";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import PulseLoader from "react-spinners/PulseLoader";
// import Country from "../country/Country";

function PrivateRoute({ children }) {
  const { islamic_ai_admin_panel } = useContext(AuthContext);
  // console.log("islamic_ai_admin_panel?.data?.token", islamic_ai_admin_panel);
  return islamic_ai_admin_panel?.access_token ? children : <Navigate to="/" />;
}
function RedirectToHome({ children }) {
  const { islamic_ai_admin_panel } = useContext(AuthContext);

  return !islamic_ai_admin_panel?.access_token ? (
    children
  ) : (
    <Navigate to="/chat" />
  );
}
const Navigation = () => {
  const { islamic_ai_admin_panel } = useContext(AuthContext);

  return (
    <Box>
      <Routes>
        {/* <Route path="/" element={<Projects />} />
        <Route path="project-details/:id" element={<ProjectDetails />} /> */}
        <Route
          path="/"
          element={
            <RedirectToHome>
              <Login />
            </RedirectToHome>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectToHome>
              <Signup />
            </RedirectToHome>
          }
        />
        <Route
          path="otp"
          element={
            // <PrivateRoute>
            <LoginOTPVarify />
            // </PrivateRoute>
          }
        />
        <Route
          path="chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />

        {/* <Route
          path="verify"
          element={
            <RedirectToHome>
              <Verify />
            </RedirectToHome>
          }
        /> */}
        {/* <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}

        {/* <Route path="forgot-password" element={<ForgotPassword />} /> */}
        <Route
          path="reset-password"
          element={
            // <PrivateRoute>
            <ResetPassword />
            // </PrivateRoute>
          }
        />

        {/* <Route
          path="*"
          element={!islamic_ai_admin_panel.token ? <Navigate to="/" /> : <NoMatch />}
        /> */}
      </Routes>
    </Box>
  );
};

export default Navigation;
