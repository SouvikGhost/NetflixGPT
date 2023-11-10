import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMAGE } from "../utils/constant";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute w-screen -z-20">
        <img className="opacity-90"
          src={BACKGROUND_IMAGE}
          alt="Backgrond Logo"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
