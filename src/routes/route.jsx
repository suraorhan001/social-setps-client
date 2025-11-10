import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import EventCreate from "../Pages/EventCreate";
import ManageEvent from "../Pages/ManageEvent";
import PraivateRoute from "../Provider/PraivateRoute";
import UpComming from "../Pages/UpComming";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
       index:true,
        element: <Home></Home>,
      },
      {
      path:'/upcomming',
        element: <UpComming></UpComming>,
      },

      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/create-event',
        element:<PraivateRoute>
             <EventCreate></EventCreate>
        </PraivateRoute>
      },
      {
        path:'/manage-event',
        element:<PraivateRoute>
          <ManageEvent></ManageEvent>
        </PraivateRoute>
      }

    ],
  },
]);
