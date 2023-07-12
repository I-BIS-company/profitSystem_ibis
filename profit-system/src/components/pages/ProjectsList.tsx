import { Box } from "@chakra-ui/react";
import { memo, FC } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { MainScreenTopContainer } from "../molecules/container/MainScreenTopContainer";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplateContainer";
import { PrimarySearchButton } from "../atoms/button/PrimarySearchButton";
import { ProjectTableTemplateList } from "../molecules/list/ProjectTableTemplateList";

export const ProjectsList: FC = memo(() => {
  return (
    <>
      <HeadLine text="案件一覧" />

      <MainScreenTopContainer>
        <PrimarySearchButton text="案件名" />
        <Box>
          <PrimaryButton text="案件を登録する" />
        </Box>
      </MainScreenTopContainer>

      <ContentBgTemplate>
        <ContentBgTemplate>
          <ProjectTableTemplateList />
        </ContentBgTemplate>
      </ContentBgTemplate>
    </>
  );
});
