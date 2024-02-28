import { Product } from "../types";

export enum SCREENS {
  HomeScreen = "HomeScreen",
  BasketScreen = "BasketScreen",
  FavoritesScreen = "FavoritesScreen",
  ProfileScreen = "ProfileScreen",
  Tab = "Tab",
  ProductDetailScreen = "ProductDetailScreen"
}

export type RootStackParamList = {
  [SCREENS.Tab]: RootTabParamList,
  [SCREENS.ProductDetailScreen]: {
    item: Product;
  };
};

export type RootTabParamList = {
  [SCREENS.HomeScreen]: undefined;
  [SCREENS.BasketScreen]: undefined;
  [SCREENS.FavoritesScreen]: undefined;
  [SCREENS.ProfileScreen]: undefined;
};