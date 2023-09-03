import { createSlice } from "@reduxjs/toolkit";


const themSlice =  createSlice({
    name:"theme",
    initialState:{
        darkTheme:true,
        currentTheme:"Use device theme"
    },
    reducers:{
        setThemeToDark:(state)=>{
            state.darkTheme = true
        },
        setThemeToLight:(state)=>{
            state.darkTheme = false
        },
        setDarkTheme:(state,action)=>{
            state.darkTheme = action.payload
        },
        setCurrentTheme: (state,action)=>{
            state.currentTheme = action.payload;
        }
    }
})

export const {setThemeToDark,setThemeToLight,setDarkTheme,setCurrentTheme} =  themSlice.actions;
export default themSlice.reducer;