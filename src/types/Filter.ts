export enum SortType {
  OLD_TO_NEW = "OLD_TO_NEW",
  NEW_TO_OLD = "NEW_TO_OLD",
  PRICE_LOW_TO_HIGH = "PRICE_LOW_TO_HIGH",
  PRICE_HIGH_TO_LOW = "PRICE_HIGH_TO_LOW"
}

export type Filter = {
  brands: string[];
  models: string[];
  sortType?: SortType;
};