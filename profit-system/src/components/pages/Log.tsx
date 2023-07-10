import { Box } from "@chakra-ui/react";
import { FC, memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { HeadLine } from "../atoms/HeadLine";
import { DateSearch } from "../atoms/searchs/dateSearch";
import { MainScreenTopContainer } from "../molecules/container/MainScreenTopContainer";
import { LogDate } from "../atoms/LogDate";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplate";
import { LogTableTemplate } from "../molecules/tablelist/LogTableTemplate";

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

        <ContentBgTemplate>
          <LogTableTemplate />
        </ContentBgTemplate>

        <LogDate Date="2023/6/1" />

        <ContentBgTemplate>
          <LogTableTemplate />
        </ContentBgTemplate>
      </Box>
    </>
  );
});
