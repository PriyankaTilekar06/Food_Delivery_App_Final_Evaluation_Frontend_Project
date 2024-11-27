import React from "react";
import styles from "./PaymentPage.module.css";
import cart from "../../assets/cart.png";
import logo from "../../assets/logo.png";
import { HiLocationMarker } from "react-icons/hi";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import Footer from "../../components/Footer/Footer";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {

  const navigate = useNavigate();

  const handleProceedPayment = () => {
    // Navigate to the OrderSuccessful page
    navigate("/ordersuccessfull");
  };

  return (
    <div>
      <div className={styles.container}>
        <p className={styles.offer}>
          🌟 Get 5% Off your first order,
          <span className={styles.promo}>Promo: ORDER5</span>
        </p>
        <div className={styles.cartLocation}>
          <p>
            <HiLocationMarker className={styles.loc} /> Regent Street,{" "}
            <span className={styles.a4}>A4</span>, A4201, London
          </p>
          <p className={styles.change}>Change Location</p>
          <div className={styles.cartConatiner}>
            <img src={cart} alt="cart" className={styles.cart} />
            <span className={styles.cartText}> My Cart </span>
            <div className={styles.separator}></div>
            <div className={styles.arrow}>
              <FaArrowCircleDown />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.menu}>
          <a className={styles.home}>Home</a>
          <a>Browse Menu</a>
          <a>Special Offers</a>
          <a>Restaurants</a>
          <a>Track Order</a>
        </div>
        <div className={styles.loginSignup}>
          <a>
            <IoIosContact className={styles.contact} /> Login/Signup
          </a>
        </div>
      </div>

      <div className={styles.payText}>
        <h1>
          <FaArrowLeft />
          Choose and Pay
        </h1>
      </div>

      <div className={styles.paymentContainer}>
        <div className={styles.paymentOptions}>
          <div className={styles.optionActive}>
            <div className={styles.icon}>💳</div>
            <div className={styles.details}>
              <p>Wallet</p>
              <small>Available balance: ₹500</small>
            </div>
          </div>
          <div className={styles.option}>
            <p>MasterCard</p>
          </div>
          <div className={styles.option}>
            <p>Paypal</p>
          </div>
          <div className={styles.option}>
            <p>Stripe</p>
          </div>
          <div className={styles.optionAddCard}>
            <p>+ Add Debit Card</p>
          </div>
        </div>

        <div className={styles.paymentSummary}>
          <div className={styles.summaryDetails}>
            <p>Amount to be payed</p>
            <h2>₹240</h2>
          </div>
          <button className={styles.proceedPayment} onClick={handleProceedPayment}>Proceed Payment</button>
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
