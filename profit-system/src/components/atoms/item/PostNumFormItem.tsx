import { Flex, FormLabel, Input, Text, createIcon } from "@chakra-ui/react";
import { memo, FC } from "react";

const PostIcon = createIcon({
  displayName: "PostIcon",
  viewBox: "0 0 512 512",
  d: "M2.823 0H509.17699999999996V108.506H2.823zM2.823 307.432L201.75 307.432 201.75 512 310.25 512 310.25 307.432 509.177 307.432 509.177 198.927 2.823 198.927z",
});

type Props = {
  placeholder1?: string;
  placeholder2?: string;
};

export const PostNumFormItem: FC<Props> = memo((props) => {
  const { placeholder1, placeholder2 } = props;
  return (
    <>
      <FormLabel mt="5px" fontSize="lg" w="15%">
        郵便番号
      </FormLabel>
      <Flex alignItems="center">
        <PostIcon color="blackAlpha.500" />
        <Input mx="18px" w="150px" placeholder={placeholder1} />
        <Text fontSize="2xl">-</Text>
        <Input mx="18px" w="150px" placeholder={placeholder2} />
      </Flex>
    </>
  );
});
