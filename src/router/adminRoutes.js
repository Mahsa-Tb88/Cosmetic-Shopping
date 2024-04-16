import WelcomeAdmin from "../components/admin/WelcomeAdmin/WelcomeAdmin";
import AdminLayout from "../layout/AdminLayout";

const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [{ index: true, element: <WelcomeAdmin /> }],
  },
];
export default adminRoutes;
