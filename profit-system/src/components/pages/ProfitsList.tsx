import { memo, FC } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { ProfitHeadlineItem } from "../molecules/item/ProfitHeadlineItem";
import { SalesItem } from "../molecules/item/SalesItem";
import { GrossProfitItem } from "../molecules/item/GrossProfitItem";
import { TotalCostItem } from "../molecules/item/TotalCostItem";
import { WorkingHoursItem } from "../molecules/item/WorkingHoursItem";
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
              <SalesItem value="1,000,000" />
              <GrossProfitItem value="500,000" />
            </Flex>
            <Divider my="4" />

            <Flex justifyContent="space-between" mx="50px">
              <TotalCostItem value="500,000" />
              <WorkingHoursItem value={200} />
            </Flex>
          </Box>
        </ProfitCardContainer>

        <ProfitCardContainer>
          <ProfitHeadlineItem text="B" />
          <Box textAlign="left" mx="auto">
            <Flex justifyContent="space-between" mx="50px">
              <SalesItem value="2,000,000" />
              <GrossProfitItem value="1,000,000" />
            </Flex>
            <Divider my="4" />

            <Flex justifyContent="space-between" mx="50px">
              <TotalCostItem value="1,000,000" />
              <WorkingHoursItem value={200} />
            </Flex>
          </Box>
        </ProfitCardContainer>
      </Flex>
    </>
  );
});
