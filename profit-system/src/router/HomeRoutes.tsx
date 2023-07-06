import { Log } from "../components/pages/Log";
import { WorkhourEdit } from "../components/pages/WorkhourEdit";
import { WorkhourRegister } from "../components/pages/WorkhourRegister";

export const homeRoutes = [
  {
    path: "/log",
    element: <Log />,
  },
  {
    path: "/workhour_register",
    element: <WorkhourRegister />,
  },
  {
    path: "/workhour_edit",
    element: <WorkhourEdit />,
  },
];
