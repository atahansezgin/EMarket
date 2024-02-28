import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import HomeScreen from '.';
import { Provider } from 'react-redux';
import { baseInstance } from 'api/instance';
import { END_POINTS } from 'api/endpoints';
import Store from 'store';
import { NavigationContainer } from '@react-navigation/native';

jest.mock("react-native-reanimated",() => "mockAnimated")

describe('HomeScreen', () => {
  it('renders correctly', async () => {
    // Mock the API call
    baseInstance.get = jest.fn().mockResolvedValue({ data: [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }] });

    // Render the component wrapped in Provider with mocked store
    const { getByText } = render(
      <NavigationContainer>
        <Provider store={Store}>
          <HomeScreen />
        </Provider>
      </NavigationContainer>
    );

    // Wait for the component to fetch products
    await waitFor(() => expect(baseInstance.get).toHaveBeenCalledWith(END_POINTS.GET_PRODUCTS));
    expect(getByText("Product 1")).toBeTruthy();
  });
});
