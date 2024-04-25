import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: {},
    subtotal: 0
  };
  

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { id, quantity } = action.payload;
      
            if (state.items[id]) {
              state.items[id] += quantity;
            } else {
              state.items = {
                ...state.items,
                [id]: quantity,
              };
            }
          },
        removeItem: (state, action) => {
            if (state.items[action.payload])
                delete state.items[action.payload];
        },
        setItemQuantity: (state, action) => {
            if (!state.items[action.payload.id])
                state.items = {
                    ...state.items,
                    [action.payload.id]: action.payload.quantity
                };
            if (action.payload.quantity === 0)
                delete state.items[action.payload.id];
            else
                state.items[action.payload.id] = action.payload.quantity;
        },
        updateSubtotal: (state, action) => {
          state.subtotal = action.payload;
        },
    },
})

export const { addItem, removeItem, setItemQuantity, updateSubtotal } = cartSlice.actions;

export default cartSlice.reducer;
