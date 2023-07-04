import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Log } from "../components/pages/Log";


export const Router: FC = memo(() => {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/log" element={<Log />} />
        </Routes>
    );
});