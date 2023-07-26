import { Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { memo, FC, ChangeEvent } from "react";

type Props = {
  handleValueChange1?: (value: string) => void;
  handleValueChange2?: (value: string) => void;
  handleValueChange3?: (value: string) => void;
  value1?: string;
  value2?: string;
  value3?: string;
};

export const PhoneFormItem: FC<Props> = memo((props) => {
  const {
    handleValueChange1,
    handleValueChange2,
    handleValueChange3,
    value1,
    value2,
    value3,
  } = props;

  const handlePhoneChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    const value1 = e.target.value;
    handleValueChange1?.(value1);
  };
  const handlePhoneChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    const value2 = e.target.value;
    handleValueChange2?.(value2);
  };
  const handlePhoneChange3 = (e: ChangeEvent<HTMLInputElement>) => {
    const value3 = e.target.value;
    handleValueChange3?.(value3);
  };

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
        <Input
          mx="18px"
          w="70px"
          onChange={handlePhoneChange1}
          value={value1}
        />
        <Text fontSize="2xl">-</Text>
        <Input
          mx="18px"
          w="100px"
          onChange={handlePhoneChange2}
          value={value2}
        />
        <Text fontSize="2xl">-</Text>
        <Input
          mx="18px"
          w="100px"
          onChange={handlePhoneChange3}
          value={value3}
        />
      </Flex>
    </Flex>
  );
});
