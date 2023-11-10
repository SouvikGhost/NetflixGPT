import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularVideos from "../hooks/usePopularVideos";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  const gptSearch =useSelector(store=> store.gpt.showGptSearch)
  
  // custom hook for fetching NowPlayingMovies from API and Store it to Redux Store
  useNowPlayingMovies();
  usePopularVideos()
 useTopRatedMovies()
 useUpcommingMovies()
  
  

  return (
    <div className="">
      
      <Header/>
      {
        gptSearch ? <GptSearch/> : 
        <>
                <MainContainer/>
                <SecondaryContainer/>
        </>
      }
      
      
    </div>
  )
}

export default Browse
