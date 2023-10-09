import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import themeSlice from "./themeSlice";
import searchSlice from "./searchSlice";
import contentSlice from "./contentSlice";
import liveChatSlice from "./liveChatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    theme:themeSlice,
    search:searchSlice,
    content:contentSlice,
    liveChat:liveChatSlice
  },
});

export default store;
