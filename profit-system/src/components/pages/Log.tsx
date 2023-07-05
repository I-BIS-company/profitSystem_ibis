import { FC, memo } from "react";
<<<<<<< HEAD
import { Sidebar } from "../organisms/Sidebar";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Flex } from "@chakra-ui/react";
import { Header } from "../organisms/Header";
import { MainTemplate } from "../templates/MainTemplate";

export const Log: FC = memo(() => {
    return (
      <>
      <MainTemplate>
      <Flex>
        <Sidebar />
        <p>ログページです</p>;
        <PrimaryButton Text="登録" />
      </Flex>
      </MainTemplate>
      </>
    );
  });
=======
import { Sidebar } from "../organisms/sidebar/Sidebar";

export const Log: FC = memo(() => {
  return (
    <>
      <Sidebar />
      <p>ログページです</p>;
    </>
  );
});
>>>>>>> ae13bd8 (Add Sidebar component to Log page)
