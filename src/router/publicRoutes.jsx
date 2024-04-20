import App from "../App";
import Dashboard from "../components/share/Dashboard/Dashboard";
import Profile from "../components/share/Profile/Profile";
import PublicLayout from "../layout/PublicLayout";
import AboutUs from "../pages/share/AboutUs/AboutUs";
import Blogs from "../pages/share/Blogs/Blogs";
import ContactUs from "../pages/share/ContactUs/ContactUs";
import Home from "../pages/share/Home/Home";
import Login from "../pages/share/Login/Login";
import Panel from "../pages/share/Panel/Panel";
import ProductsShop from "../pages/share/ProductsShop/ProductsShop";
import Register from "../pages/share/Register/Register";

const publicRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PublicLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "products", element: <ProductsShop /> },
          { path: "about", element: <AboutUs /> },
          { path: "contact", element: <ContactUs /> },
          { path: "blogs", element: <Blogs /> },
          { path: "login", element: <Login /> },
          {
            path: "panel",
            element: <Panel />,
            children: [
              { index: true, element: <Dashboard /> },
              { path: "profile", element: <Profile /> },
            ],
          },
          { path: "register", element: <Register /> },
        ],
      },
    ],
  },
];

export default publicRoutes;
