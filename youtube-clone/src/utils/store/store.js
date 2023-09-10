import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import themeSlice from "./themeSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    theme:themeSlice,
    search:searchSlice
  },
});

export default store;
