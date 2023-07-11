import { Flex, FormLabel, Input } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  text: string;
  placeholder?: string;
};

export const PrimaryFormItem: FC<Props> = memo((props) => {
  const { text, placeholder } = props;

  return (
    <>
      <FormLabel mt="5px" fontSize="lg" w="15%">
        {text}
      </FormLabel>
      <Flex>
        <Input w="400px" placeholder={placeholder} />
      </Flex>
    </>
  );
});
