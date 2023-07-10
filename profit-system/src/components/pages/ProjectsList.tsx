import { Box } from "@chakra-ui/react";
import { memo, FC } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { MainScreenTopContainer } from "../molecules/container/MainScreenTopContainer";
import { DateSearch } from "../atoms/searchs/dateSearch";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplate";

export const ProjectsList: FC = memo(() => {
  return (
    <Box mr="10%" ml="10%" maxW="100%" w="100%" mt="5%">
      <HeadLine Text="案件一覧" />

      <MainScreenTopContainer>
        <DateSearch />
        <Box>
          <PrimaryButton Text="案件を登録する" />
        </Box>
      </MainScreenTopContainer>

      <ContentBgTemplate>
        <p>aaa</p>
      </ContentBgTemplate>
    </Box>
  );
});
