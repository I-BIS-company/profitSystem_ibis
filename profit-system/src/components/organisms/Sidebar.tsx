import { Flex } from "@chakra-ui/react";
import { memo, FC } from "react";
import { SbItemsContainer } from "../molecules/container/SbItemsContainer";
import { SbMainItem } from "../atoms/item/SbMainItem";
import { SbSubItem } from "../atoms/item/SbSubItem";

export const Sidebar: FC = memo(() => {
  return (
    <>
      <Flex
        direction="column"
        maxW="256px"
        w="256px"
        backgroundColor="orange.50"
        height="100vh"
        fontWeight="600"
      >
        <SbItemsContainer>
          <SbMainItem text="ログ一覧" />
          <SbSubItem text="工数登録" />
        </SbItemsContainer>
        <SbItemsContainer>
          <SbMainItem text="ユーザ一覧" />
        </SbItemsContainer>
        <SbItemsContainer>
          <SbMainItem text="顧客一覧" />
          <SbSubItem text="顧客登録" />
        </SbItemsContainer>
        <SbItemsContainer>
          <SbMainItem text="案件一覧" />
          <SbSubItem text="案件登録" />
          <SbSubItem text="利益一覧" />
        </SbItemsContainer>
      </Flex>
    </>
  );
});
