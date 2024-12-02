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

axios.defaults.baseURL = "https://food-delivery-app-final-evaluation-backend-project.vercel.app";
axios.defaults.withCredentials = true;

function App() {
  return (
    // <UserContextProvider>
    <>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addresspage" element={<AddressPage />} />
        <Route path="/ordersuccesfull" element={<OrderSucessull />} />
      </Routes>
      </>
    // </UserContextProvider>
    
  );
}

export default App;
