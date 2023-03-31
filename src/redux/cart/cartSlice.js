import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  quantity: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.items = [...state.items, payload];
      toast.success(`Added ${payload.title} to your cart`);
    },
    remove: (state, { payload }) => {
      const filteredItems = state.items.filter(
        (item) => item.id !== payload.id
      );
      state.items = filteredItems;
      toast.error(`Removed ${payload.title} from your cart`);
    },
    increment: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);
      item.quantity += 1;
    },
    decrement: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);
      item.quantity -= 1;
      if (item.quantity === 0) {
        const filteredItems = state.items.filter(
          (item) => item.id !== payload.id
        );
        state.items = filteredItems;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.quantity = 0;
      state.total = 0;
    },
    cartTotal: (state) => {
      state.quantity = state.items.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
      state.total = state.items.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0
      );
    },
  },
});

export const { add, remove, increment, decrement, clearCart, cartTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
