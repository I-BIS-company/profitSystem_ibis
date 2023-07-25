import { Box, Select } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  value: string;
  onChange: (selectedMonth: string) => void;
};

export const DateSearchSelect: FC<Props> = memo((props) => {
  const { value, onChange } = props;
  const months = ["2023/06", "2023/07", "2023/08"];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = e.target.value;
    console.log(selectedMonth);
    onChange(selectedMonth);
  };

  return (
    <Box>
      <Select bg="white" outline="none" value={value} onChange={handleChange}>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </Select>
    </Box>
  );
});
