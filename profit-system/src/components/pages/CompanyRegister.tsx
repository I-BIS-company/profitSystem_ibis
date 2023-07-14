import { Box, Heading } from "@chakra-ui/layout";
import { memo, FC } from "react";
import { CompanyForm } from "../organisms/form/CompanyRegisterForm";

export const CompanyRegister: FC = memo(() => {
  return (
    <>
      <Box borderLeft="6px solid blue" borderColor="blue.500" pl="4">
        <Heading mb="50">顧客登録</Heading>
      </Box>
      <CompanyForm />
    </>
  );
});
