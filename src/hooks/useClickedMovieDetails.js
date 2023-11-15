import { useEffect } from "react";
import { addClickedMoviedetails } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { APIKEY_OPTION } from "../utils/constant";

const useClickedMovieDetails=(id)=>{
    const dispatch = useDispatch()
    const clickedMovieDetails= async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US', APIKEY_OPTION)
        const jsonData=await data.json();
        dispatch(addClickedMoviedetails(jsonData))
      }
      useEffect(()=>{
          clickedMovieDetails()
          return ()=>{
            dispatch(addClickedMoviedetails(null))
          }
      },[])
}
export default useClickedMovieDetails;