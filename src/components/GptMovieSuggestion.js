import { useSelector } from "react-redux"
import BannerList from "./BannerList"
import Processing from "./Processing";


const GptMovieSuggestion = () => {
  const {moviesName,moviesResult}=useSelector(store=>store.gpt)
  if(!moviesName) return <Processing/> ;
  // if(moviesName.length===0) return <Processing/> ;
  
  return (
    <div className="bg-black bg-opacity-70 rounded-2xl p-4 m-4 text-white">
      <div>
      
      {moviesName?.map((movie,index)=><BannerList key={movie}  title={movie} movies={moviesResult[index]}/>)}
      </div>
      
    </div>
  )
}

export default GptMovieSuggestion
