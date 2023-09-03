import { createSlice } from "@reduxjs/toolkit";
const app = createSlice({
  name: "app",
  initialState: {
    showSidebar: false,
    locationCode:"IN",
  },
  reducers: {
    openSidebar: (state) => {
      state.showSidebar = true;
    },
    closeSidebar: (state) => {
      state.showSidebar = false;
    },
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    setLocationCode:(state,action)=>{
      state.locationCode = action.payload;
    }
  },
});

export const { openSidebar, closeSidebar ,toggleSidebar,setLocationCode} = app.actions;
export default app.reducer;
