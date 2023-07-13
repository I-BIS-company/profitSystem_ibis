import { memo, FC } from "react";
import { ProjectForm } from "../organisms/ProjectForm";
import { HeadLine } from "../atoms/HeadLine";

export const ProjectRegister: FC = memo(() => {
  return (
    <>
      <HeadLine text="案件登録" />
      <ProjectForm />
    </>
  );
});
