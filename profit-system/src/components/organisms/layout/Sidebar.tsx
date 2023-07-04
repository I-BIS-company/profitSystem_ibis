import { Flex } from "@chakra-ui/react";
import { memo, FC } from "react";
import { SBItemsContainer } from "../../molecules/container/SBItemsContainer";
import { SBMainItem } from "../../molecules/link/SBMainItem";
import { SBSubItem } from "../../molecules/link/SBSubItem";

export const Sidebar: FC = memo(() => {
  return (
    <>
      <Flex
        direction="column"
        maxW="256px"
        backgroundColor="orange.50"
        height="100vh"
        fontWeight="600"
      >
        <SBItemsContainer>
          <SBMainItem text="ログ一覧" />
          <SBSubItem text="工数登録" />
        </SBItemsContainer>
        <SBItemsContainer>
          <SBMainItem text="ユーザ一覧" />
        </SBItemsContainer>
        <SBItemsContainer>
          <SBMainItem text="顧客一覧" />
          <SBSubItem text="顧客登録" />
        </SBItemsContainer>
        <SBItemsContainer>
          <SBMainItem text="案件一覧" />
          <SBSubItem text="案件登録" />
          <SBSubItem text="利益一覧" />
        </SBItemsContainer>
      </Flex>
    </>
  );
});
