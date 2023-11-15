import { useDispatch, useSelector } from "react-redux";
import { APIKEY_OPTION } from "../utils/constant";
import { useEffect } from "react";
import { addClickedMovieTrailer } from "../utils/movieSlice";

const ClickedVideoBackground = ({movieId}) => {
  const clickedVideoTrailer =useSelector(store=>store.movies.clickedMovieTrailer)

  const dispatch = useDispatch()
  const fetchTrailerVideos= async ()=>{
      const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",APIKEY_OPTION)
      const jsonData = await data.json();
      const filteredData=jsonData.results.filter(video=> video.type === "Trailer");
      const trailerVideo =filteredData.length ? filteredData[0] : jsonData.results[0]
      dispatch(addClickedMovieTrailer(trailerVideo))
  }
  useEffect(()=>{
      fetchTrailerVideos();
  },[])
  console.log(clickedVideoTrailer);


  return (
    <div className="">
    <iframe className="w-3/4 mx-auto aspect-video"
    src={"https://www.youtube.com/embed/"+clickedVideoTrailer?.key+"?playlist="+clickedVideoTrailer?.key+"&autoplay=1&loop=1&mute=1"} 
    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  </div>
  )
}

export default ClickedVideoBackground
