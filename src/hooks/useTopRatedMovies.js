import { useDispatch } from "react-redux";
import { APIKEY_OPTION } from "../utils/constant";
import { addTopRatedVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const topRatedMoviesList= async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', APIKEY_OPTION);
      const jsonData = await data.json();
      // console.log(jsonData.results);
      dispatch(addTopRatedVideo(jsonData.results))
  
    }
    useEffect(()=>{
        topRatedMoviesList();
  
    },[])
}

export default useTopRatedMovies
