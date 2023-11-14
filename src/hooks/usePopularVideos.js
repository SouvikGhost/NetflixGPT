import { useDispatch, useSelector } from "react-redux";
import { APIKEY_OPTION } from "../utils/constant";
import { addPopularVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularVideos = () => {
    const dispatch = useDispatch()
    const popularVideos=useSelector(store=>store.movies.popularVideos)
    const popularMoviesList= async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', APIKEY_OPTION);
      const jsonData = await data.json();
      // console.log(jsonData.results);
      dispatch(addPopularVideo(jsonData.results))
  
    }
    useEffect(()=>{
       !popularVideos && popularMoviesList();
  
    },[])
}

export default usePopularVideos
