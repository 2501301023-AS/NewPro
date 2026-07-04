import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            } else {
                const tempProduct = { ...action.payload, quantity: 1 };
                state.cartItems.push(tempProduct);
            }   
        },
        removeFromCart: (state, action) => {
            const id = action.payload.id || action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
        },
        increment: (state, action) => {
            const id = action.payload.id || action.payload;
            const itemIndex = state.cartItems.findIndex((item) => item.id === id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            }
        },
        decrement: (state, action) => {
            const id = action.payload.id || action.payload;
            const itemIndex = state.cartItems.findIndex((item) => item.id === id);
            if (itemIndex >= 0) {
                if (state.cartItems[itemIndex].quantity > 1) {
                    state.cartItems[itemIndex].quantity -= 1;
                } else {
                 
                    state.cartItems = state.cartItems.filter((item) => item.id !== id);
                }
            }
        }
    }
});

export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;