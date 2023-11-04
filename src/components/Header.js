import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user =useSelector(store=>store.user)
  
  // console.log(user);
  const navigate =useNavigate()
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
    
  }
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-52" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
      " alt="Netflix Logo" />
      {user && <div className="flex">
        {/* SignOut icon from netflix --- i need that to include */}
        <img className="w-12 h-12 mt-5 rounded-2xl" src={user?.photoURL} alt="" />
        <button className="bg-red-500 p-2 m-6 rounded-md text-white font-semibold" onClick={handleSignOut}>Sign out</button>
      </div>}
    </div>
    
    
  )
}

export default Header
