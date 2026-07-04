import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = ({ onNavigate, currentView }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  
  const styles = {
    nav: {
      backgroundColor: '#000000',
      color: '#ffffff',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 24px',
      height: '80px',
    },
    logo: {
      fontSize: '24px',
      fontWeight: '900',
      fontStyle: 'italic',
      letterSpacing: '0.05em',
      cursor: 'pointer',
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 20px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '700',
      fontStyle: 'italic',
      letterSpacing: '0.025em',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      border: '1px solid',
     
      backgroundColor: currentView === 'cart' ? '#ffffff' : '#18181b',
      color: currentView === 'cart' ? '#000000' : '#ffffff',
      borderColor: currentView === 'cart' ? '#ffffff' : '#27272a',
    },
    badge: {
      fontSize: '12px',
      padding: '2px 10px',
      borderRadius: '9999px',
      fontWeight: '700',
      backgroundColor: currentView === 'cart' ? '#000000' : '#ffffff',
      color: currentView === 'cart' ? '#ffffff' : '#000000',
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        
       
        <div onClick={() => onNavigate('shop')} style={styles.logo}>
          REDUXSTORE.
        </div>
        
   
        <div>
          <button onClick={() => onNavigate('cart')} style={styles.button}>
            <span>MY CART</span>
            <span style={styles.badge}>
              {totalItems}
            </span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;