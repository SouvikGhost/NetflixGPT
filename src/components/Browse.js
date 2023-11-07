import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularVideos from "../hooks/usePopularVideos";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  
  // custom hook for fetching NowPlayingMovies from API and Store it to Redux Store
  useNowPlayingMovies();
  usePopularVideos()
 useTopRatedMovies()
 useUpcommingMovies()
  
  

  return (
    <div className="">
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      
    </div>
  )
}

export default Browse
