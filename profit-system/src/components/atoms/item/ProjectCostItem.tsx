import { Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { memo, FC, ChangeEvent } from "react";

type Props = {
  text: string;
  handleValueChange?: (value: number) => void;
  value?: string;
};

export const ProjectCostItem: FC<Props> = memo((props) => {
  const { text, handleValueChange, value } = props;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
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
      <FormLabel mt="5px" fontSize="lg" w="15%" color="blackAlpha.800">
        {text}
      </FormLabel>
      <Flex alignItems="center">
        <Input
          w="400px"
          mr="8px"
          onChange={handleInputChange}
          value={value}
          type="number"
        />
        <Text color="gray.600">円</Text>
      </Flex>
    </Flex>
  );
});
