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
          <Box>
            <Flex>
              <Box w="50%" flexShrink="1" mx="50px">
                <ProfitInfoItem pTitle="売上" pDescription="1,000,000" />
              </Box>
              <Box w="50%" flexShrink="1">
                <ProfitInfoItem pTitle="粗利益" pDescription="500,000" />
              </Box>
            </Flex>
            <Divider my="4" />

            <Flex>
              <Box w="50%" flexShrink="1" mx="50px">
                <ProfitInfoItem pTitle="コスト合計" pDescription="500,000" />
              </Box>
              <Box w="50%" flexShrink="1">
                <ProfitInfoItem
                  pTitle="稼働時間"
                  pDescription="200"
                  unit="時間"
                />
              </Box>
            </Flex>
          </Box>
        </ProfitCardContainer>

        <ProfitCardContainer>
          <ProfitHeadlineItem text="B" />
          <Box>
            <Flex>
              <Box w="50%" flexShrink="1" mx="50px">
                <ProfitInfoItem pTitle="売上" pDescription="2,000,000" />
              </Box>
              <Box w="50%" flexShrink="1">
                <ProfitInfoItem pTitle="粗利益" pDescription="1,000,000" />
              </Box>
            </Flex>
            <Divider my="4" />

            <Flex>
              <Box w="50%" flexShrink="1" mx="50px">
                <ProfitInfoItem pTitle="コスト合計" pDescription="1,000,000" />
              </Box>
              <Box w="50%" flexShrink="1">
                <ProfitInfoItem
                  pTitle="稼働時間"
                  pDescription="200"
                  unit="時間"
                />
              </Box>
            </Flex>
          </Box>
        </ProfitCardContainer>
      </Flex>
    </>
  );
});
