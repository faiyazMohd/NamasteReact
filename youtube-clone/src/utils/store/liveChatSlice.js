import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name:"liveChat",
    initialState:{
        liveChats:[]
    },
    reducers:{
        addLiveChat:(state,action)=>{
            state.liveChats.unshift(action.payload)
            if (state.liveChats.length > 25) {
                state.liveChats.splice(25,1)
            }
        }
    }
})

export const {addLiveChat,incrementTotalChatsCounts} = liveChatSlice.actions
export default liveChatSlice.reducer;