import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import appReducer from './slices/appSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    app: appReducer,
  },
});

export default store;