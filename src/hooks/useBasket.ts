import { useDispatch } from "react-redux";
import { Product } from "types";
import { addOrIncrease, removeOrReduce } from "store/features/BasketSlice";

const useBasket = () => {
  const dispatch = useDispatch();

  const addOrIncreaseProduct = (product: Product) => {
    dispatch(addOrIncrease(product));
  };

  const removeOrReduceProduct = (productId: string) => {
    dispatch(removeOrReduce(productId));
  };

  return { addOrIncreaseProduct, removeOrReduceProduct };

};

export default useBasket;