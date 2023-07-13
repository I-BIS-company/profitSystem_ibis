import { Box, Flex, FormLabel, Input } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  text: string;
};

export const ProjectCostItem: FC<Props> = memo((props) => {
  const { text } = props;

  return (
    <>
      <FormLabel
        mt="5px"
        fontSize="lg"
        w="15%"
        fontWeight="semibold"
        color="blackAlpha.800"
      >
        {text}
      </FormLabel>
      <Flex>
        <Input w="400px" position="relative" />
        <Box
          position="absolute"
          top="50%"
          right="49%"
          color="gray.500"
          transform="translateY(-50%)"
        >
          円
        </Box>
      </Flex>
    </>
  );
});
