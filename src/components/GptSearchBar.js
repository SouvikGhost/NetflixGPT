import { useDispatch, useSelector } from "react-redux"
import languageConstant from "../utils/languageConstant"
import { useRef } from "react";
import openai from "../utils/openai"
import { APIKEY_OPTION } from "../utils/constant";
import { addMoviesFromTMDB } from "../utils/gptSlice";

const GptSearchBar = ({isLoading,setIsLoading}) => {
  const languageKey=useSelector(store=>store.language.lang);
  const inputRef=useRef(null);
  const dispatch =useDispatch()

  const getMoviesFromTMDB = async (movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', APIKEY_OPTION)
    const jsonData = await data.json();
    return jsonData.results;
  }


  const handleInputResult= async ()=>{
    const gptQuery ="Act as a Movie Recommendation system and suggest movies:"+inputRef.current.value+". only give me names of 5 Movies, comma seperated. like the example result given ahead. Example Result : Gadar , Sholay , Don , 3 idiots , Koi mil Gaya"
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    

    const gptMoviesFromSearchBar=gptResult.choices?.[0]?.message?.content.split(",");
    const promiseArray =gptMoviesFromSearchBar.map((movie)=> getMoviesFromTMDB(movie))
    const moviesResult=await Promise.all(promiseArray);
    dispatch(addMoviesFromTMDB({moviesName:gptMoviesFromSearchBar, moviesResult: moviesResult}));
    // setIsLoading(true);
    

    

  }





  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
        <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>


         <input type="text" placeholder={languageConstant[languageKey].gptSearchPlaceholder} className="p-4 m-4 col-span-8 md:col-span-9 rounded-lg placeholder: text-md font-medium" ref={inputRef} />

         <button className=" col-span-4 md:col-span-3 m-6 my-4 px-4 bg-red-700 text-white rounded-lg" onClick={handleInputResult}>{languageConstant[languageKey].search}</button>
        </form>
      
    </div>
  )
}

export default GptSearchBar
