import ReactDOM from "react-dom/client";
import { RouterProvider, createStaticRouter } from "@react-router/dev";
import routes from "./router";
import ErrorPage from "./routes/error-page";

const router = createStaticRouter(routes, {
  fallbackElement: <ErrorPage />,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
