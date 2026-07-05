import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    CartItems: [],
};

const CartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.CartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.CartItems[itemIndex].quantity += 1;
            } else {
                const tempProduct = { ...action.payload, quantity: 1 };
                state.CartItems.push(tempProduct);
            }   
        },
        removeFromCart: (state, action) => {
            const id = action.payload.id || action.payload;
            state.CartItems = state.CartItems.filter((item) => item.id !== id);
        },
        increment: (state, action) => {
            const id = action.payload.id || action.payload;
            const itemIndex = state.CartItems.findIndex((item) => item.id === id);
            if (itemIndex >= 0) {
                state.CartItems[itemIndex].quantity += 1;
            }
        },
        decrement: (state, action) => {
            const id = action.payload.id || action.payload;
            const itemIndex = state.CartItems.findIndex((item) => item.id === id);
            if (itemIndex >= 0) {
                if (state.CartItems[itemIndex].quantity > 1) {
                    state.CartItems[itemIndex].quantity -= 1;
                } else {
                 
                    state.CartItems = state.CartItems.filter((item) => item.id !== id);
                }
            }
        }
    }
});

export const { addToCart, removeFromCart, increment, decrement } = CartSlice.actions;
export default CartSlice.reducer;