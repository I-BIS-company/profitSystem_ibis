import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { MainTemplate } from "../components/templates/MainTemplate";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <LoginUserProvider>
        <Route path="/" element={<Login />} />
        {homeRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<MainTemplate>{route.element}</MainTemplate>}
          />
        ))}
      </LoginUserProvider>
    </Routes>
  );
});
