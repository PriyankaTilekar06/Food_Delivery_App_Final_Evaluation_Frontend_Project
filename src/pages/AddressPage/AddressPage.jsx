import React, { useState } from "react";
import styles from "./AddressPage.module.css";
import cart from "../../assets/cart.png";
import logo from "../../assets/logo.png";
import { HiLocationMarker } from "react-icons/hi";
import { FaArrowCircleDown, FaArrowLeft } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import Footer from "../../components/Footer/Footer";

export default function AddressPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    state: "",
    city: "",
    pincode: "",
    phone: "",
    fullAddress: "",
  });

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });
  };

  const saveAddress = () => {
    setAddresses([...addresses, newAddress]);
    setNewAddress({ state: "", city: "", pincode: "", phone: "", fullAddress: "" });
    setIsPopupOpen(false);
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

      <div className={styles.yourAddress}>
        <h1>
          <FaArrowLeft /> Your Address
        </h1>
      </div>

      <div className={styles.addAddress}>
        <div className={styles.addButton} onClick={togglePopup}>
          <button>+</button>
          <p>Add Address</p>
        </div>
        {/* Display Saved Addresses */}
        <div className={styles.savedAddresses}>
          {addresses.map((address, index) => (
            <div key={index} className={styles.addressCard}>
              <p>{address.state}, {address.city}</p>
              <p>Pincode: {address.pincode}</p>
              <p>Phone: {address.phone}</p>
              <p>{address.fullAddress}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Add Address Popup */}
      {isPopupOpen && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3>Add New Address</h3>
            <div className={styles.row}>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={newAddress.state}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City/District"
                value={newAddress.city}
                onChange={handleChange}
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={newAddress.pincode}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={newAddress.phone}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="fullAddress"
              placeholder="Enter full address"
              value={newAddress.fullAddress}
              onChange={handleChange}
            ></textarea>
            <button className={styles.saveButton} onClick={saveAddress}>
              Save
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

