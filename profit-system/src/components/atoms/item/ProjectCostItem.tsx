import { Box, Flex, FormLabel, Input } from "@chakra-ui/react";
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
      <Flex>
        <Input w="400px" position="relative" />
        <Box
          position="absolute"
          top="50%"
          right="35%"
          color="gray.500"
          transform="translateY(-50%)"
        >
          円
        </Box>
      </Flex>
    </Flex>
  );
});
