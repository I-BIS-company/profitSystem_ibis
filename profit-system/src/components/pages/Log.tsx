import { FC, memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { MainTemplate } from "../templates/MainTemplate";


export const Log: FC = memo(() => {

  return (
    <>
      <p>ログページです</p>;
      <PrimaryButton Text="登録" />
    </>
  );
});

