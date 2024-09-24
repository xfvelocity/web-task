import type { Item } from "@/types/app.types";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../stores/basket";
import axios from "axios";

import ShoppingItem from "../shopping-item/ShoppingItem";
import Snackbar from "../snackbar/Snackbar";

const ShoppingList = () => {
  const dispatch = useDispatch();

  const [items, setItems] = useState<Item[]>([]);
  const [snackbarText, setSnackbarText] = useState<string>("");
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);

  const addItemToBasket = (item: Item): void => {
    // Add item to basket
    dispatch(addToBasket(item));
    setSnackbarText(item.name);

    // Display the snackbar for 3 seconds to show the item has been added
    setIsSnackbarOpen(true);

    setTimeout(() => {
      setIsSnackbarOpen(false);
    }, 3000);
  };

  const getShoppingItems = async (): Promise<void> => {
    const res = await axios.get(
      "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json"
    );

    if (res?.data) {
      // If there is a valid data then set the items
      setItems(res?.data);
    }
  };

  useEffect(() => {
    getShoppingItems();
  }, []);

  return (
    <>
      <div className="list max-width">
        {items.map((item) => (
          <ShoppingItem key={item.id} item={item} addItem={addItemToBasket} />
        ))}
      </div>

      <Snackbar
        text={`${snackbarText} added to basket`}
        isOpen={isSnackbarOpen}
      />
    </>
  );
};

export default ShoppingList;
