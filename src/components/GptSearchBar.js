import { useSelector } from "react-redux"
import languageConstant from "../utils/languageConstant"

const GptSearchBar = () => {
  const languageKey=useSelector(store=>store.language.lang)
  return (
    <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12">
         <input type="text" placeholder={languageConstant[languageKey].gptSearchPlaceholder} className="p-4 m-4 col-span-9 rounded-lg placeholder: text-md font-medium"/>
         <button className="col-span-3 m-6 my-4 px-4 bg-red-700 text-white rounded-lg">{languageConstant[languageKey].search}</button>
        </form>
      
    </div>
  )
}

export default GptSearchBar
