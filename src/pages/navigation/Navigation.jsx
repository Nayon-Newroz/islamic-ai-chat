import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import ForgotPassword from "../user-forms/ForgotPassword";
import Login from "../user-forms/Login";
import ResetPassword from "../user-forms/ResetPassword";
import Verify from "../user-forms/Verify";
import { AuthContext } from "../../context/AuthContext";
import Dashboard from "../dashboard/Dashboard";
import { Box } from "@mui/material";
import LoginOTPVarify from "../user-forms/LoginOTPVarify";

import CartDetails from "../carts/live_cart/CartDetails";
import LiveCarts from "../carts/live_cart/LiveCarts";

import ApprovedCarts from "../carts/approved-carts/ApprovedCarts";
import ReviewCarts from "../carts/review-carts/ReviewCarts";
import ConfirmedCarts from "../carts/confirmed-carts/ConfirmedCarts";
import UserList from "../user/UserList";
import CategoryList from "../category/CategoryList";
import ProductList from "../product/ProductList";
import DeliveryList from "../delivery/DeliveryList";
import OrderList from "../order/OrderList";
import OrderDetails from "../order/OrderDetails";
import ConfirmedCartDetails from "../carts/confirmed-carts/ConfirmedCartDetails";
import ApprovedCardDetails from "../carts/approved-carts/ApprovedCardDetails";
import AdminList from "../admin/AdminList";
import UserDetails from "../user/UserDetails";
import DeletedCarts from "../carts/deleted-carts/DeletedCarts";
import DeletedCartDetails from "../carts/deleted-carts/DeletedCartDetails";
import CurrencyConversionList from "../currency-conversion/CurrencyConversionList";
import CartValidityTimeList from "../cart-validity-time/CartValidityTimeList";
import DeliveryInvoiceConfigurationList from "../delivery-invoice-configuration/DeliveryInvoiceConfigurationList";
// import NoMatch from "../NoMatch";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import PulseLoader from "react-spinners/PulseLoader";
// import Country from "../country/Country";

function PrivateRoute({ children }) {
  const { dizli_admin_panel } = useContext(AuthContext);
  // console.log("dizli_admin_panel?.data?.token", dizli_admin_panel);
  return dizli_admin_panel?.access_token ? children : <Navigate to="/" />;
}
function RedirectToHome({ children }) {
  const { dizli_admin_panel } = useContext(AuthContext);

  return !dizli_admin_panel?.access_token ? (
    children
  ) : (
    <Navigate to="/dashboard" />
  );
}
const Navigation = () => {
  const { dizli_admin_panel } = useContext(AuthContext);

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
          path="otp"
          element={
            // <PrivateRoute>
            <LoginOTPVarify />
            // </PrivateRoute>
          }
        />
        <Route
          path="live-carts"
          element={
            <PrivateRoute>
              <LiveCarts />
            </PrivateRoute>
          }
        />
        <Route
          path="approved-carts"
          element={
            <PrivateRoute>
              <ApprovedCarts />
            </PrivateRoute>
          }
        />
        <Route
          path="approved-carts-details/:id"
          element={
            <PrivateRoute>
              <ApprovedCardDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="review-carts"
          element={
            <PrivateRoute>
              {/* <ReviewCarts /> */}
              <LiveCarts />
            </PrivateRoute>
          }
        />
        <Route
          path="confirmed-carts"
          element={
            <PrivateRoute>
              <ConfirmedCarts />
            </PrivateRoute>
          }
        />

        <Route
          path="confirmed-carts-details/:id"
          element={
            <PrivateRoute>
              <ConfirmedCartDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="rejected-carts"
          element={
            <PrivateRoute>
              <DeletedCarts />
            </PrivateRoute>
          }
        />
        <Route
          path="rejected-carts-details/:id"
          element={
            <PrivateRoute>
              <DeletedCartDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="users"
          element={
            <PrivateRoute>
              <UserList />
            </PrivateRoute>
          }
        />
        <Route
          path="delivery-list"
          element={
            <PrivateRoute>
              <DeliveryList />
            </PrivateRoute>
          }
        />
        <Route
          path="live-order-list"
          element={
            <PrivateRoute>
              <OrderList />
            </PrivateRoute>
          }
        />
        <Route
          path="delivered-order-list"
          element={
            <PrivateRoute>
              <OrderList />
            </PrivateRoute>
          }
        />
        <Route
          path="canceled-order-list"
          element={
            <PrivateRoute>
              <OrderList />
            </PrivateRoute>
          }
        />
        <Route
          path="order-details/:id/:orderType"
          element={
            <PrivateRoute>
              <OrderDetails />
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
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="cart-details/:id/:cartType"
          element={
            <PrivateRoute>
              <CartDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="category-list"
          element={
            <PrivateRoute>
              <CategoryList />
            </PrivateRoute>
          }
        />
        <Route
          path="currency-conversion"
          element={
            <PrivateRoute>
              <CurrencyConversionList />
            </PrivateRoute>
          }
        />
        <Route
          path="cart-validity-time"
          element={
            <PrivateRoute>
              <CartValidityTimeList />
            </PrivateRoute>
          }
        />
        <Route
          path="delivery-invoice-configuration"
          element={
            <PrivateRoute>
              <DeliveryInvoiceConfigurationList />
            </PrivateRoute>
          }
        />
        <Route
          path="admin-list"
          element={
            <PrivateRoute>
              <AdminList />
            </PrivateRoute>
          }
        />
        <Route
          path="product-list/:catId"
          element={
            <PrivateRoute>
              <ProductList />
            </PrivateRoute>
          }
        />
        <Route
          path="user-details/:id"
          element={
            <PrivateRoute>
              <UserDetails />
            </PrivateRoute>
          }
        />

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
          element={!dizli_admin_panel.token ? <Navigate to="/" /> : <NoMatch />}
        /> */}
      </Routes>
    </Box>
  );
};

export default Navigation;
