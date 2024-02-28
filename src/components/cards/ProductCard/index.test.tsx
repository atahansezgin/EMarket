import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import ProductCard from '.';
import { Product } from 'types';
import { NavigationContainer } from '@react-navigation/native';
import Store from 'store';

describe('ProductCard Component', () => {
  const item: Product = {
    id: "1",
    name: 'Test Product',
    image: 'test-image-url',
    price: "10",
    createdAt: '',
    description: '',
    model: '',
    brand: ''
  };

  it('renders correctly', () => {
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <Provider store={Store}>
          <ProductCard item={item} onAddToCart={() => { }} onPressProduct={() => { }} onFav={() => { }} />
        </Provider>
      </NavigationContainer>
    );

    expect(getByText(item.name)).toBeTruthy();
    expect(getByText(`${item.price} ₺`)).toBeTruthy();
    expect(getByTestId('product-image')).toBeTruthy();
    expect(getByTestId('add-to-cart-button')).toBeTruthy();
  });

  it('adds item to cart on press add to cart button', () => {
    const addToCartMock = jest.fn();
    const { getByTestId } = render(
      <NavigationContainer>
        <Provider store={Store}>
          <ProductCard item={item} onAddToCart={addToCartMock} onPressProduct={() => { }} onFav={() => { }} />
        </Provider>
      </NavigationContainer>
    );
    const button = getByTestId('add-to-cart-button');
    fireEvent.press(button);
    expect(addToCartMock).toHaveBeenCalledWith(item);
  });
});
