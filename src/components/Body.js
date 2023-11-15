import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import ClickCardDetails from "./ClickCardDetails"
import AccountInfo from "./AccountInfo"


const Body = () => {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/:id",
            element:<ClickCardDetails/>
        },
        {
            path:"/account",
            element:<AccountInfo/>
        },
    ])






  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
