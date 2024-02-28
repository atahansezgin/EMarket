import { createSlice } from "@reduxjs/toolkit";
import { BasketItem } from "../../../types";

const initialState: { data: BasketItem[]; } = { data: [] };

const BasketSlice = createSlice({
  initialState,
  name: "basket",
  reducers: {
    addOrIncrease: (state, action) => {
      const productInBasket = state.data.find(product => product.id === action.payload.id);
      if (productInBasket) {
        productInBasket.count += 1;
      } else {
        state.data.push({ ...action.payload, count: 1 });
      }
    },
    removeOrReduce: (state, action) => {
      const productIndex = state.data.findIndex(product => product.id === action.payload);
      if (productIndex !== -1) {
        const product = state.data[productIndex];
        if (product.count > 1) {
          product.count -= 1;
        } else {
          state.data.splice(productIndex, 1);
        }
      }
    }
  }
});

export default BasketSlice.reducer;
export const { addOrIncrease, removeOrReduce } = BasketSlice.actions;