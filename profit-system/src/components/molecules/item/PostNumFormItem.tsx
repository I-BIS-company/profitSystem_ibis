import { Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { createIcon } from "@chakra-ui/react";
import { memo, FC, ChangeEvent } from "react";

type Props = {
  handleValueChange1?: (value: string) => void;
  handleValueChange2?: (value: string) => void;
};

const PostIcon = createIcon({
  displayName: "PostIcon",
  viewBox: "0 0 512 512",
  d: "M2.823 0H509.17699999999996V108.506H2.823zM2.823 307.432L201.75 307.432 201.75 512 310.25 512 310.25 307.432 509.177 307.432 509.177 198.927 2.823 198.927z",
});

export const PostNumFormItem: FC<Props> = memo((props) => {
  const { handleValueChange1, handleValueChange2 } = props;

  const handlePostChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    const value1 = e.target.value;
    handleValueChange1?.(value1);
  };
  const handlePostChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    const value2 = e.target.value;
    handleValueChange2?.(value2);
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
        郵便番号
      </FormLabel>
      <Flex alignItems="center">
        <PostIcon color="blackAlpha.500" />
        <Input mx="18px" w="150px" onChange={handlePostChange1} />
        <Text fontSize="2xl">-</Text>
        <Input mx="18px" w="150px" onChange={handlePostChange2} />
      </Flex>
    </Flex>
  );
});
