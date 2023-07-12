import { Flex } from "@chakra-ui/react";
import { memo, FC } from "react";
import { SbItemsContainer } from "../molecules/container/SbItemsContainer";
import { SbMainItem } from "../atoms/item/SbMainItem";
import { SbSubItem } from "../atoms/item/SbSubItem";
import { useLocation } from "react-router-dom";

export const Sidebar: FC = memo(() => {
  const location = useLocation();

  return (
    <Flex
      direction="column"
      maxW="256px"
      w="256px"
      backgroundColor="orange.50"
      height="100vh"
      fontWeight="600"
    >
      <SbItemsContainer>
        <SbMainItem text="ログ一覧" path="/log" />
        <SbSubItem text="工数登録" path="/log/workhour_register" />
      </SbItemsContainer>
      <SbItemsContainer>
        <SbMainItem text="ユーザ一覧" path="/users_list" />
      </SbItemsContainer>
      <SbItemsContainer>
        <SbMainItem text="顧客一覧" path="/companies_list" />
        <SbSubItem text="顧客登録" path="/companies_list/company_register" />
      </SbItemsContainer>
      <SbItemsContainer>
        <SbMainItem text="案件一覧" path="/projects_list" />
        <SbSubItem text="案件登録" path="/projects_list/project_register" />
        <SbSubItem text="利益一覧" path="/projects_list/profits_list" />
      </SbItemsContainer>
    </Flex>
  );
});
