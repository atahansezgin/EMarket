import React from 'react';
import ProductList from 'components/lists/ProductList';
import useProducts from 'hooks/useProducts';

const FavoritesScreen = () => {
  const { data, favoritesIdList, onFavorite } = useProducts();

  const favoriteList = data.filter(product => favoritesIdList.includes(product.id))
  return (
    <ProductList data={favoriteList} onFavorite={onFavorite} />
  );
};

export default FavoritesScreen;