import { memo, FC } from "react";
import { CompanyRegisterForm } from "../organisms/form/CompanyRegisterForm";
import { HeadLine } from "../atoms/HeadLine";

export const CompanyRegister: FC = memo(() => {
  return (
    <>
      <HeadLine text="顧客登録" />
      <CompanyRegisterForm />
    </>
  );
});
