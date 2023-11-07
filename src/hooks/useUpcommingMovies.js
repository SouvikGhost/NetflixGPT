import { useDispatch } from "react-redux";
import { APIKEY_OPTION } from "../utils/constant";
import { addUpcommingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcommingMovies = () => {
    const dispatch = useDispatch()
    const upcommingMoviesList= async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', APIKEY_OPTION);
      const jsonData = await data.json();
      // console.log(jsonData.results);
      dispatch(addUpcommingMovies(jsonData.results))
  
    }
    useEffect(()=>{
        upcommingMoviesList();
  
    },[])
}

export default useUpcommingMovies
