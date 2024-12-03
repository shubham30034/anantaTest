import { createBrowserRouter } from "react-router-dom";
import SingUp from "./pages/SingUp";
import AllUser from "./pages/AllUser";


const router = createBrowserRouter([
    {
    path:"/",
    element: <SingUp/>
    },
    {
    path:"/about",
    element: <AllUser/>
    }
])


export default router