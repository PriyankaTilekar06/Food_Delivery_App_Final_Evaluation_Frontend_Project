import React from "react";
import styles from "./Restaurant.module.css";
import restro1 from "../../assets/restro1.png";
import restro2 from "../../assets/restro2.png";
import restro3 from "../../assets/restro3.png";
import restro4 from "../../assets/restro4.png";
import restro5 from "../../assets/restro5.png";
import restro6 from "../../assets/restro6.png";
import { useNavigate } from "react-router-dom";

export default function Restaurant() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/productpage`);
  };

  return (
    <div>
      <div className={styles.restro}>
        <img
          src={restro1}
          alt="restaurant"
          onClick={() => handleRedirect("")}
        />
        <img
          src={restro2}
          alt="restaurant"
          onClick={() => handleRedirect("")}
        />
        <img
          src={restro3}
          alt="restaurant"
          onClick={() => handleRedirect("")}
        />
        <img
          src={restro4}
          alt="restaurant"
          onClick={() => handleRedirect("")}
        />
        <img
          src={restro5}
          alt="restaurant"
          onClick={() => handleRedirect("")}
        />
        <img
          src={restro6}
          alt="restaurant"
          onClick={() => handleRedirect("")}
        />
      </div>
    </div>
  );
}
