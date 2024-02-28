import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import ProductSlice from "./features/ProductSlice";
import BasketSlice from "./features/BasketSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";


const productPersistConfig = {
  key: "@product",
  storage: AsyncStorage
};

const basketPersistConfig = {
  key: "@basket",
  storage: AsyncStorage
};

const productReducer = persistReducer(productPersistConfig, ProductSlice);
const basketReducer = persistReducer(basketPersistConfig, BasketSlice);

const Store = configureStore({
  reducer: {
    product: productReducer,
    basket: basketReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});

type RootStore = ReturnType<typeof Store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

export default Store;