import { Flex, FormLabel, Input } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  text: string;
};

export const PrimaryFormItem: FC<Props> = memo((props) => {
  const { text } = props;

  return (
    <Flex
      minW="70%"
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
        <Input w="400px" />
      </Flex>
    </Flex>
  );
});
