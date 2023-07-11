import { Box } from "@chakra-ui/react";
import { memo, FC } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { MainScreenTopContainer } from "../molecules/container/MainScreenTopContainer";
import { DateSearchSelect } from "../atoms/box/DateSearchSelect";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplate";

export const ProjectsList: FC = memo(() => {
  return (
    <>
      <HeadLine text="案件一覧" />

      <MainScreenTopContainer>
        <DateSearchSelect />
        <Box>
          <PrimaryButton text="案件を登録する" />
        </Box>
      </MainScreenTopContainer>

      <ContentBgTemplate>
        <p>aaa</p>
      </ContentBgTemplate>
    </>
  );
});
