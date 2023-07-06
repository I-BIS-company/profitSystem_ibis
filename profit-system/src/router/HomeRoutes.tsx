import { CompaniesList } from "../components/pages/CompaniesList";
import { CompanyEdit } from "../components/pages/CompanyEdit";
import { CompanyRegister } from "../components/pages/CompanyRegister";
import { Log } from "../components/pages/Log";
import { ProfitsList } from "../components/pages/ProfitsList";
import { ProjectEdit } from "../components/pages/ProjectEdit";
import { ProjectRegister } from "../components/pages/ProjectRegister";
import { ProjectsList } from "../components/pages/ProjectsList";
import { UserEdit } from "../components/pages/UserEdit";
import { UsersList } from "../components/pages/UsersList";
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
  {
    path: "/users_list",
    element: <UsersList />,
  },
  {
    path: "/user_edit",
    element: <UserEdit />,
  },
  {
    path: "/companies_list",
    element: <CompaniesList />,
  },
  {
    path: "/company_register",
    element: <CompanyRegister />,
  },
  {
    path: "/company_edit",
    element: <CompanyEdit />,
  },
  {
    path: "/projects_list",
    element: <ProjectsList />,
  },
  {
    path: "/project_register",
    element: <ProjectRegister />,
  },
  {
    path: "/project_edit",
    element: <ProjectEdit />,
  },
  {
    path: "/profits_list",
    element: <ProfitsList />,
  },
];
