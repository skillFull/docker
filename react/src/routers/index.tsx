import { createBrowserRouter } from "react-router-dom";

import { Header } from "../components";

import { mainRouter } from "./counter-router";
import { helloRouter } from "./hello-router";
import { secondRouter } from "./second-router";

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      mainRouter,
      helloRouter,
      secondRouter
    ]
  }
]) 