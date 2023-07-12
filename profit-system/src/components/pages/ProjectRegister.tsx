import { Box, Heading } from "@chakra-ui/layout";
import { memo, FC } from "react";
import { ProjectForm } from "../organisms/ProjectForm";
// import { CompanyForm } from "../organisms/CompanyForm";

export const ProjectRegister: FC = memo(() => {
  return (
    <>
      <Box borderLeft="6px solid blue" borderColor="blue.500" pl="4">
        <Heading mb="50">案件登録</Heading>
      </Box>
      <ProjectForm />
    </>
  );
});
