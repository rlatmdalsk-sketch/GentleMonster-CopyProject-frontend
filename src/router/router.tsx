import {createBrowserRouter} from "react-router";
import Layout from "../layouts/layout.tsx";
import Home from "../pages/Home.tsx";
import ViewAll from "../pages/Category/sunglasses/viewAll.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Home />}, /*메인홈*/
            { path: "login", element: <login />},
            {path: "/category/sunglasses/view-all", element:<ViewAll />}
        ]
    }
])

export default router;