import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import Store from 'store';
import { NavigationContainer } from '@react-navigation/native';
import FavoritesScreen from '.';

describe('FavoritesScreen', () => {
  it('renders correctly', async () => {
    render(
      <NavigationContainer>
        <Provider store={Store}>
          <FavoritesScreen />
        </Provider>
      </NavigationContainer>
    );
  });
});
