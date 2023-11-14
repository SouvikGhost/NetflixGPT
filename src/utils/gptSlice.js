import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        moviesName:null,
        moviesResult:null
    },
    reducers:{
        toggleGptSearchView: (state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addMoviesFromTMDB: (state,action)=>{
            const { moviesName,moviesResult}=action.payload;
            state.moviesName=moviesName;
            state.moviesResult=moviesResult;

        },
        clearResult: (state,action)=>{
            state.moviesResult=null;
            state.moviesName=null;
        }
    }
})
export const {toggleGptSearchView,addMoviesFromTMDB,clearResult} =gptSlice.actions;
export default gptSlice.reducer;