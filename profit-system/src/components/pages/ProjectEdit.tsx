import { memo, FC } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { ProjectEditForm } from "../organisms/form/ProjectEditForm";

export const ProjectEdit: FC = memo(() => {
  return (
    <>
      <HeadLine text="案件編集" />
      <ProjectEditForm />
    </>
  );
});
