import { Box, Select } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  logMonthList: string[];
};

export const DateSearchSelect: FC<Props> = memo((props) => {
  const { value, onChange, logMonthList } = props;

  return (
    <Box>
      <Select bg="white" outline="none" value={value} onChange={onChange}>
        {logMonthList.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </Select>
    </Box>
  );
});
