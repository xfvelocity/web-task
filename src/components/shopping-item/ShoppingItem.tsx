import type { Item } from "@/types/app.types";

import "./shoppingItem.scss";

// ** Types **
interface Props {
  item: Item;
  addItem?: (item: Item) => void;
  removeItem?: (item: Item) => void;
  showQuantity?: boolean;
}

const ShoppingItem = ({ item, addItem, removeItem, showQuantity }: Props) => {
  return (
    <div className="shopping-item">
      <div className="shopping-item-header">
        <h4>{item.name}</h4>
        <p>£{item.price}</p>
      </div>

      <p>{item.description}</p>

      {addItem ? (
        <button
          className="shopping-item-add hover"
          onClick={() => addItem(item)}
        >
          Add to basket
        </button>
      ) : null}

      {removeItem ? (
        <button
          className="shopping-item-remove hover"
          onClick={() => removeItem(item)}
        >
          Remove from basket
        </button>
      ) : null}

      {showQuantity && item.quantity > 1 ? (
        <div className="shopping-item-quantity">x{item.quantity}</div>
      ) : null}
    </div>
  );
};

export default ShoppingItem;
