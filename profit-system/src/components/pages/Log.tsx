import {
  Box,
  Flex,
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
import { HeadLine } from "../atoms/HeadLine";

export const Log: FC = memo(() => {
  return (
    <>
      <Box mr="10%" ml="10%" maxW="100%" w="100%" mt="5%">
        <HeadLine Text="ログ" />
        <Flex justifyContent="space-between" w="100%" mb="14">
          <Box>
            <Select bg="white" outline="none">
              <option>2023/06</option>
              <option>2023/07</option>
              <option>2023/08</option>
            </Select>
          </Box>
          <Box>
            <PrimaryButton Text="工数を登録する" />
          </Box>
        </Flex>

        <Box mb="25">
          <Flex alignItems="center">
            <CalendarIcon mr="15" />
            <Text>2023/6/2</Text>
          </Flex>
        </Box>

        <Box bg="white" mb="70" borderRadius="5px" boxShadow="base">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th
                  color="blue.500"
                  fontSize="16"
                  borderRight="1px solid"
                  borderRightColor="blackAlpha.200"
                >
                  担当者名
                </Th>
                <Th
                  color="blue.500"
                  fontSize="16"
                  borderRight="1px solid"
                  borderRightColor="blackAlpha.200"
                >
                  担当案件
                </Th>
                <Th color="blue.500" fontSize="16">
                  時間(工数)
                </Th>
              </Tr>
            </Thead>
            <Tbody alignItems="center">
              <Tr fontSize="14">
                <Td borderRight="1px solid" borderRightColor="blackAlpha.200">
                  ユーザ太郎
                </Td>
                <Td borderRight="1px solid" borderRightColor="blackAlpha.200">
                  xxxシステム開発
                </Td>
                <Td>10時間</Td>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  pt="2.5"
                >
                  <SecondaryButton Text="編集" Size="sm" />
                </Box>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr fontSize="14">
                <Td borderRight="1px solid" borderRightColor="blackAlpha.200">
                  ユーザ二郎
                </Td>
                <Td borderRight="1px solid" borderRightColor="blackAlpha.200">
                  xxxシステム開発
                </Td>
                <Td>5時間</Td>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  pt="2.5"
                >
                  <SecondaryButton Text="編集" Size="sm" />
                </Box>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Box mb="25">
          <Flex alignItems="center">
            <CalendarIcon mr="15" />
            <Text>2023/6/1</Text>
          </Flex>
        </Box>

        <Box bg="white" mb="70">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th color="blue.500" fontSize="16">
                  担当者名
                </Th>
                <Th color="blue.500" fontSize="16">
                  担当案件
                </Th>
                <Th color="blue.500" fontSize="16">
                  時間(工数)
                </Th>
              </Tr>
            </Thead>
            <Tbody alignItems="center">
              <Tr fontSize="14">
                <Td>ユーザ花子</Td>
                <Td>xxxシステム開発</Td>
                <Td>10時間</Td>
                <SecondaryButton Text="編集" Size="sm" />
              </Tr>
            </Tbody>
            <Tbody>
              <Tr fontSize="14">
                <Td>ユーザ勝地</Td>
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
