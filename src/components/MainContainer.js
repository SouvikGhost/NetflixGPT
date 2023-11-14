import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    // console.log(movies);
    if(!movies) return
    const mainMovie=movies[2]
    const {original_title,overview,id}=mainMovie
    
    // console.log(movies);
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} description={overview}/>
      <VideoBackground  movieId={id}/>
    </div>
  )
}

export default MainContainer
