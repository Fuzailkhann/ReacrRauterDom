import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root";
import Error from "./Error";
import Project from "./project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,

    children: [
      {
        path: "/aboutus",
        element: <h1>Hi Fuzail , i am React developer</h1>
      },
      {
        path: "/contactMe",
        element: <h2> My email is fuzailkhanbt@gmail.com</h2>
      },
      {
        path: "/test",
        element: <h2> this will open in new tab</h2>
      },
      {
        path: "/project",
        element: <Project />
      }
    ]
  }
]);
export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
