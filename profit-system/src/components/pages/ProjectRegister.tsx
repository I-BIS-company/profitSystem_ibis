import { memo, FC } from "react";
import { ProjectRegisterForm } from "../organisms/form/ProjectRegisterForm";
import { HeadLine } from "../atoms/HeadLine";

export const ProjectRegister: FC = memo(() => {
  return (
    <>
      <HeadLine text="案件登録" />
      <ProjectRegisterForm />
    </>
  );
});
