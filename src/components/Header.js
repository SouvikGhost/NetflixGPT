import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice";
import { NETFILX_LOGO, SUPPORTED_LANGUAGE } from "../utils/constant"
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/languageSlice";

const Header = () => {
  const dispatch =useDispatch()

  const user =useSelector(store=>store.user)
  
  const navigate =useNavigate()


  const handleGptSearch=()=>{
    // toggle gpt seacrh
    dispatch(toggleGptSearchView())
  }


  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
    
  }
  const handleLanguageChange=(e)=>{
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))

  }
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {

        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse");


      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/");

      }
      // unsubscribe our store when it not needed or when this component is unmounted
      return ()=>unsubscribe();
    });
  },[])
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-52" src={NETFILX_LOGO}
      alt="Netflix Logo" />
      {user && <div className="flex ">
        <select className="my-6 rounded-lg p-1 font-medium outline-none cursor-pointer" onChange={handleLanguageChange}>

        {SUPPORTED_LANGUAGE.map((language)=> <option key={language.identifier} value={language.identifier} >{language.name}</option> )}
        </select>
        <button className="bg-blue-700 text-white my-6 px-3 mx-6 rounded-lg" onClick={handleGptSearch}>GPT Search</button>
        <img className="w-10 h-10 mt-6" src={user?.photoURL} alt="" />
        <button className="bg-red-600 p-2 m-6 rounded-md text-white font-semibold" onClick={handleSignOut}>Sign out</button>
      </div>}
    </div>
    
    
  )
}

export default Header
