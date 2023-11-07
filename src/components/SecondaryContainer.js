import { useSelector } from "react-redux"
import BannerList from "./BannerList"

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return movies.nowPlayingMovies && (
    <div className="bg-black">
      <div className="relative -mt-52 z-20 pl-12">
      <BannerList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <BannerList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <BannerList title={"Popular"} movies={movies.popularVideos}/>
      <BannerList title={"Upcomming Movies"} movies={movies.upcommingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
