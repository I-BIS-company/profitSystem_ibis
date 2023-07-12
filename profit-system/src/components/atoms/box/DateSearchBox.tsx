import { Box, Select } from "@chakra-ui/react";
import { FC } from "react";

export const DateSearchSelect: FC = () => {
  return (
    <Box>
      <Select bg="white" outline="none">
        <option>2023/06</option>
        <option>2023/07</option>
        <option>2023/08</option>
      </Select>
    </Box>
  );
};
