import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [
        { id: 1, title: 'Велосипед', count: 5 },
        { id: 2, title: 'Самокат', count: 4 },
        { id: 3, title: 'Гантели', count: 7 },
        { id: 4, title: 'Ракетки', count: 1 }
    ]
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment(state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            if (item && item.count < 25) {
                item.count += 1;
            }
        },
        decrement(state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            if (item && item.count > 0) {
                item.count -= 1;
            }
        },
        addProduct(state, action) {
            const newId = state.cart.length ? state.cart[state.cart.length - 1].id + 1 : 1;
            state.cart.push({ id: newId, title: action.payload, count: 1 });
        },
        removeProduct(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        }
    }
});

export const { increment, decrement, addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
