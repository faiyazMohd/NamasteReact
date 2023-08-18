import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      let isPresent = false;
      state.cartItems?.map((element) => {
        //   console.log(element.item.card?.info?.id);
        //   console.log(action.payload?.item.card?.info?.id);
        if (element.item.card?.info?.id === action.payload?.item.card?.info?.id) {
            element.quantity++;
            isPresent = true
        }
      });
      if (!isPresent) {
          state.cartItems.push(action.payload);
      }
    },

    removeItem: (state, action) => {
        let toRemove = false;
        let indexToRemove = -1
        state.cartItems?.map((element,index) => {
          if (element.item.card?.info?.id === action.payload?.card?.info?.id) {
              element.quantity--;
          }
          if (element.quantity === 0){
              toRemove= true;
              console.log("yes 0");
              indexToRemove=index;
          }
        });
        if (toRemove) {
            console.log(indexToRemove);
            state.cartItems.splice(indexToRemove,1)
             console.log(current( state.cartItems))
        }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
