import { Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  placeholder1?: string;
  placeholder2?: string;
  placeholder3?: string;
};

export const PhoneFormItem: FC<Props> = memo((props) => {
  const { placeholder1, placeholder2, placeholder3 } = props;
  return (
    <>
      <FormLabel mt="5px" fontSize="lg" w="15%">
        電話番号
      </FormLabel>
      <Flex>
        <Input mx="18px" w="70px" placeholder={placeholder1} />
        <Text fontSize="2xl">-</Text>
        <Input mx="18px" w="100px" placeholder={placeholder2} />
        <Text fontSize="2xl">-</Text>
        <Input mx="18px" w="100px" placeholder={placeholder3} />
      </Flex>
    </>
  );
});
