import type { BasketState, StoreState } from "@/types/app.types";

import { createSlice } from "@reduxjs/toolkit";

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action): void => {
      // Check if theres a matching item already in the basket
      const matchingItemIndex = state.items.findIndex(
        (s) => s.id === action.payload.id
      );

      // If there is a matching item, increase the quantity
      if (matchingItemIndex > -1) {
        state.items[matchingItemIndex].quantity++;
      } else {
        // If not, push the item onto the array
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromBasket: (state, action): void => {
      state.items = state.items.filter((s) => s.id !== action.payload.id);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const basketTotalAmount = (state: StoreState): number => {
  // Get the total of items in the basket, by adding up the quantities of each value
  return state?.basket?.items.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );
};

export const basketTotal = (state: StoreState): string => {
  // Get the total price of the items in the basket
  return state?.basket?.items
    .reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)
    .toFixed(2);
};

export default basketSlice.reducer;
