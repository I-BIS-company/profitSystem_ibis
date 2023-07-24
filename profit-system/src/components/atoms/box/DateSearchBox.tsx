import { Box, Select } from "@chakra-ui/react";
import { FC, useState } from "react";

export const DateSearchSelect: FC = () => {
  const months = ["2023/06", "2023/07", "2023/08"];
  const [selectMonth, setSelectMonth] = useState(months[0]);

  const handleChange = (e: any) => {
    setSelectMonth(e.target.value);
  };
  return (
    <Box>
      <Select
        bg="white"
        outline="none"
        value={selectMonth}
        onChange={handleChange}
      >
        {months.map((month) => (
          <option key={month}>{month}</option>
        ))}
      </Select>
    </Box>
  );
};
