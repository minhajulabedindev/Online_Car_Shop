import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import Navigation from "./Component/Shared/Navigation/Navigation";
import Footer from "./Component/Shared/Footer/Footer";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import Header from "./Component/Home/Header/Header";
import Shop from "./Component/Shop/Shop";
import AllCar from "./Component/AllCars/AllCar";
import { Modal } from "bootstrap";
import MyVerticallyCenteredModal from "./Component/Modal/Modal";
import About from "./Component/About/About";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Login from "./Component/Login/Login";
import Login_2 from "./Component/Login/Login_2";
import LoginRoute from "./Component/LoginRoute/LoginRoute";
import AllServises from "./Component/AllServise/AllServises";
import BuySuccess from "./Component/BuySuccess/BuySuccess";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginRoute></LoginRoute>} />
          <Route path="/shop" element={<AllServises></AllServises>} />
          <Route path="/buy" element={<BuySuccess></BuySuccess>} />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About></About>
              </PrivateRoute>
            }
          ></Route>
          {/* <Route path="/login" element={<Login_2></Login_2>} /> */}
          <Route path="/bmw:id" element={<MyVerticallyCenteredModal></MyVerticallyCenteredModal>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </Router>
      ,
    </div>
  );
}

export default App;
