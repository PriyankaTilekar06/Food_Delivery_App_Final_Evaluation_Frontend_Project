import React from 'react'
import styles from './OrderSuccessfull.module.css'
import cart from "../../assets/cart.png";
import logo from "../../assets/logo.png";
import { HiLocationMarker } from "react-icons/hi";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import checkIcon from "../../assets/checkIcon.png";
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

export default function OrderSucessull() {

    const navigate = useNavigate(); // Initialize the navigate function

  const handleBackToHome = () => {
    navigate('/homepage'); // Navigate to the homepage (assuming '/' is the homepage route)
  };

  return (
    <div>
      <div className={styles.container}>
        <p className={styles.offer}>
          🌟 Get 5% Off your first order, <span className={styles.promo}>Promo: ORDER5</span>
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

      <div className={styles.success}>
        <img src={checkIcon} alt='check' />
        <h1>Order Placed Successfully</h1>
        <p className={styles.successPara}>Your order is confirmed and on its way. Get set to <br/> savor your chosen delights!</p>
        <div className={styles.successOrder}>
            <p>Royal Cheese Burger</p>
            <p>Potato Veggies</p>
            <p>Coke Coca Cola</p>
            <button onClick={handleBackToHome}>Back to Home</button>
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
