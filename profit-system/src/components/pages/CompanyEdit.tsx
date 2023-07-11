import { memo, FC } from "react";
import { CompanyFormEdit } from "../organisms/CompanyFormEdit";
import { Box, Heading } from "@chakra-ui/react";

export const CompanyEdit: FC = memo(() => {
  return (
    <>
      <Box borderLeft="6px solid blue" borderColor="blue.500" pl="4">
        <Heading mb="50">顧客編集</Heading>
      </Box>
      <CompanyFormEdit />
    </>
  );
});
