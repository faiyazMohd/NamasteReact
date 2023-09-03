import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    theme:themeSlice
  },
});

export default store;
