import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import FrontPage from "./FrontPage";
import PaymentPage from "./components/PaymentPage";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import SearchPage from "./components/SearchPage";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <div>
      {/* <ProductDetails/> */}
      <Provider store={store}>
        <BrowserRouter> 
          <Routes>
            <Route exact path="/" element={<FrontPage />} />
            <Route exact path="/searchpage" element={<SearchPage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/payment-page/:id" element={< PaymentPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
