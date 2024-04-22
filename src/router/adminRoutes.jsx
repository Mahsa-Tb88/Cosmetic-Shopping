import App from "../App";
import WelcomeAdmin from "../components/admin/WelcomeAdmin/WelcomeAdmin";
import AdminLayout from "../layout/AdminLayout";
import AddProduct from "../pages/admin/AddProduct/AddProduct";
import Blogs from "../pages/admin/Blogs/Blogs";
import Categories from "../pages/admin/Categories/Categories";
import Products from "../pages/admin/Products/Products";
import Users from "../pages/admin/Users/Users";

const adminRoutes = [
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <WelcomeAdmin /> },
          { path: "products", element: <Products /> },
          { path: "products/new", element: <AddProduct /> },
          { path: "categories", element: <Categories /> },
          { path: "blogs", element: <Blogs /> },
          { path: "users", element: <Users /> },
        ],
      },
    ],
  },
];
export default adminRoutes;
