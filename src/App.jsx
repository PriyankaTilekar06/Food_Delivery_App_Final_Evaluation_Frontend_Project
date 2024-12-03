import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CheckoutPage from "./pages/CheckOutPage/CheckoutPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import Profile from "./pages/ProfilePage/Profile";
import AddressPage from "./pages/AddressPage/AddressPage";
import OrderSucessull from "./pages/OrderSuccessfull/OrderSucessull";
import PrivateRoute from "./components/PrivateAuth";
import { useEffect } from "react";
import ShareCartPage from "./pages/ShareCartPage/ShareCartPage";

axios.defaults.baseURL = "https://food-delivery-app-final-evaluation-backend-project.vercel.app";
axios.defaults.withCredentials = true;

function App() {

  useEffect(() => {
    document.title = "Food Delivery App"; 
  }, [])

  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" exact element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/productpage" exact element={<PrivateRoute><ProductPage /></PrivateRoute>} />
        <Route path="/checkoutpage" exact element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
        <Route path="/paymentpage" exact element={<PrivateRoute><PaymentPage /></PrivateRoute>} />
        <Route path="/profile" exact element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/addresspage" exact element={<PrivateRoute><AddressPage /></PrivateRoute>} />
        <Route path="/ordersuccesfull" exact element={<PrivateRoute><OrderSucessull /></PrivateRoute>} />
        <Route path="/productpage/share/:id" exact element={<ShareCartPage />} />
      </Routes>
      </>
    
  );
}

export default App;
