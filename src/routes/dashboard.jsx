import Dashboard from "views/Dashboard/Dashboard.jsx";
import Buttons from "views/Components/Buttons.jsx";
import GridSystem from "views/Components/GridSystem.jsx";
import Panels from "views/Components/Panels.jsx";
import SweetAlert from "views/Components/SweetAlertPage.jsx";
import Notifications from "views/Components/Notifications.jsx";
import Icons from "views/Components/Icons.jsx";
import Typography from "views/Components/Typography.jsx";
import RegularForms from "views/Forms/RegularForms.jsx";
import ExtendedForms from "views/Forms/ExtendedForms.jsx";
import ValidationForms from "views/Forms/ValidationForms.jsx";
import Wizard from "views/Forms/Wizard/Wizard.jsx";
import RegularTables from "views/Tables/RegularTables.jsx";
import ExtendedTables from "views/Tables/ExtendedTables.jsx";
import ReactTables from "views/Tables/ReactTables.jsx";
import GoogleMaps from "views/Maps/GoogleMaps.jsx";
import FullScreenMap from "views/Maps/FullScreenMap.jsx";
import VectorMap from "views/Maps/VectorMap.jsx";
import Charts from "views/Charts/Charts.jsx";
import Calendar from "views/Calendar/Calendar.jsx";
import UserPage from "views/Pages/UserPage.jsx";
import pagesRoutes from "./pages.jsx";
import Driver from "containers/Driver/Driver.jsx"
import DriverDetail from "containers/DriverDetail/DriverDetail.jsx"
import Map from "containers/Map/Map.jsx"
import RouteandTime from "containers/RouteandTime/RouteandTime.jsx"
import FormInputPage from "containers/FormInputPage/FormInputPage.jsx"
import ReportDriver from "containers/ReportDriver/ReportDriver.jsx"
import BusMap from "containers/BusMap/BusMap.jsx"

var pages = [
  { path: "/admin/pages/user-page", name: "User Page", mini: "UP", component: UserPage }
].concat(pagesRoutes);

var dashboardRoutes = [
  {
    path: "/admin/driver",
    collapse: true,
    name: "Driver",
    icon: "pe-7s-car",
    views: [
      {
        path: "/admin/driver/info",
        name: "Driver & Car",
        mini: "DC",
        component: Driver
      },
      {
        path: "/admin/driver/driverdetail",
        name: "Driver Detail",
        mini: "DD",
        component: DriverDetail
      },
      {
        path: "/admin/driver/report",
        name: "Report",
        mini: "R",
        component: ReportDriver
      },
      {
        path: "/admin/driver/busmap",
        name: "Bus",
        mini: "B",
        component: BusMap
      }
    ]
  },
  {
    path: "/admin/map",
    exact: true,
    name: "maps",
    icon: "pe-7s-map-marker",
    component: Map
  },
  {
    path: "/admin/routeandtimetable",
    exact: true,
    name: "Route & Timetable",
    icon: "pe-7s-stopwatch",
    component: RouteandTime
  },
  {
    path: "/admin/forminput",
    exact: true,
    name: "Form Input",
    icon: "pe-7s-server",
    component: FormInputPage
  },
  {
    path: "/admin/dashboard",
    exact: true,
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    collapse: true,
    path: "/admin/components",
    name: "Components",
    state: "openComponents",
    icon: "pe-7s-plugin",
    views: [
      {
        path: "/admin/components/buttons",
        name: "Buttons",
        mini: "B",
        component: Buttons
      },
      {
        path: "/admin/components/grid-system",
        name: "Grid System",
        mini: "GS",
        component: GridSystem
      },
      {
        path: "/admin/components/panels",
        name: "Panels",
        mini: "P",
        component: Panels
      },
      {
        path: "/admin/components/sweet-alert",
        name: "Sweet Alert",
        mini: "SA",
        component: SweetAlert
      },
      {
        path: "/admin/components/notifications",
        name: "Notifications",
        mini: "N",
        component: Notifications
      },
      { path: "/admin/components/icons", name: "Icons", mini: "I", component: Icons },
      {
        path: "/admin/components/typography",
        name: "Typography",
        mini: "T",
        component: Typography
      }
    ]
  },
  {
    collapse: true,
    path: "/admin/forms",
    name: "Forms",
    state: "openForms",
    icon: "pe-7s-note2",
    views: [
      {
        path: "/admin/forms/regular-forms",
        name: "Regular Forms",
        mini: "RF",
        component: RegularForms
      },
      {
        path: "/admin/forms/extended-forms",
        name: "Extended Forms",
        mini: "EF",
        component: ExtendedForms
      },
      {
        path: "/admin/forms/validation-forms",
        name: "Validation Forms",
        mini: "VF",
        component: ValidationForms
      },
      { path: "/admin/forms/wizard", name: "Wizard", mini: "W", component: Wizard }
    ]
  },
  {
    collapse: true,
    exact: true,
    path: "/admin/tables",
    name: "Tables",
    state: "openTables",
    icon: "pe-7s-news-paper",
    views: [
      {
        path: "/admin/tables/regular-tables",
        name: "Regular Tables",
        mini: "RT",
        component: RegularTables
      },
      {
        path: "/admin/tables/extended-tables",
        name: "Extended Tables",
        mini: "ET",
        component: ExtendedTables
      },
      {
        path: "/admin/tables/react-table",
        name: "React Table",
        mini: "RT",
        component: ReactTables
      }
    ]
  },
  {
    collapse: true,
    path: "/admin/maps",
    name: "Maps",
    state: "openMaps",
    icon: "pe-7s-map-marker",
    views: [
      {
        path: "/admin/maps/google-maps",
        name: "Google Maps",
        mini: "GM",
        component: GoogleMaps
      },
      {
        path: "/admin/maps/full-screen-maps",
        name: "Full Screen Map",
        mini: "FSM",
        component: FullScreenMap
      },
      {
        path: "/admin/maps/vector-maps",
        name: "Vector Map",
        mini: "VM",
        component: VectorMap
      }
    ]
  },
  { path: "/admin/charts", name: "Charts", icon: "pe-7s-graph1", component: Charts },
  {
    path: "/admin/calendar",
    name: "Calendar",
    icon: "pe-7s-date",
    component: Calendar
  },
  {
    collapse: true,
    path: "/admin/pages",
    name: "Pages",
    state: "openPages",
    icon: "pe-7s-gift",
    views: pages
  },
  // { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashboardRoutes;
