import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Features from "./components/Features";
import Review from "./components/Review";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Collections from "./components/Collections";
import Footer from "./components/Footer";
import Slider from "./components/Slider.jsx";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import TopSlider from "./components/TopSlider";
import UserProfile from "./components/UserProfile";


const FrontPage = () => { 
    const [showCart, setShowCart] = useState(false);
    const [authPage, setAuthPage] = useState(false);
    const [loginPage, setLoginPage] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const navigate = useNavigate();
    const toggleAuthPage = () => {
      setAuthPage(!authPage);
      if (!authPage) {
          document.body.style.overflow = 'hidden'; 
      } else {
          document.body.style.overflow = 'auto'; 
      }
  };

  const toggleLoginPage = () => {
      setLoginPage(!loginPage);
      if (!loginPage) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = 'auto';
      }
  };
  return (
    <div>
      <Provider store={store}>
        <Navbar setUserLoggedIn={setUserLoggedIn} setShowCart={setShowCart} setAuthPage={toggleAuthPage} />
        {showCart && userLoggedIn && <Cart setShowCart={setShowCart} />}

        {authPage && showCart && !userLoggedIn &&<Register setUserLoggedIn={setUserLoggedIn}  setAuthPage={toggleAuthPage} setLoginPage={toggleLoginPage} />}
        {console.log("USeR Looged in : ", userLoggedIn)}
        {authPage  && <Register setUserLoggedIn={setUserLoggedIn}  setAuthPage={toggleAuthPage} setLoginPage={toggleLoginPage} />}
        {loginPage  && <Login setUserLoggedIn={setUserLoggedIn} setAuthPage={toggleAuthPage} setLoginPage={toggleLoginPage} />}
        {!showCart && !authPage && !loginPage && <TopSlider/>}
        <div id="home">
           <Home />
        </div>

         <Slider/>

        <div id="shop">
        <Shop />
        </div>

        <Collections />

        <div id="features">
        <Features />
        </div>

        <div id="products">
        <Products />
        </div>

        <div id="review">
         <Review />
        </div>

         <Footer />

        <Toaster position="bottom-center" reverseOrder={false} />
      </Provider>
    </div>
  )
}

export default FrontPage
