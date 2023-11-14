import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMAGE } from "../utils/constant";

// import { useState } from "react";
// import Processing from "./Processing";
const GptSearch = () => {
  // const [isLoading,setIsLoading]=useState(false)
  return (
    <>
      <div className="absolute -z-20">
        <img className="h-screen object-cover md:w-screen fixed" src={BACKGROUND_IMAGE} alt="Backgrond Logo" />
      </div>
      <div className="">

      
      {/* <GptSearchBar isLoading={isLoading} setIsLoading={setIsLoading}/> */}
      <GptSearchBar />
      {/* {isLoading ? <GptMovieSuggestion /> : <Processing/>} */}
      <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
