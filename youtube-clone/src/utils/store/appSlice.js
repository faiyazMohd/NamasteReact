import { createSlice } from "@reduxjs/toolkit";
const app = createSlice({
  name: "app",
  initialState: {
    showSidebar: false,
    locationName:"India",
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
    },
    setLocationName:(state,action)=>{
      state.locationName = action.payload;
    }
  },
});

export const { openSidebar, closeSidebar ,toggleSidebar,setLocationCode,setLocationName} = app.actions;
export default app.reducer;
