import { Box, Heading } from "@chakra-ui/react";
import { memo, FC } from "react";
import { WorkhourRegisterForm } from "../organisms/WorkhourRegisterForm";

export const WorkhourRegister: FC = memo(() => {
  return (
    <>
      <Box borderLeft="6px solid blue" borderColor="blue.500" pl="4">
        <Heading mb="50">工数登録</Heading>
      </Box>
      <WorkhourRegisterForm />
    </>
  );
});
