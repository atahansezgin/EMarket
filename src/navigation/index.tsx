import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import HomeScreen from "screens/HomeScreen";
import BasketScreen from "screens/BasketScreen";
import FavoritesScreen from "screens/FavoritesScreen";
import ProfileScreen from "screens/ProfileScreen";
import ProductDetailScreen from "screens/ProductDetailScreen";
import { BasketOutline, HomeOutline, PersonOutline, StarOutline } from "assets/icons";
import { useAppSelector } from "store";
import { RootStackParamList, RootTabParamList, SCREENS } from "./types";

const TabNavigation = () => {
  const basket = useAppSelector(state => state.basket.data);
  const basketCount = basket.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0);

  const Tab = createBottomTabNavigator<RootTabParamList>();
  return (
    <Tab.Navigator screenOptions={{ tabBarLabel: "" }}>
      <Tab.Screen
        name={SCREENS.HomeScreen}
        component={HomeScreen}
        options={{
          title: "E-Market",
          tabBarIcon: ({ size }) => <HomeOutline width={size} height={size} />
        }}
      />
      <Tab.Screen
        name={SCREENS.BasketScreen}
        component={BasketScreen}
        options={{
          title: "Sepet Ekranı",
          tabBarBadge: basketCount > 0 ? basketCount : undefined,
          tabBarIcon: ({ size }) => <BasketOutline width={size} height={size} />
        }}
      />
      <Tab.Screen
        name={SCREENS.FavoritesScreen}
        component={FavoritesScreen}
        options={{
          title: "Favoriler",
          tabBarIcon: ({ size }) => <StarOutline width={size} height={size} />
        }}
      />
      <Tab.Screen
        name={SCREENS.ProfileScreen}
        component={ProfileScreen}
        options={{
          title: "Profil",
          tabBarIcon: ({ size }) => <PersonOutline width={size} height={size} />
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.Tab} component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen
          name={SCREENS.ProductDetailScreen}
          component={ProductDetailScreen}
          options={({ route }) => ({
            title: route.params.item.name,
            headerBackTitle: "Geri"
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;