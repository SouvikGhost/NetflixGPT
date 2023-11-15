import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import ClickCardDetails from "./ClickCardDetails"


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
    ])






  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
