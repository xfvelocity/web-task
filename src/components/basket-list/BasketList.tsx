import type { Item, StoreState } from "@/types/app.types";

import { useDispatch, useSelector } from "react-redux";
import { basketTotal, removeFromBasket } from "../../stores/basket";
import "./basketList.scss";

import ShoppingItem from "../shopping-item/ShoppingItem";

const Basket = () => {
  const dispatch = useDispatch();

  const items: Item[] = useSelector((state: StoreState) => state.basket.items);
  const total = useSelector(basketTotal);

  const removeItem = (item: Item): void => {
    dispatch(removeFromBasket(item));
  };

  return (
    <>
      <div className="basket-list max-width">
        <h3>Your shopping basket</h3>

        <div className="list">
          {items.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              showQuantity={true}
              removeItem={removeItem}
            />
          ))}
        </div>

        <div className="basket-list-total">
          <p>Total: £{total}</p>
        </div>
      </div>
    </>
  );
};

export default Basket;
