import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(routes);

root.render(<RouterProvider router={router} />);
