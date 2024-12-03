import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ProductPage.module.css";
import bg from "../../assets/bg.png";
import burger from "../../assets/burger.png";
import rating from "../../assets/rating.png";
import { IoIosSearch } from "react-icons/io";
import vegan1 from "../../assets/vegan1.png";
import vegan2 from "../../assets/vegan2.png";
import vegan3 from "../../assets/vegan3.png";
import tracking from "../../assets/Tracking.png";
import clock from "../../assets/Clock.png";
import idVerified from "../../assets/ID_Verified.png";
import CustomMap from "../../components/Map/Map";
import reviews from "../../assets/reviews.png";
import { FaMotorcycle } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { BsClockFill } from "react-icons/bs";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Restaurant from "../../components/Restaurants/Restaurant";
import Footer from "../../components/Footer/Footer";
import Cart from "../../components/Cart/Cart";
import { useNavigate } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import cart from "../../assets/cart.png";
import { FaArrowCircleDown } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { IoIosContact } from "react-icons/io";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [currentAddress, setCurrentAddress] = useState(null);
  const userName = localStorage.getItem("name");
  useEffect(() => {
    const addresses = JSON.parse(localStorage.getItem("addresses")) || [];
    setCurrentAddress(addresses[0] || null);
  }, []);

  const handleAddToCart = async (product) => {
    let obj = {
      userId,
      productId: product._id,
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price,
    };
    try {
      let res = await axios.post("/cart", obj, { withCredentials: true });
      console.log(res.data);
      setCartItems([...cartItems, product]);
      setIsCartVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err, "Failed to fetch products");
        setLoading(false);
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  const reviewImages = [reviews, reviews, reviews, reviews, reviews, reviews];

  const showNextReview = () => {
    if (currentIndex < reviewImages.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const showPrevReview = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const showNext = () => {
    if (currentIndex < products.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const showPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleLoginSignupClick = () => {
    navigate("/profile");
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLocationClick = () => {
    navigate("/addresspage");
  };
  console.log(isCartVisible)
  const isActive = (path) => window.location.pathname === path;

  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <p className={styles.offer}>
          🌟 Get 5% Off your first order,
          <span className={styles.promo}>Promo: ORDER5</span>
        </p>
        <div className={styles.cartLocation}>
          <p>
            <HiLocationMarker className={styles.loc} />
            {currentAddress
              ? `${currentAddress.fullAddress}, ${currentAddress.city}`
              : ""}
          </p>
          <p className={styles.change} onClick={handleLocationClick}>
            Change Location
          </p>
          <div
            className={styles.cartConatiner}
            onClick={() => setIsCartVisible(!isCartVisible)}
          >
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
          <a
            onClick={() => handleNavigation("/homepage")}
            className={isActive("/homepage") ? styles.active : ""}
          >
            Home
          </a>
          <a>Browse Menu</a>
          <a>Special Offers</a>
          <a
            onClick={() => handleNavigation("/productpage")}
            className={isActive("/productpage") ? styles.active : ""}
          >
            Restaurants
          </a>
          <a>Track Order</a>
        </div>
        <div className={styles.loginSignup} onClick={handleLoginSignupClick}>
          {userName ? (
            <span className={styles.username}>
              <IoIosContact className={styles.contact} />
              Hey {userName}
            </span>
          ) : (
            <a>
              <IoIosContact className={styles.contact} /> Login/Signup
            </a>
          )}
        </div>
      </div>

      <div className={styles.heroModal}>
        <img src={bg} alt="background" className={styles.bg} />
        <div className={styles.textContent}>
          <p>I'm lovin' it!</p>
          <h1>McDonald's East London</h1>
          <div className={styles.infoButtons}>
            <div className={styles.heroButton}>
              <GoChecklist className={styles.heroModalIcons} /> Minimum Order:
              12 GBP
            </div>
            <div className={styles.heroButton}>
              <FaMotorcycle className={styles.heroModalIcons} /> Delivery in
              20-25 Minutes
            </div>
          </div>
        </div>
        <div className={styles.imageContent}>
          <img alt="burger" src={burger} />
          <div className={styles.heroRating}>
            <img src={rating} alt="ratings" />
          </div>
        </div>
        <div className={styles.openStatus}>
          <BsClockFill className={styles.heroModalIcons} /> Open until 3:00 AM
        </div>
      </div>

      <div className={styles.london}>
        <h1>All Offers from McDonald’s East London</h1>
        <div className={styles.londonText}>
          <div className={styles.londonWrapper}>
            <IoIosSearch className={styles.searchIcon} />
            <input
              placeholder="Search from menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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

        {isCartVisible && (
          <div className={styles.productCart}>
            <Cart cartItems={cartItems} />
          </div>
        )}
      </div>
      <div className={styles.containerCart}>
        <div
          className={styles.discountModal}
          style={{
            display: "grid",
            gridTemplateColumns: isCartVisible
              ? "450px 450px"
              : "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "50px",
          }}
        >
          <img src={vegan1} alt="first order discount" />
          <img src={vegan2} alt="Vegan Discount" />
          <img src={vegan3} alt="free ice-cream offer" />
        </div>

        <div className={styles.burgerText}>Burgers</div>
        <div className={styles.gridContainer}>
          <div
            className={styles.grid}
            style={{
              display: "grid",
              gridTemplateColumns: isCartVisible
                ? "400px 400px"
                : "auto auto auto",
            }}
          >
            {products.map((product, index) => (
              <div key={index} className={styles.gridModal}>
                <div className={styles.gridContent}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className={styles.gridPrice}>₹ {product.price}</div>
                </div>
                <div className={styles.gridImage}>
                  <img src={product.image} alt={product.title} />
                  <button
                    className={styles.gridAddButton}
                    onClick={() => handleAddToCart(product)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.friesText}>Fries</div>
      <div
        className={`${styles.gridContainer} ${
          isCartVisible ? styles.gridShrink : ""
        }`}
      >
        <div
          className={styles.grid}
          style={{
            display: "grid",
            gridTemplateColumns: isCartVisible
              ? "400px 400px"
              : "auto auto auto",
          }}
        >
          {products.map((product, index) => (
            <div key={index} className={styles.gridModal}>
              <div className={styles.gridContent}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className={styles.gridPrice}>₹ {product.price}</div>
              </div>
              <div className={styles.gridImage}>
                <img src={product.image} alt={product.title} />
                <button
                  className={styles.gridAddButton}
                  onClick={() => handleAddToCart(product)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.friesText}>Cold Drinks</div>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {products.map((product, index) => (
            <div key={index} className={styles.gridModal}>
              <div className={styles.gridContent}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className={styles.gridPrice}>₹ {product.price}</div>
              </div>
              <div className={styles.gridImage}>
                <img src={product.image} alt={product.title} />
                <button
                  className={styles.gridAddButton}
                  onClick={() => handleAddToCart(product)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
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
