import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./Components/LayoutArea/NotFound";
import About from "./Components/About";
import Layout from "./Components/LayoutArea/Layout";
import Article from "./Components/Article";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home/> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}

export default App;
