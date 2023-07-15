import { memo, FC } from "react";
import { WorkhourEditForm } from "../organisms/form/WorkhourEditForm";
import { HeadLine } from "../atoms/HeadLine";

export const WorkhourEdit: FC = memo(() => {
  return (
    <>
      <HeadLine text="工数編集" />
      <WorkhourEditForm />
    </>
  );
});
