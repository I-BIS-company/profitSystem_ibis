import { FC, memo } from "react";
import { Sidebar } from "../organisms/Sidebar";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Log: FC = memo(() => {
    return (
      <>
        <Sidebar />
        <p>ログページです</p>;
        <PrimaryButton Text="登録" />
      </>
    );
  });