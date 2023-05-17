import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlices';
import cartReducer from '../features/cart/cartSlices';

export const store = configureStore({
reducer: {
    product: productReducer,
    cart:cartReducer
  },
});
