import { FC, memo } from "react";
import { Sidebar } from "../organisms/Sidebar";

export const Log: FC = memo(() => {
  return (
    <>
      <Sidebar />
      <p>ログページです</p>;
    </>
  );
});
