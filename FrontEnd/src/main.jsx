import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Category, Admin,Product, Cart, PaymentSuccess, Profile } from "./pages";
import { DashBoard, AddProduct, Login, SignUp,AddFeatured, ViewOrUpdateFeatured, ViewOrUpdateProduct, Users, ForgotPassword, ResetPassword } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="cart/" element={<Cart />} />
            <Route path="sports/" element={<Category categoryName="Sports" />} />
            <Route path="kids/" element={<Category categoryName="Kids" />} />
            <Route path="men/" element={<Category categoryName="Men" />} />
            <Route path="women/" element={<Category categoryName="Women" />} />
            <Route path="product/:productID" element={<Product />} />
            <Route path="login/" element={<Login />} />
            <Route path="signup/" element={<SignUp />} />
            <Route path="paymentsuccess" element={<PaymentSuccess />} />
            <Route path="profile/:userId" element={<Profile />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password/:token" element={<ResetPassword />} />
          </Route>
          <Route path="admin/" element={<Admin />}>
            <Route path="" element={<DashBoard />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="add-featured" element={<AddFeatured />} />
            <Route path="featured/update/:id" element={<ViewOrUpdateFeatured />} />
            <Route path="product/update/:id" element={<ViewOrUpdateProduct />} />
            <Route path="users/">
              <Route path="" element={<Users />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>,
);
