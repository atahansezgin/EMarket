import { useDispatch } from "react-redux";
import { useAppSelector } from "store";
import { Filter, Product } from "types";
import { baseInstance } from "api/instance";
import { END_POINTS } from "api/endpoints";
import { addOrRemoveFavorite, clearFilter, filterProducts, setProducts } from "store/features/ProductSlice";
import { useEffect, useState } from "react";

const useProducts = () => {
  const dispatch = useDispatch();
  const { filtered, isFiltered, favoritesIdList } = useAppSelector(state => state.product);

  const [data, setData] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  const fetchProducts = async () => {
    const response = await baseInstance.get<Product[]>(END_POINTS.GET_PRODUCTS);
    if (response.data) {
      dispatch(setProducts(response.data));
    }
  };

  useEffect(() => {
    setData(filtered);
  }, [filtered]);

  const onSearch = (search: string) => {
    setSearch(search);
    setData(filtered.filter(product => product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
  };

  const onFavorite = (productId: string) => {
    dispatch(addOrRemoveFavorite(productId));
  };

  const onFilter = (filter: Filter) => {
    dispatch(filterProducts(filter));
  };

  const onClearFilter = () => {
    dispatch(clearFilter());
  };

  return {
    data,
    isFiltered,
    search,
    favoritesIdList,
    onSearch,
    onFavorite,
    fetchProducts,
    onClearFilter,
    onFilter
  };
};

export default useProducts;