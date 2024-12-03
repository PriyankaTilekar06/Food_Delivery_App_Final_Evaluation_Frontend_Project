import React, { useState } from "react";
import styles from "./PaymentPage.module.css";
import { toast } from "react-hot-toast";
import Footer from "../../components/Footer/Footer";
import { FaArrowLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaWallet,
  FaCreditCard,
  FaChevronRight,
  FaPlusCircle,
} from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";

export default function PaymentPage() {
  const navigate = useNavigate();
  const [showCardInput, setShowCardInput] = useState(false);
  const [cardInput, setCardInput] = useState("");
  const [cards, setCards] = useState(["MaestroKard", "Paypal", "Stripe"]);
  const [selectedCard, setSelectedCard] = useState(null);
  const location = useLocation();
  const totalSubtotal = location.state?.totalSubtotal || 0;

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleProceedPayment = () => {
    if (selectedCard) {
      navigate("/ordersuccesfull");
    } else {
      toast.error("Please choose a payment method.");
    }
  };

  const handleAddCardClick = () => {
    setShowCardInput(true);
  };

  const handleCardInputChange = (e) => {
    setCardInput(e.target.value);
  };

  const handleAddCard = () => {
    if (cardInput.trim()) {
      setCards([...cards, cardInput]);
      setCardInput("");
      setShowCardInput(false);
    }
  };

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  return (
    <div>
      <Navbar />

      <div className={styles.payText}>
        <h1>
          <FaArrowLeft onClick={handleGoBack} />
          Choose and Pay
        </h1>
      </div>

      <div className={styles.paymentContainer}>
        <div className={styles.paymentMethods}>
          <div className={styles.paymentMethod}>
            <div className={styles.icon}>
              <FaWallet />
            </div>
            <div className={styles.details}>
              <div className={styles.title}>Wallet</div>
              <div className={styles.balance}>Available balance: ₹500</div>
            </div>
            <div className={styles.arrow}>
              <FaChevronRight />
            </div>
          </div>

          <div className={styles.divider}></div>

          {cards.map((card, index) => (
            <div
              className={styles.paymentMethod}
              key={index}
              onClick={() => handleCardSelect(card)}
              style={{
                border: selectedCard === card ? "2px solid #000" : "none",
              }}
            >
              <div className={styles.icon}>
                <FaCreditCard />
              </div>
              <div className={styles.details}>
                <div className={styles.title}>{card}</div>
              </div>
              <input
                type="radio"
                name="payment-method"
                checked={selectedCard === card}
                onChange={() => handleCardSelect(card)}
              />
            </div>
          ))}

          {showCardInput && (
            <div className={styles.paymentMethod}>
              <input
                type="text"
                className={styles.cardInput}
                value={cardInput}
                onChange={handleCardInputChange}
                placeholder="Enter card name"
              />
              <button className={styles.addCardButton} onClick={handleAddCard}>
                Add
              </button>
            </div>
          )}

          <div className={styles.addCard} onClick={handleAddCardClick}>
            <FaPlusCircle className={styles.addIcon} />
            <div className={styles.title}>Add Debit Card</div>
          </div>
        </div>

        <div className={styles.paymentSummary}>
          <div className={styles.amount}>
            Amount to be payed <span>₹{totalSubtotal}</span>
          </div>
          <div className={styles.divider}></div>
          <button
            className={styles.proceedButton}
            onClick={handleProceedPayment}
          >
            Proceed Payment
          </button>
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
