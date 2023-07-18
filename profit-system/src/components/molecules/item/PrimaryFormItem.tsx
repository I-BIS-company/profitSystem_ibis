import { Flex, FormLabel, Input } from "@chakra-ui/react";
import { memo, FC, useState, ChangeEvent } from "react";

type Props = {
  text: string;
  value?: string;
};

export const PrimaryFormItem: FC<Props> = memo((props) => {
  const { text, value } = props;
  const [input, setInput] = useState(value);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <Flex
      w="70%"
      ml="40px"
      justifyContent="space-around"
      alignItems="center"
      borderBottom="1px solid"
      borderBottomColor="blackAlpha.400"
    >
      <FormLabel mt="5px" fontSize="lg" w="15%">
        {text}
      </FormLabel>
      <Flex>
        <Input w="400px" value={input} onChange={onChangeInput} />
      </Flex>
    </Flex>
  );
});
