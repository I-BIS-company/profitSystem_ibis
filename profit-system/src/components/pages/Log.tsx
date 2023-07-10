import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC, memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { HeadLine } from "../atoms/HeadLine";
import { DateSearch } from "../atoms/searchs/dateSearch";
import { MainScreenTopContainer } from "../molecules/container/MainScreenTopContainer";
import { LogDate } from "../atoms/LogDate";
import { ContentTemplate } from "../molecules/container/ContentTemplate";

export const Log: FC = memo(() => {
  return (
    <>
      <Box mr="10%" ml="10%" maxW="100%" w="100%" mt="5%">
        <HeadLine Text="ログ" />
        <MainScreenTopContainer>
          <DateSearch />
          <Box>
            <PrimaryButton Text="工数を登録する" />
          </Box>
        </MainScreenTopContainer>

        <LogDate Date="2023/6/2" />

        <ContentTemplate>
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
        </ContentTemplate>
      </Box>
    </>
  );
});
