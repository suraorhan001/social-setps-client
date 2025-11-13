import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import EventCreate from "../Pages/EventCreate";
import ManageEvent from "../Pages/ManageEvent";
import PraivateRoute from "../Provider/PraivateRoute";
import UpComming from "../Pages/UpComming";
import EventDetails from "../Pages/EventDetails";

import JointEvent from "../Pages/JointEvent";
import UpdateEventForm from "../Pages/UpdateEvent";
import UpdateEvent from "../Pages/UpdateEvent";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/upcomming",
        element: <UpComming></UpComming>,
     
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/create-event",
        element: (
          <PraivateRoute>
            <EventCreate></EventCreate>
          </PraivateRoute>
        ),
      },
      {
        path: "/event-details/:id",
        element: <EventDetails></EventDetails>,
        loader: ({ params }) =>
          fetch(
            `https://social-platform-server-psi.vercel.app/upcoming-social-steps/${params.id}`
          ),
      },
      // {
      //  path:'/event-details/:id',
      //  element:<EventDetails></EventDetails>,

      // },
      {
        path: "/manage-event",
        element: (
          <PraivateRoute>
            <ManageEvent></ManageEvent>
          </PraivateRoute>
        ),
      },
      {
        path: "/joined-event",
        element: (
          <PraivateRoute>
            <JointEvent></JointEvent>
          </PraivateRoute>
        ),
      },
      {
        path: "/update-event/:id",
        element: <UpdateEvent />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://social-platform-server-psi.vercel.app/upcoming-social-steps/${params.id}`
          );
          const data = await res.json();
          return data.result;
        },
      },
    ],
  },
]);
