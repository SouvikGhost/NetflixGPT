import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularVideos:null,
        topRatedMovies:null,
        upcommingMovies:null
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo: (state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularVideo: (state,action)=>{
            state.popularVideos=action.payload;
        },
        addTopRatedVideo: (state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpcommingMovies: (state,action)=>{
            state.upcommingMovies=action.payload;
        },
    }
})
export const {addNowPlayingMovies,addTrailerVideo,addPopularVideo,addTopRatedVideo,addUpcommingMovies}=movieSlice.actions;
export default movieSlice.reducer;