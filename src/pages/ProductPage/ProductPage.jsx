import React, { useState } from "react";
import styles from "./ProductPage.module.css";
import { HiLocationMarker } from "react-icons/hi";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import cart from "../../assets/cart.png";
import logo from "../../assets/logo.png";
import bg from "../../assets/bg.png";
import burger from "../../assets/burger.png";
import rating from "../../assets/rating.png";
import { GoChecklist } from "react-icons/go";
import { IoBicycle } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import vegan1 from "../../assets/vegan1.png";
import vegan2 from "../../assets/vegan2.png";
import vegan3 from "../../assets/vegan3.png";
import fries1 from "../../assets/fries.png";
import frenchfries from "../../assets/frenchfries.png";
import coldDrinks from "../../assets/coldDrinks.png";
import tracking from "../../assets/Tracking.png";
import clock from "../../assets/Clock.png";
import idVerified from "../../assets/ID_Verified.png";
import CustomMap from "../../components/Map/Map";
import reviews from "../../assets/reviews.png";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Restaurant from "../../components/Restaurants/Restaurant";
import Footer from "../../components/Footer/Footer";

export default function ProductPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Assuming reviews is an array of images
  const reviewImages = [reviews, reviews, reviews, reviews, reviews, reviews];

  const showNext = () => {
    if (currentIndex < reviewImages.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const showPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.products}>
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

      <div className={styles.heroModal}>
        <img src={bg} alt="background" className={styles.bg} />
        <div className={styles.textContent}>
          <p>I'm lovin' it!</p>
          <h1>McDonald's East London</h1>
          <div className={styles.infoButtons}>
            <div className={styles.heroButton}>Minimum Order: 12 GBP</div>
            <div className={styles.heroButton}>Delivery in 20-25 Minutes</div>
          </div>
        </div>
        <div className={styles.imageContent}>
          <img alt="burger" src={burger} />
          <div className={styles.heroRating}>
            <img src={rating} alt="ratings" />
          </div>
        </div>
        <div className={styles.openStatus}>Open until 3:00 AM</div>
      </div>

      <div className={styles.london}>
        <h1>All Offers from McDonald’s East London</h1>
        <div className={styles.londonText}>
          <div className={styles.londonWrapper}>
            <IoIosSearch className={styles.searchIcon} />
            <input placeholder="Search from menu..." />
          </div>
        </div>
      </div>

      <div className={styles.orbitModal}>
        <p className={styles.offer}>Offers</p>
        <p>Burgers</p>
        <p>Fries</p>
        <p>Snacks</p>
        <p>Cold drinks</p>
        <p>Happy Meal®</p>
        <p>Desserts</p>
        <p>Hot drinks</p>
        <p>Sauces</p>
        <p>Orbit®</p>
      </div>

      <div className={styles.discountModal}>
        <img src={vegan1} alt="first order discount" />
        <img src={vegan2} alt="Vegan Discount" />
        <img src={vegan3} alt="free ice-cream offer" />
      </div>

      <div className={styles.burgerText}>Burgers</div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          <div className={styles.gridModal}>
            <div className={styles.gridContent}>
              <h3>The classics for 3</h3>
              <p>
                1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized
                French Fries, 3 cold drinks
              </p>
              <div className={styles.gridPrice}>₹ 120</div>
            </div>
            <div className={styles.gridImage}>
              <img src={fries1} alt="Food Image" />
              <button className={styles.gridAddButton}>+</button>
            </div>
          </div>
          <div className={styles.gridModal}>
            <div className={styles.gridContent}>
              <h3>The family delight</h3>
              <p>
                2 Big Macs™, 2 Cheeseburgers, 4 medium-sized French Fries, 4
                cold drinks
              </p>
              <div className={styles.gridPrice}>₹ 250</div>
            </div>
            <div className={styles.gridImage}>
              <img src={fries1} alt="Food Image" />
              <button className={styles.gridAddButton}>+</button>
            </div>
          </div>
          <div className={styles.gridModal}>
            <div className={styles.girdContent}>
              <h3>Snack time combo</h3>
              <p>1 Cheeseburger, 1 medium-sized French Fries, 1 cold drink</p>
              <div className={styles.gridPrice}>₹ 90</div>
            </div>
            <div className={styles.gridImage}>
              <img src={fries1} alt="Food Image" />
              <button className={styles.gridAddButton}>+</button>
            </div>
          </div>
          <div className={styles.gridModal}>
            <div className={styles.gridContent}>
              <h3>Party pack</h3>
              <p>5 Big Macs™, 5 large-sized French Fries, 5 cold drinks</p>
              <div className={styles.gridPrice}>₹ 600</div>
            </div>
            <div className={styles.gridImage}>
              <img src={fries1} alt="Food Image" />
              <button className={styles.gridAddButton}>+</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.friesText}>Fries</div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          <div className={styles.gridModal}>
            <div className={styles.gridContent}>
              <h3>The classics for 3</h3>
              <p>
                1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized
                French Fries, 3 cold drinks
              </p>
              <div className={styles.gridPrice}>₹ 120</div>
            </div>
            <div className={styles.gridImage}>
              <img src={frenchfries} alt="Food Image" />
              <button className={styles.gridAddButton}>+</button>
            </div>
          </div>
          <div className={styles.gridModal}>
            <div className={styles.gridContent}>
              <h3>The family delight</h3>
              <p>
                2 Big Macs™, 2 Cheeseburgers, 4 medium-sized French Fries, 4
                cold drinks
              </p>
              <div className={styles.gridPrice}>₹ 250</div>
            </div>
            <div className={styles.gridImage}>
              <img src={frenchfries} alt="Food Image" />
              <button className={styles.gridAddButton}>+</button>
            </div>
          </div>
          <div className={styles.gridModal}>
            <div className={styles.girdContent}>
              <h3>Snack time combo</h3>
              <p>1 Cheeseburger, 1 medium-sized French Fries, 1 cold drink</p>
              <div className={styles.gridPrice}>₹ 90</div>
            </div>
            <div className={styles.gridImage}>
              <img src={frenchfries} alt="Food Image" />
              <button className={styles.gridAddButton}>+</button>
            </div>
          </div>
          <div className={styles.gridModal}>
            <div className={styles.gridContent}>
              <h3>Party pack</h3>
              <p>5 Big Macs™, 5 large-sized French Fries, 5 cold drinks</p>
              <div className={styles.gridPrice}>₹ 600</div>
            </div>
            <div className={styles.gridImage}>
              <img src={frenchfries} alt="Food Image" />
              <button className={styles.gridAddButton}>+</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.friesText}>Cold Drinks</div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          <div className={styles.gridModal}>
            <div className={styles.gridContent}>
              <h3>The classics for 3</h3>
              <p>
                1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized
                French Fries, 3 cold drinks
              </p>
              <div className={styles.gridPrice}>₹ 120</div>
            </div>
            <div className={styles.gridImage}>
              <img src={coldDrinks} alt="Food Image" />
              <button className={styles.gridAddButton}>+</button>
            </div>
          </div>
          <div className={styles.gridModal}>
            <div className={styles.gridContent}>
              <h3>The family delight</h3>
              <p>
                2 Big Macs™, 2 Cheeseburgers, 4 medium-sized French Fries, 4
                cold drinks
              </p>
              <div className={styles.gridPrice}>₹ 250</div>
            </div>
            <div className={styles.gridImage}>
              <img src={coldDrinks} alt="Food Image" />
              <button className={styles.gridAddButton}>+</button>
            </div>
          </div>
          <div className={styles.gridModal}>
            <div className={styles.girdContent}>
              <h3>Snack time combo</h3>
              <p>1 Cheeseburger, 1 medium-sized French Fries, 1 cold drink</p>
              <div className={styles.gridPrice}>₹ 90</div>
            </div>
            <div className={styles.gridImage}>
              <img src={coldDrinks} alt="Food Image" />
              <button className={styles.gridAddButton}>+</button>
            </div>
          </div>
          <div className={styles.gridModal}>
            <div className={styles.gridContent}>
              <h3>Party pack</h3>
              <p>5 Big Macs™, 5 large-sized French Fries, 5 cold drinks</p>
              <div className={styles.gridPrice}>₹ 600</div>
            </div>
            <div className={styles.gridImage}>
              <img src={coldDrinks} alt="Food Image" />
              <button className={styles.gridAddButton}>+</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.infoModal}>
        <div className={styles.deliveryInfo}>
          <h1>
            <img src={tracking} />
            Delivery information
          </h1>
          <p>
            <span>Monday:</span> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Tuesday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Wednesday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Thursday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Friday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Saturday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Sunday:</span> 8:00 AM–12:00 AM
          </p>
          <p>
            <span>Estimated time until delivery:</span> 20 min
          </p>
        </div>
        <div className={styles.contactInfo}>
          <h1>
            <img src={idVerified} />
            Contact information
          </h1>
          <p className={styles.para}>
            If you have allergies or other dietary <br /> restrictions, please
            contact the restaurant. The <br /> restaurant will provide
            food-specific <br /> information upon request.
          </p>
          <div>
            <p>
              <span>Phone number</span>
            </p>
            <p>+934443-43</p>
            <p>
              <span>Website</span>
            </p>
            <p>
              <a href="http://mcdonalds.uk/">http://mcdonalds.uk/</a>
            </p>
          </div>
        </div>
        <div className={styles.operationInfo}>
          <h1>
            <img src={clock} />
            Operational Times
          </h1>
          <p>
            <span>Monday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Tuesday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Wednesday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Thursday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Friday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Saturday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span>Sunday:</span> 8:00 AM–3:00 AM
          </p>
        </div>
      </div>

      <div className={styles.map}>
        <CustomMap />
      </div>

      <div className={styles.customerReviewModal}>
        <div className={styles.reviewText}>
          <h1>Customer Reviews</h1>
          <div className={styles.leftRight}>
            <IoIosArrowDropleftCircle
              onClick={showPrev}
              style={{ cursor: "pointer" }}
            />
            <IoIosArrowDroprightCircle
              onClick={showNext}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        <div className={styles.reviewModal}>
          {reviewImages
            .slice(currentIndex, currentIndex + 3)
            .map((image, index) => (
              <img key={index} src={image} alt={`Review ${index}`} />
            ))}
        </div>
        <img src={rating} alt="Rating" className={styles.ratingImage} />
      </div>

      <div className={styles.similarRestro}>
        <h1>Similar Restaurants</h1>
        <Restaurant />
      </div>

      <div className={styles.footerModal}>
        <Footer />
      </div>
    </div>
  );
}
