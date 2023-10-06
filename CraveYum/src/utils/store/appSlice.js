import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    place_id: null,
    address: null,
    addressSidebar: false,
    signInSidebar:false
  },
  reducers: {
    moddifyPlaceId: (state, action) => {
      state.place_id = action.payload;
    },
    moddifyAddress: (state, action) => {
      state.address = action.payload;
    },
    openAddressSidebar: (state) => {
      state.addressSidebar = true;
    },
    closeAddressSidebar: (state) => {
      state.addressSidebar = false;
    },
    openSignInSidebar: (state) => {
      state.signInSidebar = true;
    },
    closeSignInSidebar: (state) => {
      state.signInSidebar = false;
    },
  },
});

export const { moddifyPlaceId, moddifyAddress,openAddressSidebar,closeAddressSidebar,openSignInSidebar,closeSignInSidebar } = appSlice.actions;

export default appSlice.reducer;
