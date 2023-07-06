import { FC, memo } from "react";
import { Sidebar } from "../organisms/Sidebar";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Flex } from "@chakra-ui/react";

export const Log: FC = memo(() => {
    return (
      <>
      <Flex>
        <Sidebar />
        <p>ログページです</p>;
        <PrimaryButton Text="登録" />
      </Flex>
      </>
    );
  });