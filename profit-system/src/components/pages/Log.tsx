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
      <HeadLine text="ログ" />
      <MainScreenTopContainer>
        <DateSearch />
        <Box>
          <PrimaryButton text="工数を登録する" />
        </Box>
      </MainScreenTopContainer>

      <LogDate date="2023/6/2" />

      <ContentBgTemplate>
        <LogTableTemplate />
      </ContentBgTemplate>

      <LogDate date="2023/6/1" />

      <ContentBgTemplate>
        <LogTableTemplate />
      </ContentBgTemplate>
    </>
  );
});
