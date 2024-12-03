import React, { useEffect, useState } from "react";
import styles from "./ShareCartPage.module.css";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { BsCartCheckFill } from "react-icons/bs";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { GiScooter } from "react-icons/gi";
import { BsShopWindow } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

export default function ShareCartPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const { id } = useParams();

  const handleCheckOutClick = () => {
    navigate("/checkoutpage");
  };

  const getCartData = async () => {
    try {
      const response = await axios.get(`/cart/${id}`, {
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/cart/${id}`, { withCredentials: true });
      getCartData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={styles.cartContainer}>
        <div className={styles.basketHeader}>
          <BsCartCheckFill className={styles.iconCart} />
          My Basket
        </div>

        <div className={styles.basketScroll}>
          {cart.map((item) => (
            <div key={item._id} className={styles.basketItem}>
              <div className={styles.itemInfo}>
                <div className={styles.itemQuantity}>{item.quantity}x</div>
                <div className={styles.itemDetails}>
                  <div className={styles.itemPrice}>₹{item.price}</div>
                  <h3>{item.title}</h3>
                  <span>{item.description}</span>
                </div>
              </div>
              <div
                className={styles.removeItem}
                onClick={() => handleDelete(item._id)}
              >
                <MdDeleteForever className={styles.cartDelete} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.summary}>
          <div>
            <span>Sub Total:</span>
            <span className={styles.summarySpan}>₹230</span>
          </div>
          <div>
            <span>Discounts:</span>
            <span className={styles.summarySpan}>-₹3.00</span>
          </div>
          <div>
            <span>Delivery Fee:</span>
            <span className={styles.summarySpan}>₹3.00</span>
          </div>
          <div className={styles.total}>
            Total to pay <span>₹230.00</span>
          </div>
        </div>
        <div className={styles.dropdown}>
          Choose your free item...{" "}
          <FaArrowAltCircleDown className={styles.dropdownArrow} />
        </div>
        <div className={styles.coupon}>
          Apply Coupon Code here{" "}
          <FaArrowAltCircleRight className={styles.dropRightArrow} />
        </div>
        <div className={styles.deliveryOptions}>
          <div className={styles.deliveryOption1}>
            <GiScooter className={styles.scooter} />
            <h4>Delivery</h4>
            <div>Starts at ₹30</div>
          </div>
          <div className={styles.deliveryOption2}>
            <BsShopWindow />
            <h4>Collection</h4>
            <div>Starts at ₹0.00</div>
          </div>
        </div>
        <div className={styles.checkout} onClick={handleCheckOutClick}>
          <FaArrowAltCircleRight />
          Checkout!
        </div>
      </div>
    </div>
  );
}
