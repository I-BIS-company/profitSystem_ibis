import { memo, FC } from "react";
import { CompanyFormEdit } from "../organisms/CompanyFormEdit";
import { HeadLine } from "../atoms/HeadLine";

export const CompanyEdit: FC = memo(() => {
  return (
    <>
      <HeadLine text="顧客編集" />
      <CompanyFormEdit />
    </>
  );
});
