import { Box } from "@chakra-ui/react";
import { FC, memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { HeadLine } from "../atoms/HeadLine";
import { DateSearchSelect } from "../atoms/box/DateSearchBox";
import { MainScreenTopContainer } from "../molecules/container/MainScreenTopContainer";
import { LogDate } from "../atoms/LogDate";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplateContainer";
import { LogTableTemplateList } from "../molecules/list/LogTableTemplateList";

export const Log: FC = memo(() => {
  return (
    <>
      <HeadLine text="ログ" />
      <MainScreenTopContainer>
        <DateSearchSelect />
        <Box>
          <PrimaryButton text="工数を登録する" />
        </Box>
      </MainScreenTopContainer>
      <Box>
        <LogDate date="2023/6/2" />
        <ContentBgTemplate>
          <LogTableTemplateList />
        </ContentBgTemplate>
      </Box>
      <Box>
        <LogDate date="2023/6/1" />
        <ContentBgTemplate>
          <LogTableTemplateList />
        </ContentBgTemplate>
      </Box>
    </>
  );
});
