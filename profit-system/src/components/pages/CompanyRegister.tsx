import { memo, FC } from "react";
import { CompanyForm } from "../organisms/CompanyForm";
import { HeadLine } from "../atoms/HeadLine";

export const CompanyRegister: FC = memo(() => {
  return (
    <>
      <HeadLine text="顧客登録" />
      <CompanyForm />
    </>
  );
});
