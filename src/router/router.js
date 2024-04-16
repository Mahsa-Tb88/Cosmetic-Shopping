import { createBrowserRouter } from "react-router-dom";
import adminRoutes from "./adminRoutes";
import publicRoutes from "./publicRoutes";

const router = createBrowserRouter([...adminRoutes, ...publicRoutes]);

export default router;
