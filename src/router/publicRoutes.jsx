import App from "../App";
import PublicLayout from "../layout/PublicLayout";
import AboutUs from "../pages/share/AboutUs/AboutUs";
import Blogs from "../pages/share/Blogs/Blogs";
import ContactUs from "../pages/share/ContactUs/ContactUs";
import Home from "../pages/share/Home/Home";
import ProductsShop from "../pages/share/ProductsShop/ProductsShop";

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
        ],
      },
    ],
  },
];

export default publicRoutes;
