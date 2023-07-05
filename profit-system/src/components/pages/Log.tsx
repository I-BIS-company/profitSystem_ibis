import { FC, memo } from "react";
import { Sidebar } from "../organisms/sidebar/Sidebar";

export const Log: FC = memo(() => {
  return (
    <>
      <Sidebar />
      <p>ログページです</p>;
    </>
  );
});
