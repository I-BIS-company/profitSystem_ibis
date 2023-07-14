import { Box, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  text: string;
};

export const ProjectCostItem: FC<Props> = memo((props) => {
  const { text } = props;

  return (
    <Flex
      w="70%"
      ml="40px"
      justifyContent="space-around"
      alignItems="center"
      borderBottom="1px solid"
      borderBottomColor="blackAlpha.400"
    >
      <FormLabel mt="5px" fontSize="lg" w="15%" color="blackAlpha.800">
        {text}
      </FormLabel>
      <Flex alignItems="center">
        <Input w="400px" mr="8px" />
        <Text color="gray.600">円</Text>
      </Flex>
    </Flex>
  );
});
