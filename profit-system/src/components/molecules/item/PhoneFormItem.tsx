import { Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { memo, FC, useState, ChangeEvent } from "react";

type Props = {
  value1?: string;
  value2?: string;
  value3?: string;
};

export const PhoneFormItem: FC<Props> = memo((props) => {
  const { value1, value2, value3 } = props;
  const [input1, setInput1] = useState(value1);
  const [input2, setInput2] = useState(value2);
  const [input3, setInput3] = useState(value3);

  const onChangeInput1 = (e: ChangeEvent<HTMLInputElement>) =>
    setInput1(e.target.value);
  const onChangeInput2 = (e: ChangeEvent<HTMLInputElement>) =>
    setInput2(e.target.value);
  const onChangeInput3 = (e: ChangeEvent<HTMLInputElement>) =>
    setInput3(e.target.value);

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
        電話番号
      </FormLabel>
      <Flex>
        <Input mx="18px" w="70px" value={input1} onChange={onChangeInput1} />
        <Text fontSize="2xl">-</Text>
        <Input mx="18px" w="100px" value={input2} onChange={onChangeInput2} />
        <Text fontSize="2xl">-</Text>
        <Input mx="18px" w="100px" value={input3} onChange={onChangeInput3} />
      </Flex>
    </Flex>
  );
});
