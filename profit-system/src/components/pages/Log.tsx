import { FC, memo } from "react";
import { Sidebar } from "../organisms/Sidebar";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Flex } from "@chakra-ui/react";
import { MainTemplate } from "../templates/MainTemplate";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Log: FC = memo(() => {
    return (
      <>
      <MainTemplate>
      <Flex>
        <Sidebar />
        <p>ログページです</p>;
        <PrimaryButton Text="登録" />
        <SecondaryButton Text="編集"/>
      </Flex>
      </MainTemplate>
      </>
    );
  });
