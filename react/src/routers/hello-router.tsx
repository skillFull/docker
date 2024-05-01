import type { RouteObject } from "react-router-dom";
import { Hello } from "../pages";

export const helloRouter: RouteObject = {
  path: '/hello',
  element: <Hello />
}