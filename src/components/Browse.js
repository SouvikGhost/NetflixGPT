import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  
  // custom hook for fetching NowPlayingMovies from API and Store it to Redux Store
  useNowPlayingMovies();
  
  

  return (
    <div className="">
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      
    </div>
  )
}

export default Browse
