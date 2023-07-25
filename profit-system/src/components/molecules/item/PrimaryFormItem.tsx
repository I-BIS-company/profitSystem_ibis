import { Flex, FormLabel, Input } from "@chakra-ui/react";
import { memo, FC, ChangeEvent } from "react";

type Props = {
  text: string;
  handleValueChange?: (value: string) => void;
  value?: string;
};

export const PrimaryFormItem: FC<Props> = memo((props) => {
  const { text, handleValueChange, value } = props;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleValueChange?.(value);
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
        {text}
      </FormLabel>
      <Flex>
        <Input w="400px" onChange={handleInputChange} value={value} />
      </Flex>
    </Flex>
  );
});
