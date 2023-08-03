import { Input, Td } from "@chakra-ui/react";
import { memo, FC, ChangeEvent } from "react";

type Props = {
  value: string | number;
  handleValueChange?: (value: string) => void;
  onlyNumber?: boolean;
};

export const UserEditTableItem: FC<Props> = memo((props) => {
  const { value, handleValueChange, onlyNumber = false } = props;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onlyNumber) {
      const value = e.target.value;
      const numberValue = value.replace(/[^0-9.]/g, "");
      handleValueChange?.(numberValue);
    } else {
      const value = e.target.value;
      handleValueChange?.(value);
    }
  };

  return (
    <Td w="33%" border="1px" borderColor="blackAlpha.200">
      <Input value={value} onChange={handleInputChange} />
    </Td>
  );
});
