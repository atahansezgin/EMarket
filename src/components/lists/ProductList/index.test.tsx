import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Product } from 'types';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import ProductList from '.';
import Store from 'store';

describe('ProductList', () => {
  const mockData: Product[] = [
    {
      id: "1",
      name: 'Test Product',
      image: 'test-image-url',
      price: "10",
      createdAt: '',
      description: '',
      model: '',
      brand: ''
    },
    {
      id: "2",
      name: 'Test Product 2',
      image: 'test-image-url',
      price: "20",
      createdAt: '',
      description: '',
      model: '',
      brand: ''
    },
  ];

  it('renders product cards correctly', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Provider store={Store}>
          <ProductList data={mockData} onFavorite={() => {}} />
        </Provider>
      </NavigationContainer>

    );

    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('Test Product 2')).toBeTruthy();
  });

  it('calls onAddToCart when add to cart button is pressed', async () => {

    const { getByTestId, getByText } = render(
      <NavigationContainer>
        <Provider store={Store}>
          <ProductList data={mockData.slice(0, 1)} onFavorite={() => {}} />
        </Provider>
      </NavigationContainer>
    );
    expect(getByText('Test Product')).toBeTruthy();
    fireEvent.press(getByTestId("add-to-cart-button"));
    expect(Store.getState().basket.data.length).toBe(1);
  });
});
