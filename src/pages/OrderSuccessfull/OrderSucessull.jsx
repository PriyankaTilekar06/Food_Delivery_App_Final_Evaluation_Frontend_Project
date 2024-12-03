import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./OrderSuccessfull.module.css";
import checkIcon from "../../assets/checkIcon.png";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export default function OrderSucessull() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const userId = localStorage.getItem("userId");

  const getCartData = async () => {
    try {
      const response = await axios.get(`/cart/${userId}`, {
        withCredentials: true,
      });
      setCart(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  const handleBackToHome = () => {
    navigate("/homepage");
  };

  return (
    <div>
      <Navbar />

      <div className={styles.success}>
        <img src={checkIcon} alt="check" />
        <h1>Order Placed Successfully</h1>
        <p className={styles.successPara}>
          Your order is confirmed and on its way. Get set to <br /> savor your
          chosen delights!
        </p>

        <div className={styles.successOrder}>
          {cart.map((item) => (
            <p key={item._id}>{item.title}</p>
          ))}
          <button onClick={handleBackToHome}>Back to Home</button>
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
