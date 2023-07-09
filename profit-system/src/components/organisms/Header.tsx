import { Flex, Text } from "@chakra-ui/react";
import { memo, FC } from "react";

import { UserName } from "../atoms/UserName";


export const Header: FC = memo(() => {
  return (
    <>
    <Flex
      width="100%"
      height="50px"
      bg="white"
      justifyContent="space-between"
      alignItems="center"
      py={4}
      px={16}
    >
      {/* 左側の要素 */}
      <Text>アイビス株式会社</Text>

      {/* 右側の要素 */}
      <Flex
        w={140}
        justifyContent="space-between"
        alignItems="center"
      >
      <UserName />
      </Flex>
    </Flex>
    </>
  );
});
