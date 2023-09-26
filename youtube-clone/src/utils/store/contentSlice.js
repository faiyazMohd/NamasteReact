import { createSlice } from "@reduxjs/toolkit";


const constentSlice = createSlice({
    name:"content",
    initialState:{
        playlistName:"",
        channelName:""
    },
    reducers:{
        modifyPlaylistName:(state,action)=>{
            state.playlistName = action.payload;
        },
        modifyChannelName:(state,action)=>{
            state.channelName = action.payload;
        }
    }
})

export const {modifyPlaylistName,modifyChannelName}  = constentSlice.actions;
export default constentSlice.reducer;