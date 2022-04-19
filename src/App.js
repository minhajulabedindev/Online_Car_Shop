import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import Navigation from "./Component/Shared/Navigation/Navigation";
import Footer from "./Component/Shared/Footer/Footer";
import PageNotFound from "./Component/PageNotFound/PageNotFound";

import { Modal } from "bootstrap";
import MyVerticallyCenteredModal from "./Component/Modal/Modal";
import About from "./Component/About/About";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";

import LoginRoute from "./Component/LoginRoute/LoginRoute";
import AllServises from "./Component/AllServise/AllServises";
import BuySuccess from "./Component/BuySuccess/BuySuccess";
import AuthProvider from "./Component/Context/AuthProvider/AuthProvider";
import Dashboard from "./Component/Dashboard/Dashboard/Dashboard";
import AdminRoute from "./Component/AdminRoute/AdminRoute";
import AddBlog from "./Component/Dashboard/AddBlog/AddBlog";
import AddNewItem from "./Component/Dashboard/AddNewItem/AddNewItem";
import MakeAdmin from "./Component/Dashboard/MakeAdmin/MakeAdmin";
import AddFeaturedItem from "./Component/Dashboard/AddFeaturedItem/AddFeaturedItem";
import AddReview from "./Component/Dashboard/AddReview/AddReview";
import DashboardHome from "./Component/Dashboard/DashboardHome/DashboardHome";
import Register from "./Component/Register/Register";

import MainCart from "./Component/Cart/MainCart/MainCart";
import Purchase from "./Component/Purchase/Purchase";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginRoute></LoginRoute>} />
            <Route path="/register" element={<Register></Register>} />
            <Route path="/shop" element={<AllServises></AllServises>} />

            <Route path="/cart" element={<MainCart></MainCart>} />
            <Route path="/about" element={<About></About>} />
            <Route
              path="/purchase"
              element={
                <PrivateRoute>
                  <Purchase></Purchase>
                </PrivateRoute>
              }
            ></Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path={`/dashboard`} element={<DashboardHome />} />
              <Route
                path={`/dashboard/addReview`}
                element={
                  <PrivateRoute>
                    <AddReview />
                  </PrivateRoute>
                }
              />
              <Route path={`/dashboard/addFeatured`} element={<AddFeaturedItem />} />

              <Route
                path={`/dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path={`/dashboard/addNewItem`}
                element={
                  <AdminRoute>
                    <AddNewItem />
                  </AdminRoute>
                }
              />
              <Route
                path={`/dashboard/addBlogs`}
                element={
                  <AdminRoute>
                    <AddBlog />
                  </AdminRoute>
                }
              />
            </Route>
            <Route path="/bmw:id" element={<MyVerticallyCenteredModal></MyVerticallyCenteredModal>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
      ,
    </div>
  );
}
// https://afternoon-scrubland-76608.herokuapp.com/
// https://afternoon-scrubland-76608.herokuapp.com
export default App;
