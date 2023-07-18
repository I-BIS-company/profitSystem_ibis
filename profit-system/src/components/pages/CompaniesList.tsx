import { Box } from "@chakra-ui/react";
import { memo, FC } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { MainScreenTopContainer } from "../molecules/container/MainScreenTopContainer";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplateContainer";
import { PrimarySearchButton } from "../atoms/button/PrimarySearchButton";
import { CompaniesTableTemplateList } from "../molecules/list/CompaniesTableTemplateList";
import { IconButton } from "../atoms/button/IconButton";

export const CompaniesList: FC = memo(() => {
  return (
    <>
      <HeadLine text="顧客一覧" />
      <MainScreenTopContainer>
        <PrimarySearchButton text="顧客名" />
        <Box>
          <IconButton text="顧客名を登録する" />
        </Box>
      </MainScreenTopContainer>
      <ContentBgTemplate>
        <CompaniesTableTemplateList />
      </ContentBgTemplate>
    </>
  );
});
