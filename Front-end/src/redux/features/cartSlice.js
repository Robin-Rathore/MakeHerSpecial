import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("Payload received in addToCart:", action.payload); // Log the payload
      if (state.findIndex((pro) => pro.id === action.payload.idAsInteger) === -1) {
        state.push(action.payload);
      } else {
        return state.map((item) =>
          item.id === action.payload.idAsInteger
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      console.log("Id is :", id)
      return state.filter((item) => item.idAsInteger !== id); // Use item.idAsInteger instead of item.id
    },
    
  },
});


export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;