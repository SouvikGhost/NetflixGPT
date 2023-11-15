import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice";
import { NETFILX_LOGO, SUPPORTED_LANGUAGE } from "../utils/constant"
import { clearResult, toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/languageSlice";
import { FaSearch } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";




const Header = () => {
  const [menuCard,setMenuCard]=useState(false)
  const dispatch =useDispatch()

  const user =useSelector(store=>store.user);
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
  
  const navigate =useNavigate()


  const handleGptSearch=()=>{
    // toggle gpt seacrh
    dispatch(toggleGptSearchView())
    dispatch(clearResult())
  }
  const handleShowMenuCard=()=>{
    setMenuCard(!menuCard)
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
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img className="w-52 mx-auto md:mx-0" src={NETFILX_LOGO}
      alt="Netflix Logo" />
      


      {user && <div className="flex justify-between ">
        {showGptSearch &&<select className="my-6 rounded-lg p-1 font-medium outline-none cursor-pointer" onChange={handleLanguageChange}>

        {SUPPORTED_LANGUAGE.map((language)=> <option key={language.identifier} value={language.identifier} >{language.name}</option> )}
        </select>}
        <button className="bg-blue-700 text-white my-6 px-3 mx-6 rounded-lg" onClick={handleGptSearch}>{showGptSearch ? "Go to Home":<FaSearch />
}</button>
        <img className="hidden md:block w-10 h-10 mt-6" src={user?.photoURL} alt="" />
        <button className="cursor-pointer" onClick={handleShowMenuCard}>
        <RxDropdownMenu className="text-white text-3xl  ml-3 mr-9 "/>
        </button>

       {menuCard && <div className="bg-black text-white rounded-lg text-md bg-opacity-70 font-medium absolute top-[77px] right-5">
          <ul className="m-2">
            <li className="border-b-2 border-white mx-3 my-1 pb-1 text-center  cursor-pointer hover:text-blue-600">Home</li>
            <li className="border-b-2 mx-3 my-1 pb-1 text-center cursor-pointer hover:text-blue-600">
              <Link to="/account">Account</Link></li>
            <li className="mx-3 my-1 pb-1 text-center cursor-pointer hover:text-blue-600 "><button  onClick={handleSignOut}>Signout</button></li>
          </ul>
        </div>}
      </div>}
    </div>
    
    
  )
}

export default Header
