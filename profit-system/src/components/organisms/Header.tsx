import { Box, CheckboxIcon, Flex } from "@chakra-ui/react";
import { memo, FC } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { UserIcon } from "../atoms/item/usericon";


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
      <div>アイビス株式会社</div>

      {/* 右側の要素 */}
      <UserIcon />
      <Box>
      <ChevronDownIcon />
      </Box>
    </Flex>
    </>
  );
});
