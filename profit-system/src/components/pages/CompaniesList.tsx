import { Box } from "@chakra-ui/react";
import { memo, FC } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { MainScreenTopContainer } from "../molecules/container/MainScreenTopContainer";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplateContainer";
import { PrimarySearchButton } from "../atoms/button/PrimarySearchButton";
import { CompaniesTableTemplateList } from "../molecules/list/CompaniesTableTemplateList";

export const CompaniesList: FC = memo(() => {
  return (
    <>
      <HeadLine text="顧客一覧" />
      <MainScreenTopContainer>
        <PrimarySearchButton text="顧客名" />
        <Box>
          <PrimaryButton text="顧客名を登録する" size="lg" />
        </Box>
      </MainScreenTopContainer>
      <ContentBgTemplate>
        <CompaniesTableTemplateList />
      </ContentBgTemplate>
    </>
  );
});
