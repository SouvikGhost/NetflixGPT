import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularVideos:null,
        topRatedMovies:null,
        upcommingMovies:null,
        clickedMovieDetails:null,
        clickedMovieTrailer:null,
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
        addClickedMoviedetails:(state,action)=>{
            state.clickedMovieDetails=action.payload
        },
        addClickedMovieTrailer:(state,action)=>{
            state.clickedMovieTrailer=action.payload
        },
    }
})
export const {addClickedMovieTrailer,addNowPlayingMovies,addTrailerVideo,addPopularVideo,addTopRatedVideo,addUpcommingMovies,addClickedMoviedetails}=movieSlice.actions;
export default movieSlice.reducer;