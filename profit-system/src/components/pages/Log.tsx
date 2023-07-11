import { FC, memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Log: FC = memo(() => {
  return (
    <>
      <p>ログページです</p>;
      <PrimaryButton text="登録" size="lg" />
    </>
  );
});
