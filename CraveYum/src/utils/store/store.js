import {configureStore} from  "@reduxjs/toolkit"
import cartSlice from "./cartSlice";
import appSlice from "./appSlice";
const store = configureStore({
    reducer:{
        cart:cartSlice,
        app:appSlice
    }
})

export default store;