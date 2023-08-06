import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/login"
import Main from "../pages/Main"

const baseRouter = createBrowserRouter([{
    path:'',
    element: <Home />
},{
    path:'login',
    element:<Login/>
},{
    path:'main',
    element:<Main/>
}])

export default baseRouter