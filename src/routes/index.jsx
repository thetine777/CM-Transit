import Pages from "MainLayouts/Pages/Pages.jsx";
import Dashboard from "MainLayouts/Dashboard/Dashboard.jsx";

var indexRoutes = [
  { path: "/", exact: true, name: "Pages", component: Pages },
  { path: "/pages", name: "Pages", component: Pages },
  { path: "/admin", name: "Home", component: Dashboard }
]

export default indexRoutes;
