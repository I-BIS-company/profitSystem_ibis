import { Flex, FormLabel, Icon, Input, Text } from "@chakra-ui/react";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, FC } from "react";

export const PostNumFormItem: FC = memo(() => {
  return (
    <>
      <FormLabel mt="5px" fontSize="lg" w="15%">
        郵便番号
      </FormLabel>
      <Flex alignItems="center">
        <Icon as={FontAwesomeIcon} icon={faSquareEnvelope} boxSize={6} />
        <Input mx="18px" w="150px" />
        <Text fontSize="2xl">-</Text>
        <Input mx="18px" w="150px" />
      </Flex>
    </>
  );
});
