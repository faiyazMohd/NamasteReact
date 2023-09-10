import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheSearches: (state, action) => {
      state = Object.assign(state,action.payload)
    },
    clearSearchCaches:(state)=>{
      console.log("inside clear caches");
      return state =  {};
    }
  },
});

export const { cacheSearches,clearSearchCaches } = searchSlice.actions;
export default searchSlice.reducer;
