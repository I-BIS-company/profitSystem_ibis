import { Box, Select } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const DateSearchSelect: FC<Props> = memo((props) => {
  const { value, onChange } = props;
  const months = ["2023/06", "2023/07", "2023/08"];

  return (
    <Box>
      <Select bg="white" outline="none" value={value} onChange={onChange}>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </Select>
    </Box>
  );
});
