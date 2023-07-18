import { memo, FC } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { ProfitHeadlineItem } from "../molecules/item/ProfitHeadlineItem";
import { ProfitInfoItem } from "../molecules/item/ProfitInfoItem";
import { ProfitCardContainer } from "../molecules/container/ProfitCardContainer";

export const ProfitsList: FC = memo(() => {
  return (
    <>
      <HeadLine text="利益一覧" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <ProfitCardContainer>
          <ProfitHeadlineItem text="A" />
          <Box textAlign="left" mx="auto">
            <Flex justifyContent="space-between" mx="50px">
              <ProfitInfoItem pTitle="売上" pDescription="1,000,000" />
              <ProfitInfoItem pTitle="粗利益" pDescription="500,000" />
            </Flex>
            <Divider my="4" />

            <Flex justifyContent="space-between" mx="50px">
              <ProfitInfoItem pTitle="コスト合計" pDescription="500,000" />
              <ProfitInfoItem
                pTitle="稼働時間"
                pDescription="200"
                unit="時間"
              />
            </Flex>
          </Box>
        </ProfitCardContainer>

        <ProfitCardContainer>
          <ProfitHeadlineItem text="B" />
          <Box textAlign="left" mx="auto">
            <Flex justifyContent="space-between" mx="50px">
              <ProfitInfoItem pTitle="売上" pDescription="2,000,000" />
              <ProfitInfoItem pTitle="粗利益" pDescription="1,000,000" />
            </Flex>
            <Divider my="4" />

            <Flex justifyContent="space-between" mx="50px">
              <ProfitInfoItem pTitle="コスト合計" pDescription="1,000,000" />
              <ProfitInfoItem
                pTitle="稼働時間"
                pDescription="200"
                unit="時間"
              />
            </Flex>
          </Box>
        </ProfitCardContainer>
      </Flex>
    </>
  );
});
