import { memo, FC } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { ProfitHeadlineItem } from "../molecules/item/ProfitHeadlineItem";
import { ProfitInfoItem } from "../molecules/item/ProfitInfoItem";

export const ProfitsList: FC = memo(() => {
  return (
    <>
      <HeadLine text="利益一覧" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box
          mx="auto"
          h="auto"
          bg="white"
          justifyContent="center"
          boxShadow="base"
          borderRadius="5px"
          p="25px"
          w="450px"
          mb="50px"
        >
          <ProfitHeadlineItem text="AXXXXXXXX社向け会計システム開発" />
          <Box>
            <Flex>
              <ProfitInfoItem pTitle="売上" pDescription="1,000,000" />
              <ProfitInfoItem pTitle="粗利益" pDescription="500,000" />
            </Flex>
            <Divider my="4" />
            <Flex>
              <ProfitInfoItem pTitle="コスト合計" pDescription="500,000" />
              <ProfitInfoItem
                pTitle="稼働時間"
                pDescription="200"
                unit="時間"
              />
            </Flex>
          </Box>
        </Box>

        <Box
          mx="auto"
          h="auto"
          bg="white"
          justifyContent="center"
          boxShadow="base"
          borderRadius="5px"
          p="25px"
          w="450px"
          mb="50px"
        >
          <ProfitHeadlineItem text="B社向けシステム開発" />
          <Box>
            <Flex>
              <ProfitInfoItem pTitle="売上" pDescription="2,000,000" />
              <ProfitInfoItem pTitle="粗利益" pDescription="1,000,000" />
            </Flex>
            <Divider my="4" />
            <Flex>
              <ProfitInfoItem pTitle="コスト合計" pDescription="500,000" />
              <ProfitInfoItem
                pTitle="稼働時間"
                pDescription="200"
                unit="時間"
              />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
});
