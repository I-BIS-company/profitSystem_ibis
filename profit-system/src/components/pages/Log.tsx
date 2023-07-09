import {
  Box,
  Flex,
  Heading,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { CalendarIcon } from "@chakra-ui/icons";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

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

        <Box mb="50">
          <Flex alignItems="center">
            <CalendarIcon mr="15" />
            <Text>2023/6/2</Text>
          </Flex>
        </Box>

        <Box bg="white">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>担当者名</Th>
                <Th>担当案件</Th>
                <Th>時間(工数)</Th>
              </Tr>
            </Thead>
            <Tbody alignItems="center">
              <Tr>
                <Td>ユーザ太郎</Td>
                <Td>xxxシステム開発</Td>
                <Td>10時間</Td>
                <SecondaryButton Text="編集" Size="sm" />
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td>ユーザ二郎</Td>
                <Td>xxxシステム開発</Td>
                <Td>5時間</Td>
                <SecondaryButton Text="編集" Size="sm" />
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
});
