import { Input, Td } from "@chakra-ui/react";
import { memo, FC, useState, ChangeEvent } from "react";

type Props = {
  value: string | number;
};

export const UserEditTableItem: FC<Props> = memo((props) => {
  const { value } = props;
  const [input, setInput] = useState(value);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <Td w="33%" border="1px" borderColor="blackAlpha.200">
      <Input value={input} onChange={onChangeInput} />
    </Td>
  );
});
