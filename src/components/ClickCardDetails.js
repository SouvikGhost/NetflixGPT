import { useParams } from "react-router-dom"
import useClickedMovieDetails from "../hooks/useClickedMovieDetails";
import { useSelector } from "react-redux";
import ClickedVideoTitle from "./ClickedVideoTitle";
import ClickedVideoBackground from "./ClickedVideoBackground"

const ClickCardDetails = () => {
  const {id}= useParams()

  useClickedMovieDetails(id)
  const {original_title,overview,original_language,release_date,runtime,title,popularity}=useSelector(store=>store.movies.clickedMovieDetails || {});
  

  
 

  return (
    <div className="bg-black  text-white">
    <ClickedVideoBackground movieId={id}/>
    <ClickedVideoTitle original_title={original_title} overview={overview} original_language={original_language} release_date={release_date} popularity={popularity} runtime={runtime} title={title}/>
  
    </div>
  )
}

export default ClickCardDetails
