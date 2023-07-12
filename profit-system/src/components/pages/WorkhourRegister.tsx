import { memo, FC } from "react";
import { WorkhourRegisterForm } from "../organisms/WorkhourRegisterForm";
import { HeadLine } from "../atoms/HeadLine";

export const WorkhourRegister: FC = memo(() => {
  return (
    <>
      <HeadLine text="工数登録" />
      <WorkhourRegisterForm />
    </>
  );
});
