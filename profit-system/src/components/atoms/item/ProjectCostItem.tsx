import { Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { memo, FC, ChangeEvent } from "react";

type Props = {
  text: string;
  handleValueChange?: (numberValue: string) => void;
  value?: string | number;
};

export const ProjectCostItem: FC<Props> = memo((props) => {
  const { text, handleValueChange, value } = props;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numberValue = inputValue.replace(/[^0-9.]/g, "");
    handleValueChange?.(numberValue);
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
      <FormLabel mt="5px" fontSize="lg" w="15%" color="blackAlpha.800">
        {text}
      </FormLabel>
      <Flex alignItems="center">
        <Input w="400px" mr="8px" onChange={handleInputChange} value={value} />
        <Text color="gray.600">円</Text>
      </Flex>
    </Flex>
  );
});
