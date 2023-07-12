import { Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { memo, FC } from "react";

export const PhoneFormItem: FC = memo(() => {
  return (
    <>
      <FormLabel
        mt="5px"
        fontSize="lg"
        w="15%"
        fontWeight="semibold"
        color="blackAlpha.800"
      >
        電話番号
      </FormLabel>
      <Flex>
        <Input mx="18px" w="70px" />
        <Text fontSize="2xl">-</Text>
        <Input mx="18px" w="100px" />
        <Text fontSize="2xl">-</Text>
        <Input mx="18px" w="100px" />
      </Flex>
    </>
  );
});
