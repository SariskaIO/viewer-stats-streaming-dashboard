
import Dashboard from "views/Dashboard.js";
import StreamView from "views/StreamView";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/stream",
    name: "Stream View",
    icon: "tim-icons icon-puzzle-10",
    component: <StreamView />,
    layout: "/admin",
  },
  {
    path: "/stream/:streamId",
    name: "Stream View",
    icon: "tim-icons icon-puzzle-10",
    component: <StreamView />,
    layout: "/admin",
  }
];
export default routes;
