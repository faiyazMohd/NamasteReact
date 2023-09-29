import { createSlice } from "@reduxjs/toolkit";


const constentSlice = createSlice({
    name:"content",
    initialState:{
        playlistName:"",
        channelName:"",
        uploadsId:"",
        channelDetails:null
    },
    reducers:{
        modifyPlaylistName:(state,action)=>{
            state.playlistName = action.payload;
        },
        modifyChannelDetails:(state,action)=>{
            state.channelDetails = action.payload;
        },

    }
})

export const {modifyPlaylistName,modifyChannelDetails}  = constentSlice.actions;
export default constentSlice.reducer;