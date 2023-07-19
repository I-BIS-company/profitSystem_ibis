import { Flex, FormLabel, Input } from "@chakra-ui/react";
import { memo, FC, ChangeEvent } from "react";

type Props = {
  text: string;
  handleValueChange?: (value: string) => void;
};

export const PrimaryFormItem: FC<Props> = memo((props) => {
  const { text, handleValueChange } = props;
  // const [input, setInput] = useState(value);

  // const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  // };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
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
        <Input w="400px" onChange={handleInputChange} />
      </Flex>
    </Flex>
  );
});
