import { Box, Select } from "@chakra-ui/react";
import { FC } from "react";

export const DateSearchSelect: FC = () => {
  const months = ["2023/06", "2023/07", "2023/08"];
  return (
    <Box>
      <Select bg="white" outline="none">
        {months.map((month) => (
          <option>{month}</option>
        ))}
      </Select>
    </Box>
  );
};
