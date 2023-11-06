import { useDispatch } from "react-redux";
import { APIKEY_OPTION } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";





// Custom Hook for Fetching Movie Trailer Video which will be shown in Maincontainer
const useMovieTrailer=(movieId)=>{
    const dispatch = useDispatch()
    const fetchTrailerVideos= async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",APIKEY_OPTION)
        const jsonData = await data.json();
        const filteredData=jsonData.results.filter(video=> video.type === "Trailer");
        const trailerVideo =filteredData.length ? filteredData[0] : jsonData.results[0]
        dispatch(addTrailerVideo(trailerVideo))
    }
    useEffect(()=>{
        fetchTrailerVideos();
    },[])

}
export default useMovieTrailer;