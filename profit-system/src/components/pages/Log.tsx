import { Box, Flex, Heading, Icon, Select, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { CalendarIcon } from "@chakra-ui/icons";

export const Log: FC = memo(() => {
  return (
    <>
      <Box mr="10%" ml="10%" maxW="100%" w="100%" mt="5%">
        <Heading mb="50">ログ</Heading>
        <Flex justifyContent="space-between" w="100%" mb="14">
          <Box>
            <Select bg="white">
              <option>2023/06</option>
              <option>2023/07</option>
              <option>2023/08</option>
            </Select>
          </Box>
          <Box>
            <PrimaryButton Text="工数を登録する" />
          </Box>
        </Flex>

        <Box>
          <Flex alignItems="center">
            <CalendarIcon mr="15" />
            <Text>2023/6/2</Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
});
