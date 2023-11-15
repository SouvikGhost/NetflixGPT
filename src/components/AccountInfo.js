import { useSelector } from "react-redux"

const AccountInfo = () => {
    const accountInfo=useSelector(store=>store.user);
    const {displayName,email,photoURL}=accountInfo
    // console.log(accountInfo);
  return (
    <div className="bg-black h-screen text-white ">
        <div className="w-3/4 mx-auto text-center">
      <h1 className="text-4xl pt-10">Account Information</h1>
      <div className="flex w-3/4 mx-auto justify-around pt-28 items-center">
            <span className="text-xl">Your Profile Picture:</span>
            <div>
            <img src={photoURL} alt="ProfilePicture" className="w-20 inline-block"/>
            <button className="ml-9 bg-white text-black p-2 m-1 rounded-md font-medium hover:bg-blue-400">Change Picture</button>
            </div>
      </div>
      <div className="border-b-[1px] border-dashed pt-5"></div>
      <div className="flex w-3/4 mx-auto justify-around pt-16 items-center">
            <span className="text-xl">Your Username:</span>
            <div>
            <h1 className="inline-block text-xl">{displayName}</h1>
            <button className="ml-9 bg-white text-black p-2 m-1 rounded-md font-medium hover:bg-blue-400">Change Username</button>
            </div>
      </div>
      <div className="border-b-[1px] border-dashed pt-5"></div>

      <div className="flex w-3/4 mx-auto justify-around pt-16 items-center">
            <span className="text-xl">Your Emailid:</span>
            <div>
            <h1 className="inline-block text-xl">{email}</h1>
            <button className="ml-9 bg-white text-black p-2 m-1 rounded-md font-medium hover:bg-blue-400">Change Email</button>
            </div>
      </div>
      <div className="border-b-[1px] border-dashed pt-5 mb-6"></div>
        <button className="bg-white text-black p-2 m-1 rounded-md font-medium hover:bg-blue-400 items-center">Change Password</button>
 

        </div>
          </div>
  )
}

export default AccountInfo
