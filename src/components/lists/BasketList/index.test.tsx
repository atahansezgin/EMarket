import { fireEvent, render } from "@testing-library/react-native";
import { Product } from "types";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Store from "store";
import BasketList from ".";
import { addOrIncrease } from "store/features/BasketSlice";
import React, { PropsWithChildren } from "react";

describe("BasketList Component", () => {
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

  beforeAll(() => {
    Store.dispatch(addOrIncrease(item));
  });

  const wrapper: React.FC<PropsWithChildren> = ({ children }) => (
    <NavigationContainer>
      <Provider store={Store}>
        {children}
      </Provider>
    </NavigationContainer>
  );

  it("render correctly", () => {
    const { getByText } = render(<BasketList data={Store.getState().basket.data} />, { wrapper });

    expect(getByText("Test Product")).toBeTruthy();
  });

  it("item count will be two", () => {
    const { getByTestId } = render(<BasketList data={Store.getState().basket.data} />, { wrapper });

    fireEvent.press(getByTestId("increase-button"));
    expect(Store.getState().basket.data[0].count).toBe(2);
  });

  it("basket will be empty", () => {
    const { getByTestId } = render(<BasketList data={Store.getState().basket.data} />, { wrapper });

    fireEvent.press(getByTestId("reduce-button"));
    fireEvent.press(getByTestId("reduce-button"));
    expect(Store.getState().basket.data.length).toBe(0);
  });
});