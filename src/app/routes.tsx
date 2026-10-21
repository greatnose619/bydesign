import { createHashRouter } from "react-router"
import { HomePage } from "../App"
import ProjectPage from "../ProjectPage"

export const router = createHashRouter([
  { path: "/", Component: HomePage },
  { path: "/work/brandify", Component: ProjectPage },
])
