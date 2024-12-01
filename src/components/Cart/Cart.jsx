import React from "react";
import styles from "./Cart.module.css";
import { MdDeleteForever } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { BsCartCheckFill } from "react-icons/bs";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { GiScooter } from "react-icons/gi";
import { BsShopWindow } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  const handleCheckOutClick = () => {
    navigate("/checkoutpage");
  };

//   const calculateTotal = () => {
//     const subtotal = cart.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//     const discount = subtotal > 200 ? 3 : 0;
//     const deliveryFee = 30;
//     return subtotal - discount + deliveryFee;
//   };

  return (
    <div>
      <div className={styles.cartContainer}>
        <div className={styles.shareCart}>
          <IoShareSocialOutline className={styles.share} />
          Share this cart <br /> with your friends
          <div className={styles.copyLink}>Copy link</div>
        </div>
        <div className={styles.basketHeader}>
          <BsCartCheckFill className={styles.iconCart} />
          My Basket
        </div>
        {/* {cart.map((item, index) => ( */}
          <div className={styles.basketItem}>
            <div className={styles.itemInfo}>
              <div className={styles.itemQuantity}>1x</div>
              <div className={styles.itemDetails}>
                <div className={styles.itemPrice}>₹250</div>
                <h3>Royal Cheese burger</h3>
                <span>1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium</span>
              </div>
            </div>
            <div
              className={styles.removeItem}
            //   onClick={() => onRemove(item.id)}
            >
              <MdDeleteForever className={styles.cartDelete} />
            </div>
          </div>
        {/* ))} */}
        {/* <div className={styles.basketItem}>
                <div className={styles.itemInfo}>
                    <div className={styles.itemQuantity}>1x</div>
                    <div className={styles.itemDetails}>
                        <div className={styles.itemPrice}>₹70</div>
                        <h3>Potato Veggies</h3>
                        <span>No mushrooms + green peppers</span>
                    </div>
                </div>
                <div className={styles.removeItem}><MdDeleteForever className={styles.cartDelete} /></div>
            </div> */}
        {/* <div className={styles.basketItem}>
                <div className={styles.itemInfo}>
                    <div className={styles.itemQuantity}>1x</div>
                    <div className={styles.itemDetails}>
                        <div className={styles.itemPrice}>₹40</div>
                        <h3>Coke Coca Cola</h3>
                    </div>
                </div>
                <div className={styles.removeItem}><MdDeleteForever className={styles.cartDelete} /></div>
            </div> */}
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
