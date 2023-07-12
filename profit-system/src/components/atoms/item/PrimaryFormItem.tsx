import { Flex, FormLabel, Input } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  text: string;
};

export const PrimaryFormItem: FC<Props> = memo((props) => {
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
        <Input w="400px" />
      </Flex>
    </>
  );
});
