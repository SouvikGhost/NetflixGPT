import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { APIKEY_OPTION } from "../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{
    const dispatch = useDispatch()
    const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)
  const nowPlayingMoviesList= async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', APIKEY_OPTION);
    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData.results))

  }
  useEffect(()=>{

    !nowPlayingMovies && nowPlayingMoviesList();

  },[])


}

export default useNowPlayingMovies;