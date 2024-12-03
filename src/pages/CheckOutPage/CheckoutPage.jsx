import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./CheckoutPage.module.css";
import Restaurant from "../../components/Restaurants/Restaurant";
import Footer from "../../components/Footer/Footer";
import { FaArrowLeft } from "react-icons/fa6";
import icon from "../../assets/Icon.png";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const userId = localStorage.getItem("userId");
  const [currentAddress, setCurrentAddress] = useState(null);

  useEffect(() => {
    const addresses = JSON.parse(localStorage.getItem("addresses")) || [];
    setCurrentAddress(addresses[0] || null);
  }, []);

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

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddressClick = () => {
    navigate("/addressPage");
  };

  const handlePaymentClick = () => {
    navigate("/paymentpage", { state: { totalSubtotal } });
  };

  const totalSubtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const serviceFee = 1;

  return (
    <div>
      <Navbar />

      <div className={styles.orderText}>
        <h1>
          <FaArrowLeft className={styles.leftArrow} onClick={handleGoBack} />
          Your Order Details
        </h1>
      </div>

      <div className={styles.checkingContainer}>
        <div className={styles.leftSection}>
          {cart.map((item) => (
            <div className={styles.item} key={item._id}>
              <img src={item.image} alt="item" className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <h3>{item.title}</h3>
                <p>{item.quantity} item</p>
              </div>
              <span className={styles.itemPrice}>₹{item.price}</span>
              <div className={styles.thinLine}></div>
            </div>
          ))}
          <div className={styles.notes}>
            <textarea placeholder="Add extra notes"></textarea>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.deliveryAddress} onClick={handleAddressClick}>
            <div className={styles.locationContainer}>
              <img src={icon} alt="Location" className={styles.locationIcon} />
              <div className={styles.textContainer}>
                <h4>Delivery Address</h4>
                <p>
                  {currentAddress
                    ? `${currentAddress.fullAddress}, ${currentAddress.city}`
                    : ""}
                </p>
              </div>
            </div>
            <div className={styles.arrowForward}>
              <IoIosArrowForward />
            </div>
          </div>

          <div className={styles.thinLine}></div>
          <div className={styles.orderSummary}>
            {cart.map((item) => (
              <div className={styles.summaryRow} key={item._id}>
                <span>Items</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className={styles.summaryRow}>
              <span>Service Fee</span>
              <span>₹{serviceFee}</span>
            </div>
            <div className={styles.thinLine}></div>
            <div className={styles.summaryTotal}>
              <span>
                Subtotal ({cart.reduce((acc, item) => acc + item.quantity, 0)}{" "}
                items)
              </span>
              <span className={styles.rupee}>₹{totalSubtotal}</span>
            </div>
          </div>
          <button className={styles.paymentButton} onClick={handlePaymentClick}>
            Choose Payment Method
          </button>
        </div>
      </div>

      <div className={styles.restro}>
        <Restaurant />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
