import React, { useState } from 'react'
import styles from './Profile.module.css'
import cart from "../../assets/cart.png";
import logo from "../../assets/logo.png";
import { HiLocationMarker } from "react-icons/hi";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import profilePhoto from "../../assets/profilePhoto.png";
import { FaArrowLeft } from "react-icons/fa6";
import Footer from '../../components/Footer/Footer';

export default function Profile() {

  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleEditCardClick = () => {
    setShowEditPopup(true);
  };

  const handleClosePopup = () => {
    setShowEditPopup(false);
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

      <div className={styles.profileText}>
          <h1><FaArrowLeft />My Profile</h1>
      </div>

      <div className={styles.profileContainer}>
 
  <div className={styles.profileHeader}>
    <div className={styles.profileAvatar}>
      <img src={profilePhoto} alt="Profile Avatar" />
    </div>
    <div className={styles.profileInfo}>
      <h2>Mike Ross</h2>
      <div className={styles.profileDetails}>
        <div className={styles.detail}>
          <label>Full Name</label>
          <input type="text" value="Mike Ross" readonly />
        </div>
        <div className={styles.detail}>
          <label>Email Address</label>
          <input type="text" value="mikeross@gmail.com" readonly />
        </div>
        <div className={styles.detail}>
          <label>Gender</label>
          <input type="text" value="Male" readonly />
        </div>
        <div className={styles.detail}>
          <label>Country</label>
          <input type="text" value="India" readonly />
        </div>
      </div>
    </div>
    <button className={styles.editButton}>Edit</button>
  </div>

  <div className={styles.paymentMethods}>
    <h3>Saved Payment Methods</h3>
    <div className={styles.cardList}>
      <div className={styles.cardItem}>
        <div className={styles.cardDetails}>
          <span>xxxx xxxx xxxx 1234</span>
          <span>Mike Ross</span>
        </div>
        <button className={styles.editCard} onClick={handleEditCardClick}>✎</button>
      </div>
      {/* <div className={styles.cardItem}>
        <div className={styles.cardDetails}>
          <span>xxxx xxxx xxxx 6789</span>
          <span>Mike Ross</span>
        </div>
        <button className={styles.editCard} onClick={handleEditCardClick}>✎</button>
      </div> */}
      {/* <div className={styles.cardItem}>
        <div className={styles.cardDetails}>
          <span>xxxx xxxx xxxx 3468</span>
          <span>Mike Ross</span>
        </div>
        <button className={styles.editCard} onClick={handleEditCardClick}>✎</button>
      </div> */}
      <div className={styles.addCard} onClick={handleEditCardClick}>
        <button>Add New Card</button>
      </div>
    </div>
  </div>
</div>

{showEditPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <h2>Edit Payment Method</h2>
            <div className={styles.popupField}>
              <label>Card Number</label>
              <input type="text" placeholder="Enter Card Number" />
            </div>
            <div className={styles.popupField}>
              <label>Expiration</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div className={styles.popupField}>
              <label>CVC</label>
              <input type="text" placeholder="Enter CVC" />
            </div>
            <div className={styles.popupField}>
              <label>Name on Card</label>
              <input type="text" placeholder="Enter Name" />
            </div>
            <div className={styles.popupActions}>
              <button className={styles.removeButton}>Remove</button>
              <div className={styles.popupButtons}>
                <button onClick={handleClosePopup}>Cancel</button>
                <button>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

<div className={styles.footer}>
  <Footer />
</div>



    </div>
  )
}
