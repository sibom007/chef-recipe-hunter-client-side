
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../Page/Home/Home';
import Main from "../layout/Main";
import Login from "../Page/Login/Login";
import Registration from "../Page/Registration/Registration";
import ErrorPage from "../Errorpage/Error";
import Recipedetela from "../Page/Recapidetels/Recipedetela";
import Privatroutes from "./Privatroutes";
import Blog from "../Page/Blog/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/Registration",
        element: <Registration />
      },
      {
        path: "/Blog",
        element: <Blog></Blog>
      },
      {
        path:':id',
        element: (<Privatroutes>
          <Recipedetela></Recipedetela>
        </Privatroutes>),
        loader:({params}) => fetch(`https://server-for-assiment-10-sibom007.vercel.app/chef/${params.id}`)

      }

    ]
  },
]);
export default router;
