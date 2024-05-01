import type { RouteObject } from "react-router-dom";
import { Counter } from "../pages";

export const mainRouter: RouteObject = {
  path: '/counter',
  element: <Counter />
}