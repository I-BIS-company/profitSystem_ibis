import { memo, FC } from "react";
import { CompanyEditForm } from "../organisms/form/CompanyEditForm";
import { HeadLine } from "../atoms/HeadLine";

export const CompanyEdit: FC = memo(() => {
  return (
    <>
      <HeadLine text="顧客編集" />
      <CompanyEditForm />
    </>
  );
});
