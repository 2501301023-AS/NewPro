import React from "react";
import { useSelector } from "react-redux";

const Navbar = ({ onNavigate, currentView }) => {
  const cartItems = useSelector(
    (state) => state.cart.cartItems || []
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const styles = {
    nav: {
      backgroundColor: "#000000",
      color: "#ffffff",
      position: "sticky",
      top: 0,
      zIndex: 50,
      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
    },
    container: {
      maxWidth: "1280px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 24px",
      height: "80px",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "900",
      fontStyle: "italic",
      cursor: "pointer",
    },
    button: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      backgroundColor: currentView === "cart" ? "#ffffff" : "#18181b",
      color: currentView === "cart" ? "#000000" : "#ffffff",
      border: "1px solid",
      borderColor: currentView === "cart" ? "#ffffff" : "#27272a",
    },
    badge: {
      fontSize: "12px",
      padding: "2px 10px",
      borderRadius: "9999px",
      backgroundColor: currentView === "cart" ? "#000000" : "#ffffff",
      color: currentView === "cart" ? "#ffffff" : "#000000",
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.logo} onClick={() => onNavigate("shop")}>
          REDUXSTORE.
        </div>

        <button
          style={styles.button}
          onClick={() => onNavigate("cart")}
        >
          MY CART
          <span style={styles.badge}>{totalItems}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;