
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList';
import Cartitems from './Component/Cartitems';

const App = () => {
  const [view, setView] = useState('shop');
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased">
      <Navbar onNavigate={setView} currentView={view} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {view === 'shop' ? (
          <div>
            <h2 className="text-xl font-black tracking-wide uppercase text-gray-900 mb-6">Catalog</h2>
            <ProductList />
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black uppercase tracking-wide text-gray-900">Your Cart Selection</h2>
              <button 
                onClick={() => setView('shop')} 
                className="text-black font-black italic text-xs uppercase hover:underline"
              >
                ← Continue Shopping
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 font-bold text-sm">Your cart is currently empty.</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    {cartItems.map((item) => (
                      <Cartitems key={item.id} item={item} />
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase">Total Cost</p>
                      <p className="text-2xl font-black text-emerald-600">Rs {totalPrice}</p>
                    </div>
                    <button className="bg-black text-white font-black italic text-sm tracking-wider uppercase px-6 py-3 rounded-xl hover:bg-zinc-800 transition">
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;




































































































