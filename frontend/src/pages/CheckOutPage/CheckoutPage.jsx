import React from "react";
import styles from "./CheckOutPage.module.css";
import cart from "../../assets/cart.png";
import logo from "../../assets/logo.png";
import { HiLocationMarker } from "react-icons/hi";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import items1 from "../../assets/items1.png";
import items2 from "../../assets/items2.png";
import items3 from "../../assets/items3.png";
import Restaurant from "../../components/Restaurants/Restaurant";
import Footer from "../../components/Footer/Footer";
import { FaArrowLeft } from "react-icons/fa6";
import icon from "../../assets/icon.png";
import { IoIosArrowForward } from "react-icons/io";


export default function CheckoutPage() {
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

      <div className={styles.orderText}>
        <h1>
          <FaArrowLeft className={styles.leftArrow} />
          Your Order Details
        </h1>
      </div>
      <div className={styles.checkingContainer}>
        <div className={styles.leftSection}>
          <div className={styles.item}>
            <img
              src={items1}
              alt="Royal Cheese Burger"
              className={styles.itemImage}
            />
            <div className={styles.itemDetails}>
              <h3>Royal Cheese Burger</h3>
              <p>1 item</p>
            </div>
            <span className={styles.itemPrice}>₹120</span>
          </div>
          <div className={styles.thinLine}></div>
          <div className={styles.item}>
            <img
              src={items2}
              alt="Potato Veggies"
              className={styles.itemImage}
            />
            <div className={styles.itemDetails}>
              <h3>Potato Veggies</h3>
              <p>1 item</p>
            </div>
            <span className={styles.itemPrice}>₹77</span>
          </div>
          <div className={styles.thinLine}></div>
          <div className={styles.item}>
            <img
              src={items3}
              alt="Cake Coca Cola"
              className={styles.itemImage}
            />
            <div className={styles.itemDetails}>
              <h3>Cake Coca Cola</h3>
              <p>1 item</p>
            </div>
            <span className={styles.itemPrice}>₹42</span>
          </div>
          <div className={styles.notes}>
            <textarea placeholder="Add extra notes"></textarea>
          </div>
        </div>

        <div className={styles.rightSection}>
        <div className={styles.deliveryAddress}>
  <div className={styles.locationContainer}>
    <img src={icon} alt="Location" className={styles.locationIcon} />
    <div className={styles.textContainer}>
      <h4>Delivery Address</h4>
      <p>45, Green Street, Sector 12..</p>
    </div>
  </div>
  <div className={styles.arrowForward}>
    <IoIosArrowForward />
  </div>
</div>

          <div className={styles.thinLine}></div>
          <div className={styles.orderSummary}>
            <div className={styles.summaryRow}>
              <span>Items</span>
              <span>₹239</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Service Fee</span>
              <span>₹1</span>
            </div>
            <div className={styles.thinLine}></div>
            <div className={styles.summaryTotal}>
              <span>Subtotal (3 items)</span>
              <span className={styles.rupee}>₹240</span>
            </div>
          </div>
          <button className={styles.paymentButton}>
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
