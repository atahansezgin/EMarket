import { render } from "@testing-library/react-native";
import BasketItemCard from ".";
import { BasketItem } from "types";
import { PropsWithChildren } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Store from "store";

describe("BasketItemCard Component", () => {
  const item: BasketItem = {
    id: "1",
    name: 'Test Product',
    image: 'test-image-url',
    price: "10",
    createdAt: '',
    description: '',
    model: '',
    brand: '',
    count: 3
  };

  const wrapper: React.FC<PropsWithChildren> = ({ children }) => (
    <NavigationContainer>
      <Provider store={Store}>
        {children}
      </Provider>
    </NavigationContainer>
  );

  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<BasketItemCard item={item} onIncrease={() => { }} onReduce={() => { }} />, { wrapper });

    expect(getByText(item.name)).toBeTruthy();
    expect(getByTestId("count-label").children[0]).toBe("3");
  });
});