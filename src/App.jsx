import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from "../src/Components/Layout/Layout"
import Home from "../src/Pages/Home/Home"
import About from "../src/Pages/About/About"
import Portfolio from "../src/Pages/Portfolio/Portfolio"
import Contact from "../src/Pages/Contact/Contact"
import NotFound from "../src/Pages/NotFound/NotFound"

let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  export default function App() {
    return <RouterProvider router={routes} />;
  }
  




