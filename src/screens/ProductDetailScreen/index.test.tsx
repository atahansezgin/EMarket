import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import Store from 'store';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import ProductDetailScreen from '.';
import { RootStackParamList, SCREENS } from 'navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

describe('ProductDetailScreen', () => {
  let route: RouteProp<RootStackParamList, SCREENS.ProductDetailScreen>;
  let navigation: NativeStackNavigationProp<RootStackParamList, SCREENS.ProductDetailScreen, undefined>;
  beforeAll(() => {
    route = {
      key: "",
      name: SCREENS.ProductDetailScreen,
      params: {
        item: {
          id: "1",
          name: 'Test Product',
          image: 'test-image-url',
          price: "10",
          createdAt: '',
          description: '',
          model: '',
          brand: ''
        }
      }
    };
  });
  it('renders correctly', async () => {
    render(
      <NavigationContainer>
        <Provider store={Store}>
          <ProductDetailScreen navigation={navigation} route={route} />
        </Provider>
      </NavigationContainer>
    );
  });
});
