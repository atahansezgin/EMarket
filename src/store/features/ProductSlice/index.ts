import { createSlice } from "@reduxjs/toolkit";
import { Filter, Product } from "../../../types";
import { SortType } from "../../../types/Filter";
import moment from "moment";

const initialState: {
  products: Product[];
  favoritesIdList: string[];
  models: string[];
  brands: string[];
  filtered: Product[];
  isFiltered: boolean;
} = {
  products: [],
  favoritesIdList: [],
  models: [],
  brands: [],
  filtered: [],
  isFiltered: false
};

const ProductSlice = createSlice({
  initialState,
  name: "product",
  reducers: {
    setProducts: (state, action: { type: string, payload: Product[]; }) => {
      state.products = action.payload;
      state.filtered = action.payload;
      state.models = [...new Set(action.payload.map(product => product.model))];
      state.brands = [...new Set(action.payload.map(product => product.brand))];
    },
    filterProducts: (state, action: { type: string, payload: Filter; }) => {
      state.isFiltered = true;
      const { brands, models, sortType } = action.payload;
      if (brands.length > 0) {
        state.filtered = state.products.filter(product => brands.includes(product.brand));
      }
      if (models.length > 0) {
        state.filtered = state.filtered.filter(product => models.includes(product.model));
      }
      if (!!sortType) {
        switch (sortType) {
          case SortType.NEW_TO_OLD:
            state.filtered = state.filtered.sort((a, b) => moment(b.createdAt).diff(moment(a.createdAt)));
            break;
          case SortType.OLD_TO_NEW:
            state.filtered = state.filtered.sort((a, b) => moment(a.createdAt).diff(moment(b.createdAt)));
            break;
          case SortType.PRICE_HIGH_TO_LOW:
            state.filtered = state.filtered.sort((a, b) => Number(b.price) - Number(a.price));
            break;
          default:
            state.filtered = state.filtered.sort((a, b) => Number(a.price) - Number(b.price));
        }
      }
    },
    clearFilter: (state) => {
      state.isFiltered = false;
      state.filtered = state.products;
    },
    addOrRemoveFavorite: (state, action) => {
      if (!state.favoritesIdList.includes(action.payload)) {
        state.favoritesIdList.push(action.payload);
      } else {
        state.favoritesIdList = state.favoritesIdList.filter(favoriteId => favoriteId != action.payload);
      }
    }
  }
});

export default ProductSlice.reducer;
export const { setProducts, addOrRemoveFavorite, filterProducts, clearFilter } = ProductSlice.actions;